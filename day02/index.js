// var x = 10;
// var time = 50;
// if (time > 10){
//     var x=20;
//     console.log(x);
// }
// console.log(x);


// ------------------------------------------------

// var y = 10;
// console.log(y);

// function abc(){
//     var y = 20;
//     console.log(y);
// }

// var y = 30;
// console.log(y);

// abc();

// console.log(y);


// --------------------------------------------------------


// let x = 10;
// let count = 50;

// if(count > 10){
//     let x = 20;
//     console.log(x)
// }

// function abc(){
//     let x = 30;
//     console.log(x)
// }

// // let x = 40; -> given error...

// console.log(x)

// abc()



// ---------------------------------------------------

// const x = 10;
// x = 20; -> can't modify x

// if(true){
//     const x = 20;
//     console.log(x)
// }

// function abc(){
//     const x =30;
//     console.log(x)
// }

// console.log(x)

// abc()



// ------------------  Higher Order Function  ---------------------------------------


// Example 01

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function filterArray(arr, filterLogic) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (filterLogic(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

// Usage:
const oddFilter = (num) => num % 2 !== 0;
const evenFilter = (num) => num % 2 === 0;

console.log(filterArray(arr, oddFilter)); // [1, 3, 5, 7, 9, 11]
console.log(filterArray(arr, evenFilter)); // [2, 4, 6, 8, 10]



// Example 02

function addValue(value) {
    return (input) => input + value;
}

const addFive = addValue(5);
console.log(addFive(10)); // 15
console.log(addFive(20)); // 25
