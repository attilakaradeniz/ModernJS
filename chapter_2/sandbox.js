$(document).ready(function(){
    /////////

    let pTagJquery = $("#h1ID");

    pTagJquery.css({position: "relative"});
    pTagJquery.animate({left : 100});

    pTagJquery.on("click", function(){
        pTagJquery.animate({left: -100});
        pTagJquery.animate({left : 100});
    });


    console.log(typeof pTagJquery);

    /////////
});