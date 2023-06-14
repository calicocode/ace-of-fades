const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    /*     username: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },
 */
    firstname: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },

    role: {
      type: String,
      enum: ["admin", "customer"],
      required: true,
      default: "customer",
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },

    myUploadedStyles: [
      {
        title: String,
        slogan: String,
        imageURL: String,
      },
    ],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
