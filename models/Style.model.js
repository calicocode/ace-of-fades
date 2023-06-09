const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const styleSchema = new Schema(
  {
    style: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: false,
    },
    primaryImage: {
      type: String,
      required: true,
    },

    additionalImages: [
      {
        type: String,
        required: false,
      },
    ],

    description: {
      type: String,
      required: true,
    },

    celebrities: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("Style", styleSchema);

module.exports = Style;
