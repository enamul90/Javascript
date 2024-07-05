
// 01  Basic Function
function basicFun(){
    let w = 10;
    let q = 10;
    let r = w+q;
    console.log(r)
}
basicFun()

// 02  parameterized Function
function praFun(a,b){
    let w = a;
    let q = b;
    let r = w+q;
    console.log(r)
}
praFun(20,30)

// 03  rest parameters functions
function restFun(...v){

    console.log(v)
}
restFun(20,30,4,6,3,7,8,2,0,2,"d","w")

// 04  function returns
function returnFun(){
    let data = [12,22,54,30];
    return data;
}
console.log(returnFun())

// 04  function returns function
function funRe(){
    return returnFun();

}
console.log(funRe())


// 06 anonymous functions
let anoFun = function(){
    return 130;
}
console.log(anoFun())

// 07 arrow function
let arrFun = ()=>{
    console.log("arrow Function")

}
arrFun()