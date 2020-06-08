const express = require("express");
const Workout = require("../models/workout.js");
const router = express.Router();

let moment = require("moment");


router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        console.log("Workout created!");
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});