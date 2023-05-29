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

// 9, 10, 11, 16, 17, 18, 21, 22, 23, 24, 26, 27, 28, 29, 30

//9

/* function prime(n) {
  // n cannot be negative num
  if (n < 1) {
    return [];
  }
  // assume that our prime number starts with 2
  let primes = [2];

  if (n === 1) {
    return primes;
  }
  //starts with 3
  let at = 3;

  //check primes
  while (primes.length < n) {
    // assume that isPrime is true
    let isPrime = true;

    for (let i = 0; i < primes.length; i++) {
      const p = primes[i];

      if (at % p === 0) {
        // if isPrime not true
        isPrime = false;
        // not prime
        break;
      }
    }

    if (isPrime) {
      primes.push(at);
    }
    at++;
  }
  return primes;
}

prime(4); */

//======================================================

//10 find the biggest downward
// find maximum - nearest minimum behind max  (peak)(maxDown)

/* const chart = [110, 105, 95, 9, 80, 17, 120, 115, 11];

function drawDown(arr) {
  // declare peak is first index
  let peak = arr[0];
  let maxDown = 0;

  for (let i = 0; i < arr.length; i++) {
    const point = arr[i];
    //find peak
    if (peak < point) {
      peak = point;
    }
    //find maxDown
    let down = peak - point;
    if (down > maxDown) {
      maxDown = down;
      low = point;
    }
  }
  return low;
}

console.log(drawDown(chart)); */

//======================================================

//16
//let arr = [1, 3, 0, 7, 9];

/* function mean(a) {
  let sum = 0;
  // use < not <=
  for (let i = 0; i < a.length; i++) {
    const item = a[i];
    if (typeof item !== "number") {
      return null;
    }
    sum += item;
  }
  return sum / a.length;
} */

//console.log(mean(arr));

//======================================================

//18
/* const box1 = ["foo", "bar", "bell", "boo", "bank"];

function mid(arr) {
  if (arr.length === 1) {
    return;
  }
  let m = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return [arr[m - 1], arr[m]];
  }
  return [arr[m]];
}

console.log(mid(box1)); */

//======================================================

//21
/* const bb = [
  [1, 2, 3],
  [100, 200],
  [10, 20],
];

function flatMap(arr) {
  let a = arr;
  const flattened = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {}
    flattened.push(...a[i]);
  }
  return flattened;
}

//console.log(bb.flat());
console.log(flatMap(bb)); */

//======================================================

//22
/* const arr = [
  [1, 2, 3],
  [100, 200],
  [10, 20],
];

function mapMean(arr) {
  let means = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    //refer to mean function in line80
    means[i] = mean(arr[i]);
  }
  return means;

  //refer to mean function in line80
  //return arr.map((inner) => mean(inner));
}

console.log(mapMean(arr));
// console.table(mapMean(arr)); */

//======================================================

//24
//if array's member is not "number" don't change it!

/* const arr = [1, -4, 9, 0, "foo", false];

function mapRevertSign(arr) {
  const a = arr;
  // new array should have same length as the old one
  let rev = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    // in case of data is not a number
    if (typeof a[i] !== "number" || a[i] === 0) {
      //remain value and continue
      //console.log("if", a[i]);
      rev[i] = a[i];
      continue;
    }
    //console.log("else", a[i]);
    // number * -1 => change it to opposite sign
    rev[i] = a[i] * -1;
  }
  return rev;
}

console.log(mapRevertSign(arr)); */

//======================================================

//27
/* const bar = "Bar";
const foo = "Foo";
const fooFire = "Foo🔥";
const london = "London 🎡💂🏼‍♂️🇬🇧";
const glasgow = "Gl@sg0w 🏴󠁧󠁢󠁳󠁣󠁴󠁿";

function toBytes(s) {
  //create empty array
  let bytes = [];
  for (let i = 1; i < s.length; i++) {
    let char = s.charCodeAt(i);
    // ASCII code should not over 255
    if (char > 127) {
      continue;
    }
    // put code in bytes
    bytes.push(char);
  }
  return bytes;
}

console.log(toBytes(glasgow)); */

//======================================================

//14
//const room = (1, [2, 3, 4, 5, 1]);

/* function isMember(mem, arr) {
  let isFound = false;
  for (let i = 0; i < arr.length; i++) {
    if (mem === arr[i]) {
      isFound = true;
      // end this condition
      break;
    }
  }
  return isFound;
} */

//console.log(isMember(5, [2, 3, 4, 5, 1]));

//======================================================

//26
/* const arr1 = [10, 20, 10, 20, 30, 50, 60, 100];

function unique(arr) {
  let val = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    // we don not need true value from isMember, then we skip it
    // refer code from isMember
    if (isMember(item, val)) {
      continue;
    }
    // push false value from isMember
    val.push(item);
  }
  return val;
}

console.log(unique(arr1)); */

//======================================================

//17. mode(arr)
//const bank = [1, 2, 1, 4, 5, 6, 2, 1];

// code from web
/* function mode(arr) {
  //creat max and count to store data
  let max = 0;
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];

    //if we've found item, we ++
    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }
    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }
  return max;
} 
console.log(mode(bank));
*/

//Art's code
/* function mode(arr) {
  let dict = {};
  let max = 0,
    count = 0;
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];

    if (!dict[elem]) {
      dict[elem] = 1;
      continue;
    }
    dict[elem] += 1;

    if (count < dict[elem]) {
      max = elem;
      count = dict[elem];
    }
  }
  return max;
}

console.log(mode(bank)); */

//======================================================

//15
//เงินต้นรวมดอกเบี้ย = เงินต้น x (1+อัตราดอกเบี้ยต่อปี) ยกกำลังจำนวนปี
// method 1
/* function periodReturn(amount, interest, n) {
  return amount * (1 + interest / 100) ** n;
} */

//amount = periodReturn(amount, interestPercent / 100);

// method 2
/* function compoundReturn(amount, interest, n) {
  let interest = 0;
  for (let i = 0; i < n; i++) {
    amount = periodReturn(amount, interest / 100);
  }
  return amount;
} */

//console.log(periodReturn(10000, 5, 2));

//=================================================

// 20

/* function initArr(val, len) {
  // The .fill() method changes an existing Array and fills it with a specified value.
  return new Array(len).fill(val);
}

console.log(initArr(6, 3)); */

//=================================================

//28 transpose
const bytes = [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];

//ref1
/* function transpose(arr, w, h) {
  if (w < 1 || h < 1) {
    return [];
  }

  results = new Array(h)

  for (let i = 0; i < w.length; i++) {
    return 
    for (let j = 0; j < i; j++) {
      

      //(row * width * column)
    }
  }
} */

//ref2
/* function transpose(arr, w, h) {
  return new Array(h).fill(undefined).map((_, i) => {
    return new Array(w).fill(undefined).map((_,j) => {
      ()
    })
  })
}

//ref3 
function transpost(bits,w,h) {
  const transArr = []
  for (let i=0;i<h;i++){
    let row = []{
      for (let j=0;j<w;j++){
        row.push(bits[i*w+j])
      }
      transArr.push(row)
    }
    return transArr
  }
 }

console.log(transpose(bytes, w, h)); */
