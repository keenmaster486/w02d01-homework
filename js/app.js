console.log("app.js loaded");

//1. Data types

// A light switch that can be either on or off.

//use a boolean
let lightswitch = true; //true represents "on"
let switches = [true, false, false, true]; //etc etc etc


// A user's email address.

//use a string
let email = "drbeep123@yahoo.com";
let useremails = ["email@website.com", "email2@website.com", "email3@website2.com"]; //etc

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.

let spaceship = {
	hull: "stainless steel",
	blasters: 2,
	tractorbeam: 1,
	warpdrive: "dilithium"
};

// A list of student names from our class.

//Array of strings
let studentnames = ["Bob", "Sue", "Jim", "Page"];

// A list of student names from our class, each with a location.
let students1 = [
	{
		name: "Bob",
		location: "Chicago"
	},
	{
		name: "Sue",
		location: "Los Angeles"
	},
	{
		name: "Jim",
		location: "Denver"
	},
	{
		name: "Page",
		location: "Boston"
	}
];

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
let students2 = [
	{
		name: "Bob",
		location: "Chicago",
		tvshows: ["Seinfeld", "The Office"]
	},
	{
		name: "Sue",
		location: "Los Angeles",
		tvshows: ["Brooklyn 99", "Parks and Rec"]
	},
	{
		name: "Jim",
		location: "Denver",
		tvshows: ["Friends", "How I met your mother"]
	},
	{
		name: "Page",
		location: "Boston",
		tvshows: ["Star Trek TNG", "Mythbusters"]
	}
];



//2. Take it easy

let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
console.log(rainbow[4]);
let CollinBrockway = {
	food: "MEAT",
	hobby: "Analog photography",
	town: "Boulder",
	datatype: "unsigned 16-bit integer"
}
console.log(CollinBrockway.hobby);


//3. Crazy Object!

const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}

console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);



const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);
//Psych, in the movie Joseph Gordon Levitt never actually enters Limbo.
//Get your obscure movie trivia right!





