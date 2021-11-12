const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity that you like doing?", (activity) => {
    rl.question("Which city are you from?", (city) => {
      rl.question("What's your favorite dish?", (dish) => {
        rl.question("Which superpower would you like to have?", (power) => {
          rl.question("What would your superhero name be?", (superHeroName) =>{
            console.log(`${name} is from ${city} and enjoys ${activity.toLowerCase()}. ${name} likes to eat ${dish.toLowerCase()}. If ${name} had to pick, their superhero name would be ${superHeroName} and their superpowers would be ${power}.`);
        
            rl.close();
          });
        });
      });
    });
  });
});