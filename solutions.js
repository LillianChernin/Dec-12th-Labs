//Given, the following object, log the third element from the array
const fun = {
    asdf: ["afd", "matt", 'sweet']
}

console.log(fun.asdf[2]);

//Given, the following object, log the elbow property

const body = {
    arm: {
        elbow: 'pointy'
    }
};

//to get the whole elbow object:

console.log(body.arm);

//to get the value 'pointy':

console.log(body.arm.elbow);

// Given, the following object, call the jump method
const person = {
    jump(){
        console.log('fly!');
    }
};

console.log(person.jump());

//Create a data structure such that the following code logs the value "blue"

const myList = [
  {eyeColor: "blue"}
]

console.log(myList[0].eyeColor);

// Create a data structure such that the following code logs the value "buy supplies"

const myArrays = [
  0, 1, [0, 1, 2, 3, "buy supplies"]
]

console.log(myArrays[2][4]);

// Call the function in the given code:
const awesome = [
    {
        asdf:'true'
    },
    3456.245,
    ()=>{
        console.log('fun');
    },
    "buddy"
];

console.log(awesome[2]());

// Loops over the following array, and print its values:

const refrigerator = {
    fruits: ['apple', 'pear', 'banana']
}
 for (let i = 0; i < refrigerator.fruits.length; i++) {
   console.log(refrigerator.fruits[i]);
 }

 // Use two loops to loop over each array in the given "container" array

 const container = [
    [1,5,7],
    ['bear', 'dog', 'cat'],
    [true, false, true]
];

for (let i = 0; i < container.length; i++) {
  for (let j = 0; j < container[i].length; j++) {
    console.log(container[i][j]);
  }
}

// Create a data structure such that the following logs 4

const createCar = () => {
  return {
    tires: 4
  }
}

console.log(createCar().tires);

// Create a data structure such that the following logs pears

const generateShoppingList = () => {
  return ["eggs", "milk", "cheese", "pears"];
}

console.log(generateShoppingList()[3]);

// Create a data structure such that the following logs 20lbs

const createRobot = () => {
  return {
    stats: {
      weight: "20lbs"
    }
  }
}


console.log(createRobot().stats.weight);

// Call the drive method

const generateCar = ()=>{
    return {
        drive(){
            console.log("Vroom");
        }
    }
}

generateCar().drive();

// Create a data structure such that the following executes without errors:

const createFunction = () => {
  return () => {
    console.log("Yay!");
  }
}

createFunction()();

// Log the message attribute

const account = {
    tweet(){
        return {
            message: "fun"
        }
    }
}

console.log(account.tweet().message);

// Log the second element in the array

const me = {
    foo(){
        return {
            array: [2.5, 7, true]
        }
    }
}

console.log(me.foo().array[1]);

// Use the instruments object to print the following.

const instruments = {
  banjo: ["1920 gibson", "deering", "washburn"],
  guitar: {
    acoustic: ["martin", "taylor", "santa cruz", "gibson"],
    electric: ["fender Strat", "telecastor", "PRS", "languedoc"],
    nylon: ["baldwin", "cordoba"]
  },
  mandolin: ["eastman", "weber", "collings"]
}

// 1. "telecastor"
console.log(instruments.guitar.electric[1]);

// 2. "santa cruz"
console.log(instruments.guitar.acoustic[2]);

// 3. "washburn"
console.log(instruments.banjo[2]);

// 4. "weber"
console.log(instruments.mandolin[1]);

// 1. Using the instruments object loop through all the electric guitars and print them to the console.

for (let i = 0; i < instruments.guitar.electric.length; i++) {
  console.log(instruments.guitar.electric[i]);
}

// 2. Add a property to the instruments object, that includes a list of your favourite singers.

instruments.favSingers = ["joni mitchell", "judy collins", "tracy chapman", "roberta flack"];

// Using crazy object print the following

const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
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
      favouriteHobby: "Swearing at Larry and Jeff"
    }
    ]
  }
}

// 1. "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

// 2. Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

// 3. "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favouriteHobby);

// 4. "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

