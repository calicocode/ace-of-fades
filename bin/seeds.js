const mongoose = require("mongoose");
const Style = require("../models/Style.model");
//const User = require('../models/User.model');

const styles = [
  {
    beardStyle: "Chevron Mustache",
    primaryImage: "../images/chevron.webp",
    slogan:
      "The quintessential mustache style. Famous Chevrons include Freddie Mercury, and your dad probably...",
    /* additionalImages: [
      "../images/chevron.png",
      "../images/chevron.png",
      "../images/chevron.png",
    ], */
    description:
      "The chevron mustache is the quintessential mustache style. It follows the shape of the upper lip, resulting in a natural mustache that has a slight upside-down V shape. We couldn’t find any evidence that this is where it gets its name, but if you took the Chevron Corporation logo and flipped it upside-down, that’s what a chevron mustache looks like. If you’ve never worn just a mustache, the chevron is a great place to start. It’s a natural style that requires minimal grooming. It’s timeless.",
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
    slogan: "Timeless cut",
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
    slogan: "this needs ZERO introduction...",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description: "This is a BEAST of a handlebar moustache",
    /* celebrities: [
      {
        nameOfCelebrity: "Peaky Blinders",
        image: "URL",
      },
    ], */
  },

  {
    beardStyle: "The Lampshade",
    primaryImage: "../images/lampshade.webp",
    slogan: "this needs ZERO introduction...",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description:
      "The lampshade gets its name from its trapezoid shape. It looks like a lampshade. But this style is often labeled as a cop ‘stache due to the long-standing grooming regulations for servicemen — military included. Recently, this style has become synonymous with Miles Teller’s Top Gun mustache. For most servicemen, a mustache is the only facial hair permitted. However, it cannot extend wider than the edge of the top lip, higher than the bottom of the nose, and the hair cannot touch the upper lip. Mustaches also must not appear to be chopped off or bushy, so the length is kept shorter. It’s worth noting that many municipalities are loosening the grooming regulations for police officers allowing for beards, other styles of mustaches, and visible tattoos.",
    /* celebrities: [
      {
        nameOfCelebrity: "Peaky Blinders",
        image: "URL",
      },
    ], */
  },

  {
    beardStyle: "The Walrus",
    primaryImage: "../images/walrus.webp",
    slogan: "this needs ZERO introduction...",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description:
      "The walrus gets its name because, well, it resembles a walrus’s whiskers. It engulfs the top lip and may also cover the bottom lip. It’s a natural style that is combed straight down and not curled into handlebars. It’s not the most practical ‘stache but it is an impressive feat. Not every man can grow a walrus mustache. You need a long terminal length on your mustache hair, and this is something that is controlled by your DNA.",
    /* celebrities: [
      {
        nameOfCelebrity: "Peaky Blinders",
        image: "URL",
      },
    ], */
  },

  {
    beardStyle: "The Painter´s brush",
    primaryImage: "../images/painter.webp",
    slogan: "this needs ZERO introduction...",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description:
      "The painter’s brush mustache has the thickness of the chevron but without the downward angle. Similar to the lampshade, the painter’s brush is groomed not to extend wider than the mouth. Imagine a painter took a quick horizontal swipe with their brush under your nose—that’s your painter’s brush mustache. Groucho Marx actually painted on his absurd painter’s brush mustache early in his career. You don’t really see too many actual painter’s brush mustaches as they seem to be purely ironic.",
    /* celebrities: [
      {
        nameOfCelebrity: "Peaky Blinders",
        image: "URL",
      },
    ], */
  },

  {
    beardStyle: "The Handlebar",
    primaryImage: "../images/handlebar.webp",
    slogan: "this needs ZERO introduction...",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description:
      "There are few things as impressive as a handlebar mustache. The standard handlebar is thick with the handles, or ends of the mustache, grown long. The mustache is waxed with the ends shaped into fine points. The handles curl out over the cheeks and back towards the middle of the face.",
    /* celebrities: [
      {
        nameOfCelebrity: "Peaky Blinders",
        image: "URL",
      },
    ], */
  },

  {
    beardStyle: "The English",
    primaryImage: "../images/english.webp",
    slogan: "this needs ZERO introduction...",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description:
      "The English mustache—well, since it’s English, we suppose it would be the English moustache—is distinguished and aristocratic. It is mostly the same as the handlebar mustache, with the only difference being that the handles are not curled. Instead, they are waxed horizontally and shaped to a point.",
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
