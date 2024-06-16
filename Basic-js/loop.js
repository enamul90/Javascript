    //  (01) For Loop 

    for(i=0; i<100; i=i+1)(
        console.log(i)
    )

    //  (02) Loop continue
    for(i=0; i<10; i=i+1){

        if(i==2){
            continue;
        }
        console.log(i)
    }

    //  (03) Loop barack
    for(i=0; i<10; i=i+1){

        if(i==5){
            break;
        }
        console.log(i)
    }

    //  (04) while Loop 
    while(i<10){
        console.log(i)
        i=i+1
    }

    //  (05) Do while Loop 
    var i=0;
    do{
        console.log(i + "do")
        i=i+1
    } while(i<10)
