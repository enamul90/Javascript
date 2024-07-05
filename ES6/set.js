// 01 basic set
let mySet = new Set();
mySet.add("color")
mySet.add("size")
mySet.add("price")
mySet.add("quantity")

console.log(mySet)


// 02 set m2  (সেট তৈরির দ্বিতীয় নিয়ম)
let setM2 = new Set([1,2,4,5,6,7,]);
console.log(setM2)


// 03 set clear
setM2.clear()
console.log(setM2)


// 05 set delete
mySet.delete("price")
console.log(mySet)

// 05 set size
console.log(mySet.size)

// 06 set values
console.log(mySet.values())

// 06 set has
if(mySet.has("quantity")){
    console.log("500TK")
}
else{
    console.log("Error")
}