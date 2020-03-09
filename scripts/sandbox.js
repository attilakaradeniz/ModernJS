$(document).ready(function () {
    /////////

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
    let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

    people.forEach(function(p){
        console.log(p);
    });





});