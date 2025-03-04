import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import { app } from "../app";

declare global {
  var signup: () => Promise<string[]>;
}

let mongo: any;

beforeAll(async () => {
  process.env.JWT_KEY = "asdfasgre";

  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
}, 60000);

global.signup = async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "user@gmail.com",
      password: "pass123",
    })
    .expect(201);
  expect(response.get("Set-Cookie")).toBeDefined();

  const cookie = response.get("Set-Cookie");

  return cookie;
};
