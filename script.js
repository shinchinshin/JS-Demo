const grade = (score) => {
    // round up number to the nearest integer
    // re-assign variable
    score = Math.round(score)
    if (score < 0 || score > 100){
        console.log("Error")
        //put return to end this function
        return
    } else if (score > 80){
        return "You got A"
    } else if (score >=70){
        return "You got B"
    } else if (score >= 60){
        return "You got C"
    } else if (score >=50){
        return "You got D"
    } else {
        return "You got F"
    }
}

console.log(grade(49.9));




/*
function grade (score) {
    score = Math.round(score)
    if (score < 0 || score > 100){
        console.log("Error")
        return
    } else if (score > 80){
        console.log("You got A")
    } else if (score >=70){
        console.log("You got B")
    } else if (score >= 60){
        console.log("You got C")
    } else if (score >=50){
        console.log("You got D")
    } else {
        console.log("You got F")
    }
}

console.log(grade(49.5))
*/