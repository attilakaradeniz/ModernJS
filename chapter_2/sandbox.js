$(document).ready(function(){

    alert('hellori hazretleri from sandbox')
    //let body = document.querySelector(body);
    //console.log(body);
//    var body =  $("#bobyID").text();
    let body =  $("#bodyID");
    let pTag = document.getElementById("h1ID");
    let pTagJquery = $("#h1ID");
    console.log(body);
    console.log(pTag);
    console.log(pTagJquery);
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
    });

});


