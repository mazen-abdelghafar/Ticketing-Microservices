import request from "supertest";
import { app } from "../../app";

it("fails with an email that doesnt exist", async () => {
  return request(app)
    .post("/api/users/signin")
    .send({
      email: "asfasfefa@gmail.com",
      password: "pass123",
    })
    .expect(400);
});

it("fails with an incorrect password", async () => {
  await global.signup();

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "user@gmail.com",
      password: "asdgasgrgaseasrgr",
    })
    .expect(400);
});

it("responds with a cookie when given valid credentials", async () => {
  await global.signup();

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "user@gmail.com",
      password: "pass123",
    })
    .expect(200);
  expect(response.get("Set-Cookie")).toBeDefined();
});
