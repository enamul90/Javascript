console.log("hello Bangladesh");


//  01 Strict Mood  (Bug খুজে বের করতে এবং সাধারন Bug সমাধান করতে ব্যাবহার করা হয়)
"use strict"


//  02 Spread Operator ( একটি array কে অন্য একটি array এর মধ্য এ্যাসাইন করতে ব্যাবহার করা হয় ।)

let asia = ["bangladesh", "india"];
let world = [...asia, "bak", "rak","gaa"];
console.log(world)


// 03 push method ( একটি array কে অন্য একটি array এর মধ্য এ্যাসাইন করতে ব্যাবহার করা হয় ।)

const borishal =  ["patuakhali","barishal Shodor","jalokhati"]
const dhaka =  ["mirpur","uttara","motijil"]
borishal.push(dhaka)
console.log(borishal)

// 04 Rest Parameter (Function এর ভিতর আনলিমিটেট ভেলু পুশ করতে ব্যাবহার করা হয় ।)

function Show(...number){
    let sum=0;
    for (let i of number ){
        sum += i
    }
    console.log(sum)
}
Show(1,2,3,5)

// 05 Dynamic Function (variable দিয়ে ফাংশন লেখা হয় )
let funName = function(data){
    return data;
}
console.log(funName("Md Enamul"))

// 06 Variable Hoisting (আগে ভ্যালু অ্যাসাইন করে পরবর্তীতে ভেরিয়েবল ডিকলার করাকে Variable Hoisting বলে)
varName = "Hossen";
console.log(varName)
var varName;

// 07 Simple For Loop
for(i=0; i<=10;i=i+4){
    console.log(i)
}


// 08 for of loop (array থেকে অ্যারে কনটেন্ট তুলে আনতে ব্যবহার করা হয়)
const location =  ["patuakhali","barishal Shodor","jalokhati"]
for(data of location){
    console.log(data)
}

// 09 Object

let friends={
    friends1:{
        FriendName:"Saki islam",
        fatherName:" baba",
        brother:{
            brother1:"rakib",
            brother2:"kobir"
        }
    },
    friends2:"ismail",
    
}

console.log(friends['friends1']['brother']['brother2']);
console.log(friends['friends2']);


// 10 for in loop
const address =  {patuakhali :"paduakhali sodor" ,barishal: "Shodor",jalokhati:"he"}
for (let pro in address){
    console.log(pro)  // show property
    console.log(address[pro])  // shaw value
} 

// 11  decision making

const decision =  {
    patuakhali :"paduakhali sodor",
    barishal: "Shodor",
    jalokhati:"he"
}

if (decision["patuakhali"]=="paduakhali sodor"){
    console.log(true)
}
else if (decision["patuakhali"]=="paduakhali "){
    console.log(false)
}
else(console.log("not currency"))