// 5. "The object the contains the name funkhauser"
console.log(crazyObject.larry.characters[1]);

// Create a data structure such that the following code logs "boat":

const baz = {
  foo: () => {
    return {
      matt: {
        travel: "boat"
      }
    }
  }
}

console.log(baz.foo().matt.travel);

// Create a data structure such that the following code executes without error:

const factory = {
  createCar: () => {
    return {
      startEngine: () => {
        return "Yay!"
      }
    }
  }
}

// Run the inner function:

const matt = {
    blink(){
        return ()=>{
            console.log('hi')
        }
    }
}

matt.blink()();

// Access the foo property:

const asdfasdf = [
    true,
    false,
    ()=>{
        return {
            foo: 'some value'
        }
    },
    'apple'
];

console.log(asdfasdf[2]().foo);

//Create a data structure such that the following code logs "dog"

const matt = [
  0, () => {
    return {
      someArray: ["dog"]
    }
  }
]

console.log(matt[1]().someArray[0]);

// Create a data structure such that the following code logs "blue"

const foods = [
  0, () => {
    return {
      anObject: {
        color: "blue"
      }
    }
  }
]

console.log(foods[1]().anObject.color);

// Call the funStuff() method:

const list = [
    'dogs',
    false,
    3.5,
    ()=>{
        return {
            funStuff(){
                console.log('yaaassss');
            }
        }
    }
];

list[3]().funStuff();

// Call the most inner function:

const foo = [
    'asdfasdf',
    'matt',
    false,
    6,
    ()=>{
        return ()=>{
            console.log('yes!');
        }
    },
    {
        dog:'blue'
    }
];

foo[4]()();


// Afternoon Lab

//Log the following function:

const foo = ()=>{
    console.log('I have been invoked!');
}

foo();


//Call foo, passing in a function:

const foo = (param)=>{
    console.log(param);
}

foo(() => {
  return "hi";
});


//Call the someMethod function, passing in myFunc. It should log About to invoke the callback and then I have been called!

const foo = {
    someMethod(callback){
        console.log('About to invoke the callback');
        callback();
    }
}

const myFunc = ()=>{
    console.log('I have been called!');
}

foo.someMethod(myFunc);

// Alter the following code so that myFunc properly logs the height property of foo

const foo = {
    height:5,
    someMethod(callback){
        callback();
    }
}

const myFunc = (param)=>{
    console.log(param.height);
}

//Create a method called combineColor on the shirtColor object that combines all the elements of the color array into a string

const shirtColor = {
  color: ['red', 'blue', 'green', 'white', 'pink']
}
shirtColor.combineColor = () => {
  return shirtColor.color.join(", ");
}

// 1. Create a function called wordReverse that reverses a string.
const wordReverse = (string) => {
  return string.split(' ').reverse().join(' ');
}
// 2 Create a function called toUpperCase that capitalizes every letter in a string.
const toUpperCase = (string) => {
  return string.toUpperCase();
}
// 3. Write a function, called repMaster, that accepts two arguments, input and a
//function. Input should be able to be used with the function. The function used
//as an argument must return a string. repMaster should take the result of the string,
// passed as an argument to the argument function, and return this result with ' proves
// that I am the rep MASTER!' concatenated to it.

const repMaster = (input, func) => {
  return func(input) + ' proves that I am the rep MASTER!';
}

//1. Create a function that takes a parameter and logs it
const logParam = (parameter) => {
  console.log(parameter);
}
//2. Create a second function that logs 'hi'
const logsHi = () => {
  console.log('hi');
}
//3. Invoke the first function, passing in the second function as a parameter
logParam(logsHi);
//4. You should see a function reference being logged
//5. Alter the first function so that it invokes its parameter
const logParam2 = (parameter) => {
  return parameter();
}
//6. If you did these steps correctly, you should get a log of 'hi'

logParam2(logsHi);

// Fix the last line of this snippet so it logs this method was called:

const bar = {
    someMethod(param){
        param();
    }
}

const foo = {
    someMethod(){
        console.log('this method was called');
    }
}

bar.someMethod(foo.someMethod);
