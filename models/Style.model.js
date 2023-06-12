const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const styleSchema = new Schema(
  {
    beardStyle: {
      type: String,
    },
    hairStyle: {
      type: String,
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
        nameOfCelebrity: {
          type: String,
        },
        image: {
          type: String,
        },
      },
    ],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Style = model("Style", styleSchema);

module.exports = Style;
