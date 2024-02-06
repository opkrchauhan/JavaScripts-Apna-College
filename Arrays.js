// Array in JavaScript
// let marks = [97,75,45,67,80];/
// console.log(marks);
// console.log(marks.length);
// console.log( typeof marks);
// console.log(marks[0]);

// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }

// for(let element of marks){
//     console.log(element);
// }

// let cities = ["Delhi", "Pune","Hyderabad", "Hamburg", "USA"];

// for(let city of cities){
//     console.log(city.toLowerCase());
// }


//  You have given student marks -> [85,97,44,37,76,60]. Find the average of the entire class.
// let marks = [85,97,44,37,76,60];
// let sum =0;

// for (const iterator of marks) {
//     sum += iterator;
// }
// let average = sum / marks.length;
// console.log(`Average of marks is ${average}`);


// let prices = [250,645,300,900,50];
// let indx=0
// for (let val of prices) {
//    console.log(`value at index ${indx} = ${val}`);
//    let offer = val/10;
//    prices[indx] -= offer;
//    console.log(`value after offer = ${prices[indx]}`);
//    indx++;
    
// }

let veggies =["potato","cheese","onion","orange"];
// console.log(veggies);
// veggies.push("bin");
// console.log(veggies);
// veggies.pop();
// console.log(veggies.toString());
// console.log(veggies.concat("Amar"));

let bollywoodHeroes = ["Sanjay Dat", "Sunny Deol", "Shahrukh Khan"];
// let tollywoodHeroes = ["Allu Arjun", "Prabhash","Dhanush"];

// let combinedHeroes = bollywoodHeroes.concat(tollywoodHeroes);
// console.log(combinedHeroes) ;

// bollywoodHeroes.unshift("Allu Arjun");
// console.log(bollywoodHeroes);
// bollywoodHeroes.shift();
// console.log(bollywoodHeroes);

// console.log(bollywoodHeroes.slice(0,2));

// let num = [1,2,3,4,5,6,7,8,9];
// num.splice(2,2,107,608);
// console.log(num);

let companies = ["Bloomberg", "Microsoft", "Uber","Google","IBM","Netflix"];

companies.shift();
console.log(companies);

companies.splice(1,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);





