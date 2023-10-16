//break and continue
//break will terminate the iteration bringing the cursor out of the scope
// for(let i=1;i<=10;i++){
//      if(i===5){
//         console.log('5 is detected');
//         break
//      }
//     console.log(i);

// }
//continue breaks one iteration of the loop and then continues ahead
// for(let i=1;i<=10;i++){
//     if(i===5){
//        console.log('5 is detected');
//        continue
//     }
//    console.log(i);

// }

//for in loop on strings
const myString='ABHISHA';
for(const i in myString){
    
    // console.log(myString[i]);
}
 //for in loop on arrays

//  const myArray =[1,2,3,4,5,6,7,8];
//  for(const i in myArray){
    
//     console.log(myArray[i]);
//  }


//for in loop  on objects
// let myObject ={name:'abhisha',
// age:22,
// hobby:'coding'}
// for(const i in myObject){
//     console.log(`${i}:${myObject[i]}`,);
// }

//Map object-->takes unique key value pair
//Map is an empty object provided by js, it can be maipulated according to our wish

const map=new Map();
map.set('name','abhisha')
map.set('name','abhisha')
map.set('age',22)
map.set('hobby','coding')
map.set('name','meraj')
// console.log(map);
// console.log(map.size);
// console.log(map.delete('name','abhisha'));
// console.log(map);
// console.log(map.get('name'));
// console.log(map);
// console.log(map.has('name'));
// console.log(map);
// for(const val in map){
//     console.log(val)
// }-->doesnt not work on maps


//Note: For in loop works on arrays, strings,objects
//   For in loop does not work on maps
// The iterater in for in loop indicates the index values in strings and arrays and
// in objects it indicates the keys