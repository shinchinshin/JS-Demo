
const callme = () => {
    console.log("hello from callback function")
}

const helloSomeone = (name) => {
    console.log(`Hello ${name}`)
}


const greeting = (callback) => {
    console.log("hello world")
    callback ("Coffee")
}


// greeting () => {
//     console.log(`hello, ${} from another callback function`)
// }


