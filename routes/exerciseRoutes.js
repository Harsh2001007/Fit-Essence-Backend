const express = require("express");
const exerciseController = require("../controllers/exerciseController");

const router = express.Router();
router.route("/").post(exerciseController.postExercise)
router.route("/").get(exerciseController.getExercises)
router.route("/:id").get(exerciseController.getExerciseById)

module.exports = router;