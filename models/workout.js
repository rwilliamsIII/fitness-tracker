const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    "day": Number,
    "exercises": [
        {
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]
},
    { typeKey: '$type' }
);

const Workout = mongoose.model("Workout", fitnessSchema);
module.exports = Workout;