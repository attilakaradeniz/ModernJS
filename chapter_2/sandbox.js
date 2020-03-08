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
    // #4 001810 regular functions & arrow functions

    




});