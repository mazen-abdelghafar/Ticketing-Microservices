import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

declare global {
  var signin: () => string[];
}

jest.mock("../nats-wrapper");

let mongo: any;

beforeAll(async () => {
  process.env.JWT_KEY = "asdfasgre";

  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
}, 60000);

global.signin = () => {
  // build the jwt payload, {id, email}
  const payload = {
    id: new mongoose.Types.ObjectId().toHexString(),
    email: "user1@gmail.com",
  };

  // create the jwt token
  const token = jwt.sign(payload, process.env.JWT_KEY!);

  // build the session object, {jwt: token}
  const session = { jwt: token };

  // turn the session to json
  const sessionJson = JSON.stringify(session);

  // encode it as base64
  const base64 = Buffer.from(sessionJson).toString("base64");

  // return the encoded base64 as a cookie
  return [`session=${base64}`];
};
