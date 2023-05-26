// forEach
/* const cities = ["London", "Bangkok", "Budapest"];

for (let i = 0; i < cities.length; i++) {
  console.log(cities[i], i);
} */

//console.log("==========================");

/* cities.forEach(function(city, idx, arr)) {
    console.log(city, idx, arr)
} */

/* [0,1,2,3,4,5,6,7,8,9].forEach((v,i) => {
    if (i % 2 === 0){
        console.log(v)
    }
}) */

//========================================

/* ["beagie", "Banana", "Mr Donut"].forEach((v, i) => {
  if (v.startsWith("Mr")) {
    console.log(v, i);
  }
}); */

//========================================

/* //.map
["beagie", "Banana", "Mr Donut"].map((v, i) => {
  if (v.startsWith("Mr")) {
    console.log(v, i);
  }
});

console.log("=================");

let block = [-4, -2, 0, 2, 4].map((v, i) => {
  return v < 0;
});

console.table(block);

console.log("==================");

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => {
  return v % 2 === 0;
});

console.table(num); */

// .map explained in function

/* const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function map(inputs, cb) {
  let mapped = new Array(inputs.length);
  //   for (let i = 0; i < inputs.length; i++) {
  //     mapped[i] = cb(inputs[i]);
  //   }

  inputs.forEach((v, i) => {
    mapped[i] = cb(v);
  });
  return mapped;
}

function even(n) {
  return n % 2 === 0;
}

console.table(map(arr, even)); */

//======================================================

//.filter

/* let floor = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
].filter((v, i) => {
  return v % 3 === 0 || v % 13 === 0;
});

console.table(floor); */

//======================================================

/* //.some
const res = [10, 20, 30, 40, 50].some((v, i) => {
  return v > 50;
});
console.log(res); */

//======================================================

/* //.every
const eve = [10, 20, 30, 40, 50].every((v, i) => {
  return v <= 50;
});
console.log(eve); */

//======================================================

//.reduce
const res = [10, 11, 20, 21, 30, 31].reduce((acc, v, idx) => {
  if (v % 10 === 0) {
    return acc + v;
  }
  return acc;
});

console.log(res);

//======================================================

//Object

const people = [
  ["John", 21, true],
  ["Jane", 26, false],
  ["Tony", 30, false],
];

//arrange data in array
personFac = (person) => {
  return {
    name: person[0],
    ages: person[1],
    married: person[2],
  };
};

function ourFac(arr) {
  // use .map to define personFac
  return arr.map((v) => personFac(v));
}

console.log(ourFac(people));
