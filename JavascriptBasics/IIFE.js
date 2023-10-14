//IIFE stand for Immediately Invoked Function Expressions
// To avoid any type of global pollution we use IIFE
//if you create a variable within the function, it is accessible in the global object. If you define a variable in an IIFE, it is accessible only directly within the function.
//Suyntax,just wrap function definition inside paranthesis followed by an empty paranthesis
// (function add(){
//     let name='abhisha';
//     console.log(`Hello ${name}`)
// })()

//same can be written using fat arrow

// (()=>{
//     let name='abhisha';
//     console.log(`Hello ${name}`);
// })()

//If we want to write to iife's, we need to provide semi colon after one iife
// (function add(){
//     let name='abhisha';
//     console.log(`Hello ${name}`)
// })();
// (()=>{
//     let name='abhisha';
//     console.log(`Hello ${name}`);
// })()

//If we want to pas paarameters and arguementsu

// (function add(name){
//     console.log(`Hello ${name}`)
// })('abhisha');
// ((name)=>{
//     console.log(`Hello ${name}`);
// })('abhi')
