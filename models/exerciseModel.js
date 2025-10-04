const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
        difficulty: {
            type: String,
            enum: ["beginner", "intermediate", "advanced"], // optional restriction
            required: true,
        },
        image: {
            _type: {
                type: String,
                default: "image",
            },
            alt: {
                type: String,
                required: true,
            },
            asset: {
                _ref: {
                    type: String,
                    required: true,
                },
                _type: {
                    type: String,
                    default: "reference",
                },
            },
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: { createdAt: "_createdAt", updatedAt: "_updatedAt" },
    }
)

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;