//  01 class with Function

class fastClass{
    
    fun1(a) {
        console.log("Md Enamul Hossen")
    }

    fun2(a) {
        console.log("hossen Firoz")
    }
}

let obj = new fastClass ;
obj.fun1()
obj.fun2("md Hossen")

//  02 class constructor

class conClass{
    constructor(a,b){
        this.fastNum = a;
        this .seNumber = b;
    }

    add(){
        let Result = this.fastNum + this.seNumber;
        console.log(Result)
    }
}

const newObj = new conClass(10,20);
newObj.add()


//  03 static Keyword
class stClass{
    
    static fun1(a) {
        console.log("Md Enamul Hossen")
    }

    fun2(a) {
        console.log("hossen Firoz")
    }
}
stClass.fun1();

//  04 inheritance

class baba{
    banName(){
        console.log("abba")
    }
    bName(){
        console.log("Gazi")
    }
}

class chile extends baba{


}

let exObj = new chile();
exObj.bName();


//  05 class over writing

class moBaba{
    banName(){
        console.log("abba")
    }
    bName(){
        console.log("Gazi")
    }
}

class chileMo extends baba{
    banName(){
        console.log("sele")
    }
    sup(){
        super.bName();
    }
}

let overObj = new chileMo();
overObj.banName();

//  05 class super key word

overObj.sup();