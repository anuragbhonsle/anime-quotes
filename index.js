import express from "express";

const app = express();
const port = 3000;

const quotes = [
  // Motivation
  "Power comes in response to a need, not a desire. — Goku, Dragon Ball Z",
  "A lesson you learned from pain is not easily forgotten. — Holo, Spice and Wolf",
  "Hard work is worthless for those that don’t believe in themselves. — Naruto Uzumaki, Naruto",
  "A person grows up when he's able to overcome hardships. Protection is important, but there are some things a person must learn on his own. — Jiraiya, Naruto",
  "Fear is not evil. It tells you what your weakness is. — Gildarts Clive, Fairy Tail",

  // Determination / Edge
  "For the sake of victory, there is no sin too great. — Lelouch Lamperouge, Code Geass",
  "A lesson without pain is meaningless. That’s because you can’t gain something without sacrificing something else. — Edward Elric, Fullmetal Alchemist: Brotherhood",
  "The world is not beautiful. Therefore, it is. — Kino, Kino’s Journey",
  "Whether a fish lives in a clear stream or a water ditch, so long as it continues swimming forward, it will grow up beautifully. — Ginko, Mushishi",

  // Beast Mode Quotes
  "I'm not a hero because I want your approval. I do it because I want to! — Izuku Midoriya, My Hero Academia",
  "Power is not will. It is the phenomenon of physically making things happen. — Madara Uchiha, Naruto Shippuden",
  "I am the hope of the universe... I am the answer to all living things that cry out for peace. — Goku, DBZ",

  // Spiritual / Purposeful
  "A lesson you learn from pain will always make you stronger. — Kaname Kuran, Vampire Knight",
  "You should enjoy the little detours. They make the journey worthwhile. — Ging Freecss, Hunter x Hunter",
  "I want... to be able to breathe. Just breathe and live in the world. — Shinji Ikari, Evangelion",
];

app.use(express.static("public"));

app.get("/", (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.render("index.ejs", { quote: randomQuote });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
