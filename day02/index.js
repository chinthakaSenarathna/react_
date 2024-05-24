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

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// function filterArray(arr, filterLogic) {
//     const filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (filterLogic(arr[i])) {
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }

// // Usage:
// const oddFilter = (num) => num % 2 !== 0;
// const evenFilter = (num) => num % 2 === 0;

// console.log(filterArray(arr, oddFilter)); // [1, 3, 5, 7, 9, 11]
// console.log(filterArray(arr, evenFilter)); // [2, 4, 6, 8, 10]



// // Example 02

// function addValue(value) {
//     return (input) => input + value;
// }

// const addFive = addValue(5);
// console.log(addFive(10)); // 15
// console.log(addFive(20)); // 25




// -------------- map() VS forEach() --------------------------

// map()

// const originalArray = [1, 2, 3, 4, 5];

// const squaredArray = originalArray.map(function(number) {
//     return number ** 2;
// });

// console.log(squaredArray); // [1, 4, 9, 16, 25]



// forEach()

// const fruits = ['apple', 'banana', 'orange'];

// fruits.forEach(function(fruit) {
//     console.log(fruit);
// });

// // Output:
// // apple
// // banana
// // orange



// --------------------------------------------------------------------------

// 01

// function foo(){
//     var x = 10;
//     console.log(x); // 10
// }

// foo();
// console.log(x) // undefined




// 02


// block scope
// {
//     let a =1;
//     let b = 2;

//     // var a =1;
//     // var b = 2;

//     console.log(a);
//     console.log(b);
// }

// console.log(a)
// console.log(b)



// 03

// console.log(a);
// // x is hoisted,
// var a = 5;    // -> undefined
// // x is not hoisted,
// // let a = 5; // -> ReferenceError



// 04

// // name is Global variable in JavaScript
// // console.log(name); // -> Jhon
// // var name = 'Jhon';

// // console.log(name); // -> ReferenceError
// // let name = 'Jhon';

// console.log(name); // -> ReferenceError
// const name = 'Jhon';



// 05

// var x = 20;

// function foo(){
//     console.log(x); // -> undefine
//     console.log(this.x); // -> access global scope value
//     var x = 10;
// }

// foo();



// 06
// In JavaScript, strings are immutable,

// let userName = "my name is Bikash"

// let words = userName.split(' ');

// let convertToUpperCase = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
// // map()     -> return new array,
// // forEach() -> not return new array,
// // console.log(convertToUpperCase);

// let newUserName = convertToUpperCase.join(' ');                                                                                                         

// console.log(newUserName);


// // const str = 'captain Picard';
// // const caps = str.charAt(0).toUpperCase() + str.slice(1);
// // console.log(caps); // 'Captain Picard'



// ------------------------------------------------------------------------------------------

let URL = 'https://jsonplaceholder.typicode.com/users';
let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
// console.log(div);

async function getData(){
    let response = await fetch(URL);
    let responseInJson = await response.json();
    console.log(responseInJson);
    // console.log(responseInJson[0]);
    // console.log(responseInJson[0].name);

    // div.innerText = responseInJson[0].name;

    {
        responseInJson.map((item) => {
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            p1.innerText = item.name;
            p2.innerText = item.username;
            div1.appendChild(p1);
            div2.appendChild(p2);
        })
    }
}

getData();