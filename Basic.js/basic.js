
// (01) variables 
        var en = "Enamul Firoz";
        let x = 10;
        const y = 20.248; 
        const z = x + y;
        console.log(z);
        console.log("---Simple Variable"); 

//  (02) object  

var objectName = {
        name: "user name",
        phone: "01722924089",
        age: 30,
        email: "gazi90@gmai.com",
    }
    console.log(objectName);
    console.log("---full array print");
    console.log(objectName.age);
    console.log("---Single array value print M1");
    console.log(objectName['age']);
    console.log("---Single array value print M2");

    //  (03) PRIMITIVE DATA type
    
    let string = "Md Enamul Firoz";
    let number = 100;
    let bullion = true;
    let blank = null;
    let undefine;

    //  (04) array
    let array = [
        'Dhaka', 'Barishal', 'Khulna', 'Patuakhali'
    ]

    //  (05) if else
    let result = 40;

    if(result>=80){
       console.log("A")
    }

    else if(result>=60 && result<80){
        console.log("B")
    }

    else if(result>=40 && result<60){
        console.log("c")
    }

    else{
        console.log("F")
    }

    //  (06) Switch case
    let marks=30;
    switch(true) {
        case (marks>=80):
            console.log("A+");
        break;
        case (marks<80 && marks>=70):
            console.log("A-")
        break;
        case (marks<70 && marks>=60):
            console.log("A")
        break;
        case (marks<60 && marks>=55):
            console.log("A-")
        break;
        case (marks<55 && marks>=50):
            console.log("B")
        break;
        case (marks<50 && marks>=40):
            console.log("c")
        break;
        case (marks<40 && marks>=33):
            console.log("D")
        break;
        default:
            console.log("F")
        break;
    }