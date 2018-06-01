function add(a, b){
  return a + b;
}

function multiply(a, b, c, d){
 return a * b * c * d;
}

function average(a, b, c, d, e){
  let total = a + b + c + d + e;
  return total/arguments.length;
}

function remainder(a, b){
  // this function is passed 2 arguments
  // return the remainder of first
  // argument when divided by the second
  let sum = a % b;
  return sum;

}

function exponential(a, b){
  // this function is passed 2 arguments
  // return first argument to the power of second argument
  // hint: you may need to look up the exponention operator
return a ** b;

}

const laxEquality = (a, b) => a == b && a !== b

// function is passed 3 arguments
// return true if they are all strictly equal and false otherwise
const strictEqual = (a, b, c) => a === b && a === c

const smaller = (a, b) => b >= a ? true : "smaller"
 
const isDivisibleBy = (divider1, divider2, number) => number % divider1 === 0 || number % divider2 === 0


// this function is passed 4 numbers
// return true if all numbers are even or false otherwise
// do not use if/else or ternary
const evens = (a, b, c, d) => a % 2 === 0 && b % 2 === 0 && c % 2 === 0 && d % 2 === 0



// words is an array which contains an odd number of strings
// return a new array containing only the middle word
// the words array should no longer contain the middle word
// hint: splice

const removeMiddle = words => {

let midNum = (words.length / 2);

let midWord = words.splice(midNum, 1);

return midWord;

} 


// myArray is an array of numbers
// return an array containing the 2nd and 3rd items from myArray
// myArray should remain unchanged
// hint: slice

function get2ndAnd3rd( myArray ){

  let newArray = myArray.slice(1, 3);

  return newArray;
}

// myArray is an array of numbers
// return a new array which has all items in myArray incremented by one
// myArray should remain unchanged

function mapper( myArray ){

  let newArray = myArray.map(item => item + 1)

  return newArray;
}

// words is an array of strings
// return a new array that contains the number of letters in each word
// for example
// input:
// [ 'jupiter', 'mars', 'saturn' ]
// output:
// [ 7, 4, 6]

  function wordLengths( words ){

    let newArray = words.map(item => item.length)
  
    return newArray;
  
  }

  // capitals is an array of objects that have a city and country property
  // for example
  // {
  //   city: 'Paris',
  //   country: 'France'
  // }
  // formatter is a callback function provided for you which
  // transforms a capital object into a sentence returns it such as
  // 'Paris is the capital of France'.
  // Apply formatter to each object in capitals array and
  // return an array of resulting sentences

function cities( capitals, fn ){

  return capitals.map(fn)
  
}

// numbers is an array of numbers
// return a new array that contains only numbers
// from the input array which are greater than 10

function largerThanTen( numbers ){

  let newArr = numbers.filter(function(greaterThan) {
                return greaterThan > 10
});
return newArr
}

// numbers is an array of numbers
// return a new array that contains only even numbers from the input array

function even( numbers ){

  let newArr = numbers.filter(function(item) {

    return item % 2 === 0;

  });

  return newArr;

}

// words is an array of words
// return the index of the word 'needle'

function findTheNeedle( words, needle = 'needle' ){

  const index = words.indexOf(needle)

  return (index < 0) ? "not found" : index;

}

// numbers is an array of numbers
// return the largest number from that array

function findLargest( numbers ){

  return Math.max(...numbers)

}

function addAllnumbers( numbers ) {
  // numbers is an array of numbers
  // return the sum of all the numbers in the array
}

function averages( things ) {
  // things is an array of numbers and strings
  // return the average of all the numbers
  // be sure to exclude the strings
}

function sortingStrings(strings){
  // strings is an array of strings
  // sort them in alphabetical order and return the sorted array
}

function sortingNumbers(numbers){
  // things is an array of sortingStrings
  // sort them in ascending order and return the sorted array
}

function sortingNumbersDescending(numbers){
  // things is an array of sortingStrings
  // sort them in descending order and return the sorted array
}

function sortingCars(cars){
  // a car object has a make, model, year. For example
  // const car = {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   year: 1994
  // }
  //
  // cars is an array of car objects. Sort them ascending by year and return
  // the sorted array.
}

function deleteColour( car ){
  // car is an object with properties make, model and color. For example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   color: 'red'
  // }

  // delete the property colour and return car without this property
};

function paintShop( cars, colour ){
  // cars is an array of objects that have
  // their properties are `make`, `model` and `colour`

  // for example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   color: 'red'
  // }

  // set the colour of each Ford car to be the colour
  // passed in and return the new array

  // the original array passed in should not change
  // hint: look up 'Cloning objects in JavaScript'
}

function secondLargest( numbers ){
  // numbers is an array of numbers
  // return the index of the second
  // largest number in the array
}

function addSales( city, sales ){
  // Argument city is a string containing city name
  // Argument sales is a integer containing the sales
  // for that location

  // We have object containing sales
  const globalSales = {
    london: 200,
    paris: 300,
    berlin: 150,
    madrid: 400
  };

  // If city already exists in object, add sales figure
  // to its total. If city does not exist, create a new
  // property and save the sales figure as its value.

  // return the updated globalSales object
}

function totalSales( sales ){
  // You are passed a sales object similar to the one
  // in the previous exercise. Add up all the sales figures
  // and return the total.

  // Hint: look up how to get the values of an object
}

function walletSum( wallet ){
  // A wallet object has keys which are the denominations
  // and values which are the number of those notes in the
  // wallet. See example below.
  //
  // const exampleWallet = {
  //   5: 3,
  //   10: 7,
  //   20: 2
  // };
  //
  // calculate the sum of money in the wallet and return
  // the total.

  // the denominations used in this exercise are 5, 10 and 20
}

function walletMerge( wallet1, wallet2 ){
  // return a new wallet object containing the contents of
  // both wallets passed in.

  // the denominations used in this exercise are 5, 10 and 20
}

function arrayOfWallets( wallets ){
  // wallets is an array of wallets

  // Return a new wallet object containing the notes from all wallets
  // the denominations used in this exercise are 5, 10 and 20
}

function crazyMoney( wallets ){
  // In previous exercises the notes denominations were
  // limited to 5, 10 and 20. We now have wallets that
  // can have notes of any denomination. Implement a function
  // which accepts an array of random sized notes and
  // calculate the total amount of money in them.

  // Hint: look up how to get keys of objects. You may also need
  // to use square bracket notation to look up values which
  // correspond to those keys
}

module.exports = {
  add,
  multiply,
  average,
  remainder,
  exponential,
  laxEquality,
  strictEqual,
  smaller,
  isDivisibleBy,
  evens,
  removeMiddle,
  get2ndAnd3rd,
  mapper,
  wordLengths,
  cities,
  largerThanTen,
  even,
  findTheNeedle,
  findLargest,
  addAllnumbers,
  averages,
  sortingStrings,
  sortingNumbers,
  sortingNumbersDescending,
  sortingCars,
  deleteColour,
  paintShop,
  secondLargest,
  addSales,
  totalSales,
  walletSum,
  walletMerge,
  arrayOfWallets,
  crazyMoney
};
