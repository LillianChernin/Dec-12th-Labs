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
