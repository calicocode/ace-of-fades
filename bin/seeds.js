const mongoose = require("mongoose");
const Style = require("../models/Style.model");
//const User = require('../models/User.model');

const styles = [
  {
    beardStyle: "Chevron Mustache",
    primaryImage: "../images/chevron.png",
    keywords:
      "The quintessential mustache style. Famous Chevrons include Freddie Mercury, and your dad probably...",
    /* additionalImages: [
      "../images/chevron.png",
      "../images/chevron.png",
      "../images/chevron.png",
    ], */
    description: "This is a BEAST of a handlebar moustache",
    /* celebrities: [
      {
        nameOfCelebrity: "Brad Pitt",
        image: "URL",
      },
      {
        nameOfCelebrity: "Matt Dawon",
        image: "URL",
      },

      {
        nameOfCelebrity: "Al Pacino",
        image: "URL",
      },
    ], */
  },

  {
    beardStyle: "Beardstache",
    primaryImage: "../images/beardstache.png",
    keywords: "Slight upside-down V shape. Partially covers upper lip",
    /* additionalImages: [
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description: "This is a BEAST of a handlebar moustache",
    /* celebrities: [
      {
        nameOfCelebrity: "Brad Pitt",
        image: "URL",
      },
      {
        nameOfCelebrity: "Matt Dawon",
        image: "URL",
      },

      {
        nameOfCelebrity: "Al Pacino",
        image: "URL",
      },
    ], */
  },

  {
    hairStyle: "Crew Cut",
    primaryImage: "../images/beardstache.png",
    keywords: "Timeless cut",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description: "This is a BEAST of a handlebar moustache",
    /* celebrities: [
      {
        nameOfCelebrity: "Brad Pitt",
        image: "URL",
      },
      {
        nameOfCelebrity: "Dawson",
        image: "URL",
      },

      {
        nameOfCelebrity: "Vin Diesel",
        image: "URL",
      },
    ], */
  },

  {
    hairStyle: "The Peaky Blinder",
    primaryImage: "../images/beardstache.png",
    keywords: "this needs ZERO introduction...",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description: "This is a BEAST of a handlebar moustache",
    /* celebrities: [
      {
        nameOfCelebrity: "Peaky Blinders",
        image: "URL",
      },
    ], */
  },
];

async function seedData() {
  try {
    /* CONNECT */
    const MONGO_URI =
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ace-of-fades";
    const conn = await mongoose.connect(MONGO_URI);
    console.log(
      `Connected to Mongo! Database name: "${conn.connections[0].name}"`
    );

    /* DELETE EXISTING DATA */

    const deletedStyles = await Style.deleteMany({}); //WARNING: this will delete all books in your DB !!
    console.log(deletedStyles);

    /* Seed styles */
    const stylesCreated = await Style.insertMany(styles);
    console.log(`Number of styles created... ${stylesCreated.length} `);

    /* CLOSE DB CONNECTION */
    mongoose.connection.close();
  } catch (e) {
    console.log("error seeding data in DB....", e);
  }
}

seedData();

/* enum: [
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
], */

/* enum: [
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
], */
