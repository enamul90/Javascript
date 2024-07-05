// 01 map
let myMap = new Map()
myMap.set("key1","Enamul Firoz")
myMap.set("key2","hossen")
myMap.set("key3","his ")
myMap.set("key4","hare")

console.log (myMap.values())
console.log (myMap.keys())

// 02 for of loop
for (let data of myMap.values()){
    console.log(data)
}

for (let data of myMap.keys()){
    console.log(data)
}

/* 
// 03 delete
myMap.delete("key1")
for (let data of myMap.values()){
    console.log(data)
}

// 04 clear
myMap.clear()
for (let data of myMap.values()){
    console.log(data)
}
*/

// 05 has
if(myMap.has("key1")){
    console.log("yes");
}
else{
    console.log("NO");
}
