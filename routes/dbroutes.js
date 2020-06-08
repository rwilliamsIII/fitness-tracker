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

router.put("/api/workouts/:id", (req, res) => {
    console.log("Workout updated!");
    let selected = Workout.where({ _id: req.params.id });
    console.log(req.params.id);
    Workout.updateOne(query,
        {
            $set: {
                day: new Date().setDate(new Date().getDate()),
            },
            $push: {
                exercises: { type: req.body.type, name: req.body.name, duration: req.body.duration, weight: req.body.weight, sets: req.body.sets, reps: req.body.reps, distance: req.body.distance }
            }})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
                console.log(err);
            });
});

router.get("/api/workouts/range", (req, res) => {
    let startWeek = moment().startOf("week").toDate();
    let endWeek = moment().endOf("week").toDate();
    Workout.find({
        day: {
            $gte: startWeek,
            $lt: endWeek
        }})
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    }).catch(err => {
        console.log(err);
    });
});