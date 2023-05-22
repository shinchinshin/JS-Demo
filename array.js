/*
const a = [1,[2,3],4]

// make a new variable
const b = a.slice(0,4)
console.log(b)

console.log(a.indexOf(4))
*/


//Create an array that contain 4 foods that you like. 
//Then complete these following tasks.

//1.  Locate your most favorite food in the array. 
//    Print its array index to the console.
//2.  Add your 3 favorite desserts or fruits into that array. 
//    Print the result to the console.

//CHALLENGES: Look at the Array methods slide. 
//Pick one method to check if your most favorite food is existed 
//in the array or not? (hint: return as boolean)


//create function for favFoods
function myIncludes(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            return true
        }
    }

    return false
}

const favFoods = ["noodles","beer","wine","pasta"]
//add 3 more foods
favFoods.push("banana","cookies","ice cream")

console.log(favFoods)
//check you foods
console.log(favFoods.includes("scone"))
//check through array
console.log(myIncludes(favFoods, "beer"))


