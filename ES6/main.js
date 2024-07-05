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

