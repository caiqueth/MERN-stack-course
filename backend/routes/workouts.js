const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutController")


const router = express.Router();

// Get all workouts
router.get("/", getWorkouts);

// Get single workout
router.get("/:id", getWorkout);

// Post new workout
router.post("/", createWorkout)

// Delete workout
router.delete("/:id", deleteWorkout)

// Update workout
router.patch("/:id", updateWorkout)

module.exports = router;