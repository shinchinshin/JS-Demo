//scoped

/* function foo() {
  console.log("eiei");
}

console.log("Foo", foo); // Foo, this is foo function
console.log("Foo", foo()); // Foo, eiei */

//==================================================

/* negative positive number filter

let arr = [-2, -1, 0, 1, 2];

function filter(a, cb) {
  const resultBox = [];
  for (let i = 0; i < arr.length; i++) {
    //if cb use members from arr
    if (cb(arr[i])) {
      resultBox.push(a[i]);
    }
  }
  return resultBox;
}

function neg(n) {
  //   if (n < 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  //check condition without if
  return n < 0;
}

function pos(n) {
  return n >= 0;
}

console.log(filter(arr, pos)); */

//==================================================

//even odd filter
const aBox = [-8, 1, -4, 6, -9, 3, 7];

function choose(a, cb) {
  const results = [];
  for (let i = 1; i < a.length; i++) {
    if (cb(a[i])) {
      results.push(a[i]);
    }
  }
  return results;
}

function even(n) {
  return n % 2 == 0;
}

function odd(n) {
  return n % 2 !== 0;
}

console.log(choose(aBox, odd));
