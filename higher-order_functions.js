'use strict';


//Functions as arguments (1)
function repeat (fn, n){
  for(let i = 0; i < n; i++){
    fn();
  }
}

function hello(){
  console.log('Hello world');
}

function goodbye(){
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);



//Functions as arguments (2)
function filter(arr, fn) {
  // TASK: Define your function here
  let newArray = [];
  for(let i=0; i<arr.length; i++) {
    if(fn(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

//console.log(newArray.push(arr,fn) => 

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES  



//Functions as return values

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  function message(location){
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  }
  return message;
}

const rocksWarning = hazardWarningCreator('Rocks on the road');
const wildFire = hazardWarningCreator('Forests on fire');
const flashFlooding = hazardWarningCreator('Major flooding');

rocksWarning('Florida');
rocksWarning('Florida');
rocksWarning('Florida');
wildFire('Maryland');
flashFlooding('California');



function tMovement(arr) {
  let posMove = arr.filter(num => num[0] >= 0 && num[1] >= 0);
  let posSteps = posMove.map(x => x[0] + x[1]);
  let results = posSteps.forEach(function(element, increment) {
    console.log(`Movement #${increment+1}: ${element} steps`);
  }
  );
}

const turtle = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
tMovement(turtle);



function reduce(arr){
  
  let words = arr.split(' ');

  const reducer = words.reduce((accumulator, word) => {
    if(word.length === 3){
      accumulator += ' ';
    } else {
      accumulator += word.substr(word.length - 1).toUpperCase();
    }
  
    return accumulator;
  }, '');
  return reducer;

}
  
//   let results = '';
//   for(let i = 0; i < words.length; i++){
//     if (words[i].length === 3){
//       results += ' ';
//     }
//     else {
//       results += words[i].substr(words[i].length - 1).toUpperCase(); 
//     }
//   }
//   return results;
// }
 

const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
console.log(reduce(input));