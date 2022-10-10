import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import { app } from "../app";
import jwt from "jsonwebtoken";

declare global {
  var signin: (id?: string) => string[];
}

jest.mock("../nats-wrapper");

let mongo: any;

process.env.STRIPE_SECRET_KEY =
  "sk_test_51Lr4BoGzh3c2lTlXT9sIYTUQ4fQTQgEkg7O4SR1SMp2TrqZr0zOyPbg2oB7DqgcWEofYmta4YSXTlFvSP6BHbPWm00ceakvQes";
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

global.signin = (id?: string) => {
  // build the jwt payload, {id, email}
  const payload = {
    id: id || new mongoose.Types.ObjectId().toHexString(),
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
