// const arr =['cat','dog','cow','rat','crow','ox','rat'];
// length
// console.log(arr.length);
//Prototypes
//1-->indexOf()
// console.log(arr.indexOf('rat'));
// console.log(arr.indexOf('rat',4));
// console.log(arr.indexOf('bird'));

//2-->lastIndexOf() starts searching from right to left
// console.log(arr.lastIndexOf('rat',5));

//3-->includes
// console.log(arr.includes('2'));
// console.log(arr.includes('rat'));

//4-->slice()
// console.log(arr.slice(1,4));
// console.log(arr.slice(4,1));
// console.log(arr);


//5-->splice()
const arr2=['Jan','Feb','Mar','Apr','May'];
// console.log(arr2.splice(4,1,'Jul'));
// console.log(arr2);
// console.log(arr2.splice(-1,1,'Jul','Aug'));
// console.log(arr2);
// console.log(arr2.splice(2,1,'abc','xyz'));
// console.log(arr2);
// console.log(arr2.splice(6,1,'abc'));
// console.log(arr2);

console.log(arr2.push('dec'));
console.log(arr2);
console.log(arr2.splice(2,1,'March'));
console.log(arr2);
console.log(arr2.splice(1,1));
console.log(arr2);
