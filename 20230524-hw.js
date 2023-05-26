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

function isMember(mem, arr) {
  let isFound = false;
  for (let i = 0; i < arr.length; i++) {
    if (mem === arr[i]) {
      isFound = true;
      // end this condition
      break;
    }
  }
  return isFound;
}

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
const bank = [1, 2, 1, 4, 5, 6, 2, 1];

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
