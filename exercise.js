//1
/* const draw = (n) => {
  let s = "";
  for (let i = 0; i < n; i++) {
    s += "*";
  }

  for (let i = 0; i < n; i++) {
    console.log(s);
  }
}
draw(5); */

//2
/* const drawNg = (n) => {
  let s = "";
  for (let i = 0; i < n; i++) {
    s += "*";
    for (let j = 0; j < n; j++) {
      console.log(s);
    }
  }
};
drawNg(5); */

//-------------------------------------------------------

//today exercise (3, 5, 6, 12, 13, 16, 28*, 29*) * = advance

//-------------------------------------------------------

//3
//Write a function maxNegMinPos(arr)
//maxNegMinPos(arr) takes in an array arr,
//and it prints the max negative value (maxNeg)
//as well as the min positive value (minPos)

/* const arr = [12, -13, 14, 4, 2, -1, -18];

function maxNegMinPos(arr) {
    // set variable to null cus we do not know the value
  let maxNeg = null;
  let minPos = null;
  for (let i = 0; i < arr.length; i++) {
    //reform array to variable
    const n = arr[i];
    // to check negative integer
    if (n < 0) {
      if (maxNeg === null) {
        maxNeg = n;
      }
      //to check max negative
      if (n > maxNeg) {
        maxNeg = n;
      }
    } else {
        
      if (minPos === null) {
        minPos = n;
      }
      
      if (n < minPos) {
        minPos = n;
      }
    }
  }
  console.log(`maxNeg is ${maxNeg} , minPos is ${minPos}`);
}
maxNegMinPos(arr); */

//--------------------------------------

//5
//Write a function mutual(arr1, arr2)
// mutual(arr1, arr2) returns a new array
// containing all mutual members of arr1 and arr2

//add parameter as arr1,arr2

/* const class1 = ["Alice", "Bob", "John", "Jane"];
const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

const mutual = (arr1, arr2) => {
  // create empty array
  let getMutual = [];

  // run through 2 arrays
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      //make condition
      if (arr1[i] === arr2[j]) {
        //get mutual members in the new array the we previously made
        getMutual.push(arr1[i]);
      }
    }
  }
  return getMutual;
};

console.log(mutual(class1, class2)); */

//--------------------------------------

//3
//Write a fizzBuzz(n) function

/* function fizzBuzz(n) {
  //run through n
  for (let i = 1; i <= n; i++) {
    // print every num in n
    console.log(i);
    // add condition
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
    }
  }
}

fizzBuzz(15); */

//---------------------------------------------------

//12
//Do not use Array helper methods - use a simple 'for loop'

/* const arr = [120, 112, 111, 130, 169, 101];

function filterLt(n, arr) {
  //build the box
  let filterLtBox = [];
  //iterate through arr
  for (let i = 0; i <= arr.length; i++) {
    // push lesser number in the box
    if (arr[i] < n) {
      filterLtBox.push(arr[i]);
    }
  }
  return filterLtBox;
}

console.log(filterLt(130, arr)); */

//---------------------------------------------------

//13
// same as above but greater

/* const arr = [120, 112, 111, 130, 169, 101];

function filterGt(n, arr) {
  //build the box
  let filterGtBox = [];
  //iterate through arr
  for (let i = 0; i <= arr.length; i++) {
    // push lesser number in the box
    if (arr[i] > n) {
      filterGtBox.push(arr[i]);
    }
  }
  return filterGtBox;
}

console.log(filterGt(111, arr)); */

//---------------------------------------------------

/* //16
let arr = [1, 2, 3];

function mean(a) {
  let sum = 0;
  let n = a.length;
  // use < not <=
  for (let i = 0; i < n; i++) {
    sum += a[i];
    if (a[i] !== typeof Number()) {
      return null;
    } else {
    }
  }
  return sum / n;
}

console.log(mean(arr)); */

//---------------------------------------------------

//28
//const imageBytes = [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];

//---------------------------------------------------

//4
//create function fib(n)
// x =

//---------------------------------------------------

/* //filterGtNeg (-20,[-1,-2,2,3,-100]) > [-1,-2]
const filterGtNeg = () => {

}
 */
