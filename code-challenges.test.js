// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.


// a describe method that lists the name of the function OR naming of the particular test.
describe("jobs", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it(" that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {


 const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(jobs(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// b) Create the function that makes the test pass.

// function jobs takes array 
// let results equal empty array
// for index let equal zero 
// index is less than length of array
// itterate forward left to right
// let newarray equal array index name split string
// for let index equal 0 index is less than new arr length itterate to right
// new array index equals 
// string newarray join string is a array index occupation
// return results push result

 const jobs = (array) => {
   let results = []
    for (let i = 0; i < array.length; i++){
      let newArray = array[i].name.split(" ")
      for (let i = 0; i < newArray.length; i++){
      newArray[i] = newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1);
        
      }    
      let result = `${newArray.join(" ")} is a ${array[i].occupation}.`
    }
    return results.push(result)
  }

 // this is also getting a return of 1 now
  // Test Suites: 1 failed, 1 total
  // Tests:       1 failed, 1 total
   
  //   Test Suites: 1 failed, 1 total
  // Tests:       1 failed, 1 total 

  //   Test Suites: 1 failed, 1 total
  // Tests:       1 failed, 1 total

 // hung up on the result in the .push

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


//-----------broken for now


// declare a function called jobs
// use array.map to check array
// that upcases the first index of the first and last name
// that takes the name and occupation index 
// from const people and puts them together in a string interpolation
// make it pass the test 

// const jobs = (array) => {
//   return array.map(firstletter => {
//      firstletter.name.split(" ").map(value => value.toUpperCase(value[0],value[0].toUpperCase()))
//       let jobpeps = array.join(" ")
//       let nameTitle = `${jobpeps} is a ${occupation}.`
//       return nameTitle
//   })
// }


// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// 1 failed, 1 total
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// getting hung up on occupation






// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

//a describe method that lists the name of the function OR naming of the particular test.
describe("mix", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {

    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]

    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(mix(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(mix(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// b) Create the function that makes the test pass.

// take in a mixed array
// use filter to take out everything that is not a number
// use .map to take the array with new values and get the desired math 
// return an array with the REMAINDERS of the left over numbers
// make it pass the test



const mix = (array) => {
    return array.filter(value => 
    typeof (value) === "number").map(value => value % 3)

}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// Expected output: [ 2, 0, -1, 0 ]
// Expected output: [ 2, 1, -1 ]


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("square", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("that takes in an array of numbers and returns the sum of all the numbers cubed.", () => {

    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]

    //an expect method, nested within the test block, calling on the () function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(square(cubeAndSum1)).toEqual(99)
    expect(square(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.

// take in array
// takes .map indexes and gets numbers cubed
// return output then sums the new array using reduce

const square = (array) => {
    let newArr = array.map(value => value **3)
    return newArr.reduce((a,b) => a + b)
  
}


// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// Expected output: 99
// Expected output: 1125
