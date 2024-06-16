// (01) Simple array
var arrayName = [
    "fast name ",
    "Last name",
    "Email",
    "Phone number",
    "address"
]
console.log(arrayName);
console.log(arrayName[2]);

// (02) array  For Loop
for(i=0; i<arrayName.length; i=i+1){
    console.log("-For-"+ arrayName [i])
}

// (03) array  For In Loop
for(var item in arrayName){
    console.log("-For In-"+ arrayName [item] )
}

// (04) array concat
var array1 = [ 1,2,3,4,5,6,]
var array2 = [ "A","B","C","D","E","F",]
var array3 = array1.concat(array2);
console.log(array3)

// (05) Array Form
var variableName2 = "Md Enamul Firoz";
var variableToArray = Array.from( variableName2);
console.log(variableToArray + " convert to array")

// (06) Array Filter
var arrayFilter = [1,2,3,4,5,6,7,8,9,10];
var result = arrayFilter.filter(function(item){
    return item<=5
});
console.log(result);

// (07) Array Find
var arrayFind = [1,2,3,4,5,6,7,8,9,10];
var result = arrayFind.find(function(item){
    return item>8
});
console.log(result );

// (08) Array Find - Index
var arrayFind = [0,1,2,3,4,5,6,6,7,8,9,10];
var result = arrayFind.findIndex(function(item){
    return item>9
});
console.log(result + "--filter");

// (09)  Array forEach Method
arrayFind.forEach(function(item){
    console.log(item);
});

//(10) Array Includes method
var result = arrayFind.includes(11);
console.log(result);

//(11) Array index-Of method
var result = arrayFind.indexOf(10);
console.log(result);

// (12) Array Reverse method
var result = arrayFind.reverse();
console.log(result );

// (13) Array push method 
let arrayPush = [2,5,8,10,22];
arrayPush.push(11);
arrayPush.push(12);
arrayPush.push(13);
arrayPush.push(14);
arrayPush.push("a");
console.log(arrayPush)

// (14) Array pop method
let arrayPop = [2,5,8,10,22];
arrayPop.pop();
arrayPop.pop();
arrayPop.pop();
console.log(arrayPop + " pop")

// (15) Array sort method
let shArray = [50,30,80,10,40];
shArray.sort();
console.log(shArray)

// (16) Array slice method 
let arrSlice = shArray.slice(0,1);
console.log(arrSlice)

// (17) Array splice method  (Remove)
let splArrayRe = [50,30,80,10,40];
splArrayRe.splice(2,1);
console.log(splArrayRe +"remove");

let splArrayAdd = [50,30,80,10,40];
splArrayAdd.splice(2,0,10);
console.log(splArrayAdd + "Add")