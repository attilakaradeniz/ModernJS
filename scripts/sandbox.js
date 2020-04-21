$(document).ready(function () {
    /////////

    console.log('Laravel is good');
    alert('Laravel is good!');

    let pTagJquery = $("#h1ID");

    pTagJquery.css({ position: "relative" });
    pTagJquery.animate({ left: 100 });

    pTagJquery.on("click", function () {
        for (let i = 0; i < 3; i++) {
            pTagJquery.animate({ left: -100 });
            pTagJquery.animate({ left: 100 });
        }
    });

    ///////////////////////////////////////////////
    // #4 003043 callback function 
    // 003350
    let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

    people.forEach((person, index) =>{
        console.log(index, person);
    });

    const calcArea = radius => 3.14 * radius**2; 
    
    const area = calcArea(5);
    console.log('area is: ', area);



});