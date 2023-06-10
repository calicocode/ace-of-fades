const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const styleSchema = new Schema(
  {
    beardStyle: {
      type: String,
      enum: [
        "Chevron Mustache",
        "Lampshade Mustache",
        "Walrus Mustache",
        "Painter's Brush Mustache",
        "Toothbrush Mustache",
        "Handlebar Mustache",
        "English Mustache",
        "Hungarian Mustache",
        "Beardstache",
        "Horseshoe Mustache",
      ],
    },
    hairStyle: {
      type: String,
      enum: [
        "Crew Cut",
        "Buzz Cut",
        "Pompadour",
        "Undercut",
        "The Peaky Blinder",
        "The Man Bun",
        "Mohawk",
        "Textured Crop",
        "Bowl Cut",
        "Modern Mullet",
      ],
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
