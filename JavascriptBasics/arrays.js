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
// const arr2=['Jan','Feb','Mar','Apr','May'];
// console.log(arr2.splice(4,1,'Jul'));
// console.log(arr2);
// console.log(arr2.splice(-1,1,'Jul','Aug'));
// console.log(arr2);
// console.log(arr2.splice(2,1,'abc','xyz'));
// console.log(arr2);
// console.log(arr2.splice(6,1,'abc'));
// console.log(arr2);

// console.log(arr2.push('dec'));
// console.log(arr2);
// console.log(arr2.splice(2,1,'March'));
// console.log(arr2);
// console.log(arr2.splice(1,1));
// console.log(arr2);

//push
// console.log(arr.push('fish')); //returns new length of the array
// console.log(arr);

//pop
// console.log(arr.pop());//return value is the popped array element
// console.log(arr);

//shift()
// console.log(arr.shift()); //retur va;ue is shifted/deleted first element of the array
// console.log(arr);

//unshift()
// console.log(arr.unshift('flower')); //return value is  ew length if the array
// console.log(arr);

//join()
// const arr_ex =[2, 3, 4, 5 ,5,5,6];
// console.log(arr_ex.join()); //returns string
// console.log(arr_ex);//doesnot change the original array to a string
 
//flat()
// let nth_dimen_arr=[1,7,8,[8.99,36,99,[6,8,9,4],9],9];
// console.log(nth_dimen_arr.flat(3)); //returns single array with inetrnal arrays concatenated
// console.log(nth_dimen_arr); //Doesnt change the original array

//concat()
// let new_arr=[1,2,3,4,5]
// let new_arr1=[6,7,8,9]
// console.log(new_arr.push(new_arr1));
// console.log(new_arr);
// console.log(new_arr.concat(new_arr1)); //concateneated array is returned
// console.log(new_arr); //doesnt mutatate originasl array
//spread opereater
// console.log([...new_arr,...new_arr1]);

//Array.isArray->checks if the value given is an array or no,return boolean val

// console.log(Array.isArray(233));
// console.log(Array.isArray([]));

//Array.from-->converts the value given into an array
//When value to be converted to an array is a string
// console.log(Array.from('Abhisha'));

//When value to be converted to an array is an object
//When you want keys to turn as array elements
// console.log(Object.keys({name:'abhi',age:22}));

//When you want values to turn as array elements
// console.log(Object.values({name:'abhi', age:22}));

//When you want both key and value to turn as array elements-->This returns 2 elements, one element 
//as array of keys and nother as array of objects
// console.log(Object.entries({name:'abhi', age:22}));

//When we have many variables declared and initialized, and want to convert them into an array,we use Array.of()
let num1=100;
let random='abhi';
let obj={name:'abhi',age:22}
const arr =Array.of(num1,random,obj);
console.log(arr[2]);

