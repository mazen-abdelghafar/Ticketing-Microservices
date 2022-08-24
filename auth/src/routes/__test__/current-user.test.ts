import request from "supertest";
import { app } from "../../app";

it("responds with details about the current user", async () => {
  const cookie = await global.signup();

  const currentuserResponse = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .expect(200);
  expect(currentuserResponse.body.currentUser.email).toBe("user@gmail.com");
});

it("responds with null if not authenticated", async () => {
  const currentuserResponse = await request(app)
    .get("/api/users/currentuser")
    .expect(200);
  expect(currentuserResponse.body.currentUser).toBeNull();
});
