// o1 simple arrays
let arr1 = [1,2,4,5,6,7,];
let arr2 = new Array(2,1,4,5,6);

console.log (arr2)


// o2 Multidimensional Arrays
let multi1 = [1,2,4,5,6,7,];
let multi2 = [1,2,4,5,6,7,];
let multi3 = [1,2,4,5,6,7,];
let allArray=[multi1,multi2,multi3]
console.log(allArray[1][2])


// o3 array de-structuring
let deArray = [1,2,4,5,6,7,];
let [,,,,d,]= deArray;
console.log(d);
