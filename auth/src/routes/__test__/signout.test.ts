import request from "supertest";
import { app } from "../../app";

it("clears the cookie after signing out", async () => {
  await global.signup();

  const signoutResponse = await request(app)
    .post("/api/users/signout")
    .send({})
    .expect(200);
  expect(signoutResponse.get("Set-Cookie")[0]).toEqual(
    "session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly"
  );
});
