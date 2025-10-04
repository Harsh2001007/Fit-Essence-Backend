const Exercise = require("../models/exerciseModel");

exports.postExercise = async (req, res) => {
    try{
        const newExercise = await Exercise.create(req.body)
        res.status(201).json({
            status: "new exercise created",
            data: {
                tour: newExercise,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "doc not created, plz check error",
            error: err,
        });
    }
}

exports.getExercises = async (req, res) => {
    try {
        const allExercise = await Exercise.find();

        // map the docs to your desired shape
        const formatted = allExercise.map((ex) => ({
            _id: ex._id,
            _createdAt: ex._createdAt,
            _updatedAt: ex._updatedAt,
            _rev: "DZ9eudr4jMd24KPubNYMO1", // static/dummy since Mongo doesn't create this
            _type: "exercise",
            description: ex.description,
            difficulty: ex.difficulty,
            image: ex.image,
            isActive: ex.isActive,
            name: ex.name,
        }));

        res.status(200).json({
            result: formatted,
        });
    } catch (err) {
        res.status(400).json({
            status: "something went wrong, while trying to get exercises",
            error: err.message,
        });
    }
};


exports.getExerciseById = async (req, res) => {
    try {
        const { id } = req.params;

        // Find exercise by ID
        const exercise = await Exercise.findById(id);

        if (!exercise) {
            return res.status(404).json({
                status: "fail",
                message: "Exercise not found",
            });
        }

        // Format the response to match your desired schema
        const formatted = {
            _id: exercise._id,
            _createdAt: exercise._createdAt,
            _updatedAt: exercise._updatedAt,
            _rev: "DZ9eudr4jMd24KPubNYMO1", // static/dummy for now
            _type: "exercise",
            description: exercise.description,
            difficulty: exercise.difficulty,
            image: exercise.image,
            isActive: exercise.isActive,
            name: exercise.name,
        };

        res.status(200).json({
            result: formatted,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: "error",
            message: "Something went wrong while fetching the exercise",
            error: err.message,
        });
    }
};