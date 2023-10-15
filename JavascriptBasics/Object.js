//Defining an object
// let obj ={'name':'abhi',
//            age:22
// }

//First way to access object values--dot operater
// console.log(obj.name);
// Second way to access object values--square brackets
// console.log(obj['age']);

//  Third way to access ovject values
//Object destructuring
// const{name:fullName, age} = obj
// console.log(fullName);

//Object freezing
// let obj1 ={name:'abhi',
// age:22,
// Hobby:'Cooking'}
// Object.freeze(obj1);
// obj1.age =34;
// console.log(obj1.age);
// console.log(Object.entries(obj1));

//Using symbol data type in object definition
// let mySym = Symbol('keyvalue');
// let obj2 ={name:'abhi',
// age:22,
// Hobby:'Cooking',
// [mySym]:1234}
// console.log(obj2);

//To access Sybmbol value which is  inside an object, we cannot use dot operater as it return undefined
//To access it we use quare bracket and the symbol name should be written as it is without quotes unlike other data typess
// console.log(obj2[mySym]);
// let obj3 ={name:'abhi',
//    age:22,
//    Hobby:'Cooking',
   

//   }
// obj3.greeting =function(){
//     console.log('Hello');
// }
// obj3.greeting();
// console.log(obj3);

//hasOwnproperty
// const obj5 ={name:'abhi', age:22}
// console.log(obj5.hasOwnProperty('age'));
// console.log(obj5.hasOwnProperty('isloggedIn'));

//Object Destructuring
const newObj ={
    fullName:{
        firstName:'Abhisha',
        lastName:'Talekar'
    },
    age:22,
    isLoggenIn:false,
    Greeting: function(){
        console.log('Hello');
    }
}

// const{fullName:name,isLoggenIn:loggedIn, age} = newObj
// console.log(name);
// console.log(loggedIn);
// console.log(age);
// console.log(name.firstName);

//Cpnverting arrays into object
// const arr=[['name','abhisha'],['age',22],['Hobby','Coding']]
// console.log(Object.fromEntries(arr));

