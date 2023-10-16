//for each loop on arrays

// const arr=[1,2,3,4,5,6,7,8,9];
// arr.forEach((num)=>{console.log(num+6);});
// const result =arr.forEach((num)=>{console.log(num+6);});
// console.log(result);//return value of for each loop is undefined

//When function is defined outside foreach
const arr =[1,2,3,4,5,6]
function add(num){
    console.log(num);
}
arr.forEach(add)

const objArray =[
    {lang:'javascript',abbr:'js'},
    {lang:'python',abbr:'py'},
    {lang:'ruby',abbr:'rb'}


];
objArray.forEach((item)=>{
   console.log(item.abbr);
})