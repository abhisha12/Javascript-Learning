//this in objects
// const obj ={
//     name: 'abhisha',
//     age:22,
//     greeting: function(){
//         console.log(`Hello my name is ${this.name}`);
//         console.log(this);
//     }
// }
// obj.greeting();
// console.log(this); // Since it is not having any context, it will return empty object

//this in function

// function add(){
    // let name ='abhi'

//     console.log(this);

// }
// add();

//this in conditional statements
// if(true){
//     let name ='abhi'
//     console.log(this.name);
// }

// const value = ()=>{
//     let name='abhi'
//     console.log(this.name);
// }
// value()


// Except for objects, this value doesnt refer to current context in any of the above mentioned scenerios
//that is functions, arroow funct, consditional, if we try to access the values define using this it gives undefined

//FAT ARROW
// ()=>{}
//points to remember
//1) if we have only one return statement, then curly braces and return ketword can be vommited
//2)if we have only one return statement then we can write it in curly braces (num1,num2)=>(num1+num2)
//3)if we have only one parameter, then the initial paranthesis can be vomitted
//If curly braces is written then return statement needs to be written

//Example of writing object as the return value
// const result=(num1,num2)=>(num1+num2)
// console.log(result(1,2));
// const result1 =(num1,num2)=>({name:'abhi'})
// console.log(result1());

//Example to use curly braces with no return satatement, output is undefined
// const result1 =(num1,num2)=>{
//     num1+num2
// }
// console.log(result1(1,2));


