// Function in JavaScript
// function myFunction() {
//     console.log("Hi Coder");
// }
// myFunction();


// function myFunction(msg) {
//     console.log(msg);
// }
// myFunction(`I love JS`);

// function addTwoNumbers(a, b) {
//     console.log(a+b);
// }
// addTwoNumbers(1, 2);

// function addTwoNumbers(a, b) {
//     // local variable -> scope & it is only used internally in block
//     s = a + b;
//     console.log("Before return");
//     return s;
//     // console.log("After return");  unreachable code after return no any code reachable
// }

// let val = addTwoNumbers(3,4);
// console.log(val);



// //Sum function
// function sum(a, b) {
//     return a + b;
// }

// //Arrow function for sum

// const ArrowSum = (a,b)=>{
//     return a + b;
// }

// console.log(ArrowSum(1,2));


// //Mul Function
// function mul(a, b) {
//     return a * b;
// }

// // Arrow function for multiplication
// const ArrowMult = (a,b)=>{
//     return a * b;
// }

// console.log(ArrowMult(1,2));


//   let count = 0;
//   function countVowel(str) {
//     for (let i = 0; i < str.length;i++) {
//         if(str[i] === 'a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'|| str[i]==='A'|| str[i]==='E'|| str[i]==='I'|| str[i]==='O'|| str[i]==='U' ){
//             count++;
//         }
//     }
//     return count;
//   }
//   console.log(countVowel('AmarUjalaArjunOra'));


// let count = 0;
// const countVowel = (str) => {
//     for(const char of str) {
//         if(char === 'a'||
//         char === 'e' ||
//         char === 'i' ||
//         char === 'o' ||
//         char === 'u' 
//         ){
//             count++;
//         }
//     }
//     return count;
// }
// let totalCount = countVowel('aurangabad');
// console.log(totalCount);


let arr = [1,2,3,4,5,6,7,8,9];

// arr.forEach(function myFunction(val) { //each value at each index
//     console.log(val);
// })

// arr.forEach((val)=>{
//      console.log(val);
// })

// arr.forEach(function myFunction(val) {
//     console.log(val*val);
// })

// Map in JS
// let newArray = arr.map(
//     (val) =>{
//         return val**2;
//     }
// )
// console.log(newArray);


//Filter function

// let newFilter = arr.filter(
//     (value)=>{
//         return value%2==0;
//     } 
// )
// console.log(newFilter);

// const output = arr.reduce(
//     (result, val)=>{
//         return result + val;
//     }
// )

// console.log(output);

let arrNew = [5,6,2,1,101,3];

const output = arrNew.reduce(
    (accumulator, currentValue) => {
        return accumulator>currentValue?accumulator:currentValue;
    }
)

console.log(output);