const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

//----- function with promise 
function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

//----- sanitizing input to lower case

function sanitizeInput(input) {
  return input.toLowerCase().trim()
}

// --- rooms object

let rooms = ['spirit dancer', 'BCA', 'pingala', 'classroom', 'spirit halloween'] // --- > here we have the minimum 5 rooms requested. 

function findRoom(word) {
  return word.includes(' ' )
}

//---- variable for finding rooms
let findRoom = rooms.find (' ')


//---- function checking targets / items

function checkTarget(action, target) {
  let availableTargets = ["bookshelf", "crystal", "key", "note", "table", "quartz" , "cat", "clerk", "troll"]
  if (action === "leave") {
    return [action, target]
  }
  if (availableTargets.includes(target)) {
    if (target === "bookshelf" || target === "crystal"|| target === "key"|| target ==="noten\n"
    || target ==="table" || target === "quartz" || target === "cat" || target === "clerk") {
      return [action, target]
    } else if (target.includes("door")) {
      return [action, "door"]
      console.log("Walking out the door")
    } else if (target.includes("crystal" || "quartz" || "rock"|| "black cat" || "book")) {
      return [action]
    }
  } else {
    return ["action", "target"]
  }
}


//------ Item objects-------

let bookshelf = new Item(
  "bookshelf",
  "A big bookshelf, with three rows, and many books",
  false,
  "You can not take that book"
);

let shelf = new Item(
  "A shelf",
  "A big shelf with quartz crystals and other precious stones",
  false,
  "You pick up the purple quartz.....etc"
);

let crystal = new Item(
  "crystal",
  "The crystal is very shiny and somewhat dense and heavy, you have a strange feeling while holding it",
  false,
  "The crystal looks nice, but then you notice another one that calls your attention more"
);

let cat = new Item (
  "cat",
  "A small black cat appears",
  false, 
  "The cat walks away"
);

let troll = new Item (
"A troll appoaches you",
false,
"The troll looks at you and walks past you. You need to talk to this troll, so you decide to walk up to it again"
)

let key= new Item(
  "key",
  "A golden key",
  true,
  "A golden key that looks very old and elaborate. It looks like it might fit in the secret door that you saw in the book!"
);

let book = new Item(
  "book",
  "An old book",
  true,
  "This book looks very mysterious! You open the book and it reads : We have been waiting for you. Find the key to the secret room"
);


///----- Lookup table for objects, containing key value pairs
let lookupTable = {
  bookshelf: 'bookshelf',
  crystal: 'crystal',
  key: 'key',
  cat: 'cat',
  clerk: 'clerk ',
  troll: 'troll',
  door: 'door'
}


// ------ command lookup 
let commandLookup = {
  start: ['start', 'yes', 'go'],
  stop: ['stop', 'no']
}



//------ innitial play function / starts the game and returns innitial message/intro
play();

async function play() {
  const welcomeMessage =  console.log ("Welcome to Zorkington! It is fall in Vermont. Halloween is fast approaching , The smell of Pumpkin Spiced lates, apple pie and scented candles is in the air. Han Solo fashion season is upon us again. The spookiness is in the air , You head to BCA for your Javascript class, with a mug of hot Java in your hand.  You walk into the building, walk up the stairs and enter the BCA classroom, You look around, there is nobody there. The door shuts behind you by itself, startling you.")


 
//---------- inventory array declaration

let inventory = [];


//------- determining if items are takeable,  description and action

class Item {
  constructor(name, descript, takeable, action) {
  this.name = name;
 this.desc = descript;
 this.takeable = takeable;
  this.action = action;
  } 
}


  // ------------- function determining what will happen if the item is takeable or not takeable

  take() {
    if (this.takeable) {
      inventory.push(this.name);
      return `You picked up ${this.name};
    } else {
      return "You can't take this!";
    }
  }
