/*
for (let i = 3; i >= 0; i--) {
    console.log(i);
   }
*/ 

/*
// loop through array
const tripLocation = ["London","Paris","Madrid","Glasgow"]

for (let i = 0 ; i < tripLocation.length ; i++) {
    console.log(tripLocation[i])
    if (tripLocation[i] === "Madrid"){
        
        console.log("Found Madrid!")
        break
    } 
}
*/

/*
// While loop
let count = 1 
while (count < 100){
    count = count + 2 
}

console.log(count)
*/

/*
// nested loop
for (let i = 0; i < 3; i++) {
    console.log("i", i)
    for(let j = 0; j < 3; j++){
        console.log("j", j)
    }
   }

//> i 0
//> j 0
//> j 1
//> j 2
//> i 1
//> j 0
//> j 1
//> j 2
//> i 2
//> j 0
//> j 1
//> j 2
*/

//For loop Exercise: 
//Write a code that will loop from 0 to 15. 
//For each loop, it will check if the current index number is odd or even, 
//and display a message to the console.

//Example Output:
//0 is even
//1 is odd
//2 is even

for (let i = 0; i <= 15; i++) {
    if(i % 2 == 0){
        console.log( i + " " + "is even")
    } else {
        console.log( i + " " + "is odd")
    }
}

