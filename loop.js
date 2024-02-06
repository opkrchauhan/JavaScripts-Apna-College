//loop is a piece of code that execute again and again

// for(let i=1;i<=5;i++){
//    console.log("Apna Bihar");
// }

// print sum of 1 to n

// let sum = 0;
// let n = 10;
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log(sum);


//While loop
// let i = 1;
// while(i <= 5 ){
//     console.log("I am Op");
//     i++;
// }


//do while loop 
// let i = 1;
// do {
//     console.log("i = " + i);
//     i++;
// }while(i<=10);


// for-of loop
// let str = "Apna College";
// let count = 0;
// for(let i of str){
//     console.log("i = " + i);
//     count++;
// }
// console.log("count = " + count);

// for-in loop

// let student = {
//     name : "Omprakash Kumar",
//     age : 23,
//     cgpa : 7.48,
//     isPass : true
// }

// for(let i in student){
//     console.log("i = " + i, "value is ", student[i]);
// }



//print all even number from 0 to 100
// for(let i=0;i<=100; i++){
//     if(i%2==0){
//         console.log(" i = " + i);
//     }
// }


// create a game to guess a number is correct or not
let gameNumber = 25;
let userNumber = prompt("Guess the number");
console.log(userNumber);

while ( userNumber != gameNumber) {
    userNumber = prompt("Enter guess number again");
}
console.log("congratulation you have entered correct number");
