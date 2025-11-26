const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let token = null;
let id = null;

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api
    .post("/api/user/signup")
    .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
  token = result.body.token;
});

describe("when there is initially some workouts saved", () => {
  beforeEach(async () => {
    await Workout.deleteMany({});
    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(workouts[0]);
    const response = await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(workouts[1]);
    id = response.body._id;
  });

  it("Workouts are returned as json", async () => {
    await api
      .get("/api/workouts")
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  it("is added successfully", async () => {
    const newWorkout = {
      title: "testworkout",
      reps: 10,
      load: 100,
    };
    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(201);
  });

  it("is gone after deleting", async () => {
    await api
      .delete(`/api/workouts/${id}`)
      .set("Authorization", "bearer " + token)
      .expect(200);
    const response = await api
      .get("/api/workouts")
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    expect(response.body.length).toBe(1);
  });

  it("is updated", async () => {
    await api
      .patch(`/api/workouts/${id}`)
      .set("Authorization", "bearer " + token)
      .send({ load: 0 })
      .expect(200)
      .expect("Content-Type", /application\/json/);
    const response = await api
      .get(`/api/workouts/${id}`)
      .set("Authorization", "bearer " + token)
      .expect(200);
    expect(response.body.load).toBe(0);
  });

  it("reads a single workout by id", async () => {
    const response = await api
      .get(`/api/workouts/${id}`)
      .set("Authorization", "bearer " + token)
      .expect(200);
    expect(response.body).toBeDefined();
    expect(response.body).toHaveProperty("_id");
  });
});

afterAll(() => {
  mongoose.connection.close();
});
