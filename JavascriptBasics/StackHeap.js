//primitive data types--7 string,number,Boolean,null,undefined,bigInt,Symbol
//Non primitive data types--3 arrays, objects, function

// let name='abhisha';
// let name1 =name;
// name1 = 'talekar';
// console.log(name); 
// console.log(name1); 
//primitive data types are stored in stack and only a copy is provided, so original value doesnt change

//Non primitive
const obj1 ={
    name: 'abhisha',
    age: 24
}
const obj2 =obj1;
console.log(obj2);
obj2.name ='meraj';
console.table([obj1,obj2]);
//Non-primitive daat types are stored in heap and the actual refernce is provided which mutaates the original value







