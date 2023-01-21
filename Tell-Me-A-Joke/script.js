// function new_joke() {
const myjokes = [
  {
    "category": "Dark",
    "type": "single",
    "joke": "I was going to tell a dead baby joke. But I decided to abort.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": true
    },
    "id": 207,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Pun",
    "type": "single",
    "joke": "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 204,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Pun",
    "type": "single",
    "joke": "How do you make holy water? You boil the hell out of it.",
    "flags": {
      "nsfw": false,
      "religious": true,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 202,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Dark",
    "type": "single",
    "joke": "I didn't vaccinate my 10 kids and the one that survived is fine!",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 96,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 184,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Pun",
    "type": "single",
    "joke": "I have a joke about trickle down economics, but 99% of you will never get it.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 238,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Pun",
    "type": "single",
    "joke": "Today, my son asked \"Can I have a book mark?\" and I burst into tears.\n11 years old and he still doesn't know my name is Brian.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 200,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "ASCII silly question, get a silly ANSI.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 25,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\"",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 221,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Programming",
    "type": "single",
    "joke": "\"Can I tell you a TCP joke?\"\n\"Please tell me a TCP joke.\"\n\"OK, I'll tell you a TCP joke.\"",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 57,
    "safe": true,
    "lang": "en"
  },
  {
    "category": "Dark",
    "type": "single",
    "joke": "Hey girl are you a school? Because I want to shoot some kids up inside of you.",
    "flags": {
      "nsfw": true,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": true
    },
    "safe": false,
    "id": 269,
    "lang": "en"
  },
  {
    "category": "Dark",
    "type": "single",
    "joke": "I have a fish that can breakdance! Only for 20 seconds though, and only once.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 237,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Dark",
    "type": "single",
    "joke": "Nowadays people are so sensitive, you can't even say \"black paint\" anymore.\nInstead, you have to say \"Jamal, please paint the fence\".",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": true,
      "sexist": false,
      "explicit": false
    },
    "id": 133,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Dark",
    "type": "single",
    "joke": "I don't know where I stand on abortion. I like killing babies, but I don't like giving women a choice.",
    "flags": {
      "nsfw": true,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": true,
      "explicit": true
    },
    "id": 228,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Dark",
    "type": "single",
    "joke": "I'll never forget my Granddad's last words to me just before he died. \"Are you still holding the ladder?\"",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 208,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Dark",
    "type": "single",
    "joke": "I was going to tell a dead baby joke. But I decided to abort.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": true
    },
    "id": 207,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Dark",
    "type": "single",
    "joke": "Doctor: \"I have some news about your baby.\"\nParents: \"Don't tell us the gender, we want to keep it a surprise.\"\nDoctor: \"Oh I get it, you're those type of people. Okay, well IT is not breathing.\"",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 138,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Dark",
    "type": "single",
    "joke": "I hate double standards. Burn a body at a crematorium, you're \"being a respectful friend.\" Do it at home and you're \"destroying evidence.\"",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": true
    },
    "safe": false,
    "id": 274,
    "lang": "en"
  },
  {
    "category": "Dark",
    "type": "single",
    "joke": "I didn't vaccinate my 10 kids and the one that survived is fine!",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": false,
      "sexist": false,
      "explicit": false
    },
    "id": 96,
    "safe": false,
    "lang": "en"
  },
  {
    "category": "Dark",
    "type": "single",
    "joke": "Dark humor is like food, not everyone gets it.",
    "flags": {
      "nsfw": false,
      "religious": false,
      "political": false,
      "racist": true,
      "sexist": false,
      "explicit": true
    },
    "id": 162,
    "safe": false,
    "lang": "en"
  }
  //   `What do you call an elephant that doesn’t matter?
  // An irrelephant`,

  //   `What do you get when you cross a rabbit with shellfish?
  // An oyster bunny`,

  //   `Where do polar bears keep their money?
  // In a snow bank`,

  //   `Why did the pony get sent to his room?
  // He wouldn’t stop horsing around`,

  //   `What kind of dog does a magician have?
  // A Labracadabrador`,

  //   `Where do cows go on Friday nights?
  // They go to the moo-vies`,

  //   `Why couldn't the pony sing “Happy Birthday?”
  // Because she was just a little hoarse`,

  //   `How do you make an octopus laugh?
  // With ten-tickles`,

  //   `How do you keep a bull from charging?
  // Take away its credit card`,

  //   `Why can’t a leopard hide?
  // Because he’s always spotte`,

  //   `What do you get from a pampered cow?
  // Spoiled milk`,

  //   `What do you call an alligator who solves mysteries?
  // An investigator`,

  //   `Why is a snake difficult to fool?
  // You can’t pull its leg`,

  //   `What kind of socks do grizzlies wear?
  // None, they have bear feet`,

  //   `What do you get when you cross a snail with a porcupine?
  // A slowpoke`,

  //   `What did the dog say when it sat on sandpaper?
  // "Ruff!`,

  //   `What's a cat's favorite dessert?
  // Chocolate mouse`,

  //   `What fish only swims at night?
  // Starfish`,

  //   `What does a triceratops sit on?
  // Its tricera-bottom`,

  //   `Knock, knock.
  // Who’s there?
  // Lettuce.
  // Lettuce who?
  // Lettuce in, it’s cold out here`,

  //   `Knock, knock.
  // Who’s there?
  // An interrupting cow.
  // An interrupt—
  // MOO`,

  //   `Knock, knock.
  // Who’s there?
  // Owls go.
  // Owls go who?
  // That’s right`,

  //   `Knock, knock.
  // Who’s there?
  // A little old lady.
  // A little old lady who?
  // Hey, I didn’t know you could yodel`,

  //   `What did the bunny say to the carrot?
  // It’s been nice gnawing you`,

  //   `What do you call a sad strawberry?
  // A blueberry`,

  //   `Why did the tomato blush?
  // Because it saw the salad d`,

  //   `What did the pizza say to the topping?
  // I never sau-sage a pretty face`,

  //   `Which vegetable do sailors hate the most?
  // Leeks`,

  //   `What do you call a cheese that’s not yours?
  // Nacho cheese`,

  //   `Why did the cookie go to the nurse?
  // Because he felt crummy`,

  //   `What kind of room doesn’t have doors?
  // A mushroom`,

  //   `What kind of key opens a banana?
  // A mon-key`,

  //   `What happens when a grape gets run over crossing the street?
  // A traffic jam!`,

  //     `
  // What do you call a parade of rabbits hopping backwards?
  // A
  // receding hare-line.`,

  //   `
  // What does Charles Dickens keep in his spice rack?
  // T
  // e best of thymes, the worst of thymes`,

  //   `
  // What’s the different between a cat and a comma?
  // A
  // cat has claws at the end of paws; A comma is a pause at the end of a clause. Don’t forget to b
  // okmark these other whats the difference between jokes that will crack you up`,

  //   `
  // Why should the number 288 never be mentioned?
  // It’s two gross`,


  //   `What did the Tin Man say when h got run over by a steamroller`,


  //   `What did the bald man exclaim wen he received a comb for a present?
  // Thanks— I’ll never part with it`,


  //   `What did the Buddhist say to th hot dog vendor?
  // Make me one with everything`,


  //   `What did the left eye say to the right eye?
  // Between you and me, something smlls`,


  //   `What do you call a fake noodle?
  // An impasta`,


  //   `How do you make a tissue dance
  // Put a little boogie in it.`,

  //   `What do you call a pony with a cough?
  // A little horse`,


  //   `What did one hat say to the other?
  // You wait here. I’ll go on a head. If you loved this, you’ll get a kick out of these dog puns`,


  //   `What do you call a magic dog?
  // A labracadabrador`
]

// let jokes = document.getElementsByClassName("jokes")[0]
// let joke_btn = document.getElementsByClassName("joke_btn")[0]

const button = document.getElementById("btn")
button.addEventListener("click", function() {
  let index = Math.floor(Math.random() * (myjokes.length - 1))
  console.log(index)
  // console.log(myjokes.length)
  // jokes.innerHTML = myjokes[index].jokes
  document.getElementById("jokes").innerHTML = myjokes[index].joke
})

// btn.addEventListener('click', new_joke);

// let jokes = document.getElementsByClassName("jokes")[0]
// let joke_btn = document.getElementsByClassName("joke_btn")[0]
// let random_joke;

// const new_joke = (() => {
//   let random_joke = arr[Math.floor(Math.random() * arr.length)];
//   jokes.innerHTML = random_joke;
// })

// const joke_btn = (() => {
//   btn.addEventListener('click', new_joke);
// })
// joke_btn()

