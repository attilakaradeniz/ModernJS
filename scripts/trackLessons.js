/*

// https://www.youtube.com/watch?v=FhguwBJeqWs&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&index=2
    // Modern JavaScript The Net Ninja
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

//////////////////////////////////////
// 00:31:12

// common string methods

let email = 'itsumogakusei@gmail.com';

// let result = email.lastIndexOf('a');
// let result = email.slice(0, 5);  // from to
//let result = email.substr(4, 5);
// let result = email.replace('m', 'w'); // prints out => itsuwogakusei@gmail.com
// let result = email.replace('a', 'o'); // replace the first one it comes to

console.log(result);

/////////////////////////////////////////
// 00:36:20  numbers
let radius = 10;
const pi = 3.14;

//console.log(radius, pi);
// math operators  +, -, *, ** (power of), % (remainder)
// let result = pi * radius**2;

// the order of operation - B I D M A S

//let result = 5 * (10-3)**2;
// console.log(result);


let likes = 10;

// likes++;
// likes--;
// likes += 10;
// likes -= 10;
// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - not a number

let result = 'the blog has ' + likes + ' likesssss';

console.log(result);

////////////////////////////////////////////////////
// 00:46:16 - template strings

const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way
//let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
//console.log(result);

// template strings bzw. => template literal
//let result = `The blog calles ${title} by ${author} has ${likes} likes`;
//console.log(result);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`; 
 
console.log(html);

let spanTemplate = $("#forTemplate");

spanTemplate.append(html);



//////////////////////////////////////////////////////////
// 00:52:30 data type object - array
 let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken'; // overwrite

// console.log(ninjas);
// console.log(ninjas[1]);


// let ages = [20, 25, 30 ,35];

// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];

// console.log(random);

//console.log(ninjas.length);

// array methods

// let result = ninjas.join(', ');
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['kendo', 'judo', 'mma']);
let result = ninjas.push('yaba-daba-duu');  // some methods dont alter the original value BUT THİS ONE DO
                                            // a DESTRUCTIVE METHOD

result = ninjas.pop();
console.log(result);
console.log(ninjas);

////////////////////////////////////////////////////////////
// 01:02:20  NULL & undefined
//let age;
//let age = null;

// console.log(age , age + 3, `the age is ${age}`);
// console.log(true, false, 'true', 'false');

// let email = 'attilakaradeniz@gmail.com';
// let names = ['mario', 'luigi', 'thorn', 'shaun'];

// let result = email.includes('@'); // returns true
// let result = names.includes('luigi');

// console.log(result);

// comparison operators

// let age = 25;

// console.log(age == 25); // returns true
// console.log(age == 30); // returns false
// console.log(age != 30); // returns true
// console.log(age != 30); // true
// console.log(age > 24); // true
// console.log(age <= 25); // true
// console.log(age >= 25); // true

// let name = 'ati';
// console.log(name == 'ati');
// console.log(name == 'Ati');

// 01:15:03 loose comparison vs strict comparison
let age = 25;

// console.log(age == 25); // true
// console.log(age == '25'); // true  // because of loose comparison

// strict comaprison (different types cannot be aqual)
console.log(age === '25'); // is age same value & type?


////////////////////////////////////////////////////////////
// #2 01:18:50  Type conversion
let score = '100';

// console.log(score + 1);
// console.log(parseInt(score) + 1); // parseInt

// console.log(typeof score);

// score = Number(score);

// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hellori'); // result NaN
// let result = String(50);


// truthy & falsy
// let result = Boolean(100);  
let result = Boolean(0); // falsy
result = Boolean('0'); // truthy
result = Boolean(''); // falsy


console.log(result, typeof result);

//////////////////////////////////////////////////////
// Last things on #2
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
//////////////////////////////////////////////////////
// #3 00:00:00  Control Flow...

    //console.log(typeof pTagJquery); // gives "Object"

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
    // const names = ['ati', 'kati', 'betty'];
    // for (let i = 0; i < names.length; i++) {
    //     let html = `<div>${names[i]}</div>`;
    //     console.log(html);
    // }
    // #3 001032 iteration(terminology)

    // #3 001048 while loop
    // let i = 0;
    // while(i<5){
    //     console.log('in loop: ', i);
    //     i++; // if you forget this, you'll get an infinite loop!!!
    // }

    // #3 001500 while loop
    let i = 0;
    do{
        console.log('in loop: ', i);
        i++; // if you forget this, you'll get an infinite loop!!!
    } 
    while(i<5);
/////////////////////////////////////////
    // #3 001745 if

    //
        // #3 003500 // break and continue
    const scores =  [50, 25,0,30,100,20,10]; 
    
    // for(let i=0;i<scores.length;i++){
    //     console.log('your score is: ' + scores[i]);
    // } 
    
    // for(let i=0;i<scores.length;i++){
    //     console.log('your score is: ' + scores[i]);
    //     if(scores[i] === 100){
    //         console.log('Conrats! you reached the max!!!');
    //         break;
    //     }
    // } 

    for(let i=0;i<scores.length;i++){

        if(scores[i] === 0){
            continue;
        }
        console.log('your score is: ' + scores[i]);
        if(scores[i] === 100){
            console.log('Conrats! you reached the max!!!');
            break;
        }
    } 
    /////////
    ///////////////////////////////////////////
    // #3 003900 Switch
    // Switch uses strict equality !!!!!!!!!!

    //////////////////////////////////////////
        // #4 Chapter 4 Functions & Methods
    //Functions & Methods (there is a little distinction)
    
    // function declaration
    function greet(){
        console.log('hello there');
    }

    // function expression
    const speak = function(){
       console.log('good day!'); 
    }; // this is a expression thats why semi colon


    // greet(); // calling || invoking the function
    // greet();
    // greet();

    speak();
   
    // #4 000620 hoisting 
    // hoisting WORKS with function DECLARATIONS
    // but it DOESN'T WORD with function EXPRESSIONS!!
    

        // #4 Chapter 4 Functions & Methods
    // let name = 'ati';
    // const speak = function(name = 'luigi', time = 'night') {      // ufnction parameter
    //     console.log(`Good ${time} ${name}!`); // TEMPLATE STRING
    // };
    
    // //speak('ati'); // argument
    // speak('ati', 'day');

    // const  calcArea = function(radius){
    //     let area = 3.14 * radius**2;
    //     return area;
    // }

    const  calcArea = function(radius){
        return 3.14 * radius**2;
    }

    //console.log(calcArea(5));
    const area = calcArea(5);
    console.log(area);

    /////////////////////////////////////////
    





    



















*/