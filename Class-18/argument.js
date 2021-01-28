function addNumbers(num1 , num2){

    console.log(arguments);

    var sum = 0;
    for (let i=0; i<arguments.length; i++) {
        const num = arguments[i];
        //console.log(num)
       sum = sum + num; // add all array Numbers.

    }
    logininfo('Hallow Good Moring ... Your Account Sheet are rady') // one string declare there.

    
    function logininfo(massage) {    // above string value  name mention there.

        console.log(massage);
    }
    return sum;

}

var result = addNumbers(3 , 5, 99, 80, 77,209 );

console.log(result);
