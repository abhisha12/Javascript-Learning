//template literals
// let name='Abhisha';
// let hobby ='cooking';
// console.log(`Hello! my name is ${name}. I love ${hobby}`);

//String methods
//---------charAt
// let str1 = 'abaisha';
// let str2 ='talekar';
// console.log(str1.charAt(3));

//---------indexOf
// console.log(str1.indexOf('a'));
// console.log(str1.indexOf('a',2)); //2 specifies the index from where the search should start

//charCodeAt
// console.log(str1.charCodeAt(2));

//concat
// console.log(str1.concat(str2));

//replace---> to replace any char/word in a string

// let url ='https://abhishatalekar%20login.com%20';
// console.log(url.replace('%20','/'));
// console.log(url.replaceAll('%20','/'));

//includes-->checks if search value is included in the strig or no

// console.log(url.includes('abhi'));---true
// console.log(url.includes('meraj'));---false

//split-->converts a string into an array based on separater like space,-,/
// let str3 ='abhi/loves/to /dance';
// console.log(str3.split('/'));

//WHEN BOTH STRING AND SEPARATER ARE EMPTY, IT RETURN AN EMPTY ARRAY
// let str4 = '';
// console.log(str4.split(str4));

//WHEN STRING IS EMPTY AND SEPARATER IS NOT EMPTY IT RETURNS AN ARRAY WITH A SPACE
// let str4 ='';
// console.log(str4.split('j'));

//substring

let str5 ='abhishaTalekar';
// console.log(str5.substring(0,7));// here 7 is the last index,output is abhisha

//substr
// console.log(str5.substr(4,3));//here 3 is the length,oupt is sha

//slice
// console.log(str5.slice(-4,-1));

// Main differences between slice and substring
//1) if firstindex is greater than second index, then substring still returns a string swapping the indexes
//Incase of slice it returns nothing
// console.log(str5.substring(10,4));
// console.log(str5.slice(10,4));
//2)substring doesnot take negative indexes,it takes negative index but output will be same as normal with normal index
// slice takes negative index and starts counting backward

// console.log(str5.substring(-1,6));
console.log(str5.slice(-6,-3));






