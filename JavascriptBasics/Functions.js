// function sum(num1, num2){
//     console.log(num1+num2);
// }
//  sum(); //Since no arguments are specified, output will be NaN
// function sum(num1,num2){
//     console.log(num1+num2);
// }
// let result=sum(2,4);
// console.log(result); // Since nothing is returned frfom the function, value of result will be undefined

// function sum(num1,num2){
//     return`${num1} and ${num2}`;
// }
// let result=sum();
// console.log(result);// retrun is specified, so output is 6

// function greeting(name){
//     return `${name} Hope your doing good!`
// }
// console.log(greeting()); // here since nothing is passed in the arguement, name will hold undefined

// function greeting(name='Abhisha'){
//     return `${name} Hope your doing good!`
// }
// console.log(greeting('Meraj')); // To avoid undefined, we can assign value to parameters, nut incase we have 
//paarmeter assignment and we pass arguements, then arguement will override the value passed to the parameter

//rest operater
//if single parameter is defined amd we pass many arguements, then to print all the arguement values rest is used
// function returnNumbers(num1,num2,...numbers){
//     return numbers;
// }
// console.log(returnNumbers(100,200,300,400,500));