/*

$(document).ready(function(){

    let age = 25;

    alert('hellori hazretleri from sandbox')
    //let body = document.querySelector(body);
    //console.log(body);
//    var body =  $("#bobyID").text();
    let body =  $("#bodyID");
    let pTag = document.getElementById("h1ID");
    let pTagJquery = $("#h1ID");
    //console.log(body);
    //console.log(pTag);
    //console.log(pTagJquery);
    // let heyur_van = $("h1").text();
    // console.log(heyur_van);
    pTagJquery.css({position: "relative"});
    pTagJquery.animate({left : 100});

    pTagJquery.on("click", function(){
        //alert('mmmehh');
     // if(pTagJquery.attr({left: -100}))
        {pTagJquery.animate({left: -100});}
        pTagJquery.animate({left : 100});
        
    });

        pTagJquery.on("dblclick", function(){ 
        pTagJquery.fadeOut();
        pTagJquery.fadeIn();
        console.log(age);
        
    });

    console.log(1);

    // strings
console.log('hellori');
let email = 'attika@gmail.com';
console.log(email);

// string concatenation
let firstName = 'Atilla';
let lastName = 'Karadeniz';

// let fullName = firstName + lastName;
let fullName = firstName + ' ' +  lastName;

console.log(fullName);

// getting characters
console.log(fullName[0]);
console.log(fullName[5]);

// string length
console.log(fullName.length); // a property

// string methods  
console.log(fullName.toUpperCase()); // a method, a funtion => thatswhy ()
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);


    
    


});


*/