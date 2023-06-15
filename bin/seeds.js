const mongoose = require("mongoose");
const Style = require("../models/Style.model");
//const User = require('../models/User.model');

const styles = [
  {
    beardStyle: "Chevron Mustache",
    primaryImage: "/images/chevron.webp",
    slogan:
      "The quintessential mustache style. Famous Chevrons include Freddie Mercury, and your dad probably...",
    /* additionalImages: [
      "/images/chevron.png",
      "/images/chevron.png",
      "/images/chevron.png",
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
    beardStyle: "The Lampshade",
    primaryImage: "/images/lampshade.webp",
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
    primaryImage: "/images/walrus.webp",
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
    primaryImage: "/images/painter.webp",
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
    primaryImage: "/images/handlebar.webp",
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
    primaryImage: "/images/english.webp",
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

  {
    beardStyle: "The Hungarian",
    primaryImage: "/images/hungarian.webp",
    slogan: "this needs ZERO introduction...",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description:
      "The Hungarian Mustache is the stuff of legends. Part walrus, part handlebar, and 100% badass. It’s a big, swooping handlebar that, due to its size, sits lower on the cheeks. All your old legends of the Wild West, including Wyatt Earp and Seth Bullock, wore Hungarian Mustaches. They probably weren't known as Hungarian mustaches at the time, though. Val Kilmer’s depiction of Doc Holliday has more of the standard handlebar, but photos of Holliday generally show him with a Hungarian. We aren’t quite sure where it gets its name. It may be tied to Franz Ferdinand—the Archduke of the Austro-Hungarian Empire, not the band—or it could be because the mustache is so big it eats your face… because it was Hungary. What, you thought you were going to read a blog about mustaches and not come across one dad joke?",
    /* celebrities: [
      {
        nameOfCelebrity: "Peaky Blinders",
        image: "URL",
      },
    ], */
  },

  {
    beardStyle: "The Dalí",
    primaryImage: "/images/dali.webp",
    slogan: "this needs ZERO introduction...",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description:
      "Made famous by the Spanish surrealist painter Salvador Dalí, the Dalí is an elaborate take on the traditional handlebar mustache. The Dalí is a pencil mustache with long handles. The handlebars are waxed thin and form a sharp point. They’re most often seen styled straight up towards the outer edges of the eyes resulting in a ‘stache that resembles the horns of a Texas Longhorn. Dalí often styled his handlebars eccentrically, sometimes into an infinity symbol.",
    /* celebrities: [
      {
        nameOfCelebrity: "Peaky Blinders",
        image: "URL",
      },
    ], */
  },

  {
    beardStyle: "The Fu Manchu",
    primaryImage: "/images/fumanchu.webp",
    slogan: "this needs ZERO introduction...",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description:
      "Ready to have your mind blown? The Fu Manchu is a Dalí Mustache with two slight differences—a wide gap is shaved at the philtrum, and the handles are styled to hang straight down instead of being pointed upwards. Horseshoe mustaches are often mislabeled as a Fu Manchu, but the Fu Manchu differs from the horseshoe in that the Fu Manchu is only connected to the face at the top corners of the mouth. If you can’t lift your handles away from your face and style them in another direction, you’ve got a horseshoe, not a Fu Manchu.",
    /* celebrities: [
      {
        nameOfCelebrity: "Peaky Blinders",
        image: "URL",
      },
    ], */
  },

  {
    beardStyle: "The Horseshoe",
    primaryImage: "/images/horseshoe.webp",
    slogan: "this needs ZERO introduction...",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description:
      "The horseshoe is the American muscle car of mustaches. It’s big, loud, and popular in the south. Perhaps no mustache is mislabeled more than the horseshoe—it’s not a Fu Manchu. The horseshoe is a thick, full mustache that connects to two vertical strips of cheek hair grown parallel to the mouth and extending to the jawline. Take a circle beard and shave just the chin—that’s a horseshoe. Longer walrus mustaches are often mislabeled as horseshoes as well. The difference? The walrus is all mustache that has grown long enough and hangs low enough next to the mouth to resemble a horseshoe. But a pure horseshoe? That requires cheek hair. You can’t lift a horseshoe away from your face. The horseshoe has had a resurgence amongst athletes, especially NFL quarterbacks. Aaron Rodgers, Jared Allen, and Joe Flacco have all worn them. The original NFL horseshoe? Broadway Joe Namath.",
    /* celebrities: [
      {
        nameOfCelebrity: "Peaky Blinders",
        image: "URL",
      },
    ], */
  },

  {
    beardStyle: "The Beardstache",
    primaryImage: "/images/beardstache.webp",
    slogan: "Badass as hell",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description:
      "The Beardstache itself isn’t a particular mustache style, and it can be worn with many of the styles mentioned above. The Beardstache is simply the combination of a full mustache and a bit of stubble—anywhere from a few days to a few weeks. We’re big fans of the beardstache and think that it’s one of the coolest ways to wear a mustache in 2020. The stubble gives your jawline and cheek lines a little more definition, and the contrast between the full mustache and the stubble looks badass.",
    /* celebrities: [
      {
        nameOfCelebrity: "Peaky Blinders",
        image: "URL",
      },
    ], */
  },

  {
    beardStyle: "The Zappa",
    primaryImage: "/images/zappa.webp",
    slogan: "Badass as hell",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description:
      "Made famous by Frank Zappa, The Zappa is a shortened version of the Horseshoe Mustache with the addition of a soul patch.",
    /* celebrities: [
      {
        nameOfCelebrity: "Peaky Blinders",
        image: "URL",
      },
    ], */
  },

  {
    hairStyle: "The Manbun",
    primaryImage: "/images/bun.png",
    slogan: "Timeless cut",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description: "This is a BEAST of a handlebar moustache",
  },

  {
    hairStyle: "The Daddy",
    primaryImage: "/images/daddy.png",
    slogan: "this needs ZERO introduction...",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description: "This is a BEAST of a handlebar moustache",
  },

  {
    hairStyle: "The Fade",
    primaryImage: "/images/fade.png",
    slogan: "Timeless cut",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description: "This is a BEAST of a handlebar moustache",
  },

  {
    hairStyle: "The Flat top",
    primaryImage: "/images/flat.png",
    slogan: "this needs ZERO introduction...",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description: "This is a BEAST of a handlebar moustache",
  },

  {
    hairStyle: "The Hipster",
    primaryImage: "/images/hipster.png",
    slogan: "Timeless cut",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description: "This is a BEAST of a handlebar moustache",
  },

  {
    hairStyle: "The New Yorker",
    primaryImage: "/images/newyork.png",
    slogan: "this needs ZERO introduction...",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description: "This is a BEAST of a handlebar moustache",
  },

  {
    hairStyle: "The Spiky",
    primaryImage: "/images/spiky.png",
    slogan: "Timeless cut",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description: "This is a BEAST of a handlebar moustache",
  },

  {
    hairStyle: "The Wavy",
    primaryImage: "/images/wavy.png",
    slogan: "this needs ZERO introduction...",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description: "This is a BEAST of a handlebar moustache",
  },

  {
    hairStyle: "The Baldy",
    primaryImage: "/images/baldy.png",
    slogan: "Timeless cut",
    /* additionalImages: ["URL1", "URL2", "URL3"], */
    description: "This is a BEAST of a handlebar moustache",
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
