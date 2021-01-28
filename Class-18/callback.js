function callback(name, age, Task ){


    console.log('Hellow', name);
    console.log('Your Age', age);
    Task() // Above the Task menstion there..... shower and wash hand bouth work doing this task .

}


// Different function :

function wash(){

    console.log('Wash Hand with Liquied ');

}
function takeshower(){

    console.log( ' Take shower with Sali');
}

function facebook(){

    console.log('Only doing looking Facebook.');
}
    


callback ('Soger Ali', 90, takeshower ); // different function call for different persone .
callback('Boger Ali ', 67, wash);
callback('Boga Miha ', 25 ,facebook); // there  and persone task .
