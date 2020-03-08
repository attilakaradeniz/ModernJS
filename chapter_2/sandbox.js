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


    //console.log(typeof pTagJquery); // gives "Object"

    ////////////////////////////////////////////////
    // // #3 00:00:00  Control Flow...
    // for loops
    // for(let i=0;i<5;i++){
    //     console.log('in loop: ', i);
    // }    
    // console.log('loop is over!');

    // const names = ['ati', 'kati', 'betty'];
    // for(let i=0; i<names.length;i++){
    //     console.log(i+1+'.' + ' element of name array is : ' + names[i]);

    // }
    const names = ['ati', 'kati', 'betty'];
    for (let i = 0; i < names.length; i++) {
        let html = `<div>${names[i]}</div>`;
        console.log(html);
    }



    /////////
});