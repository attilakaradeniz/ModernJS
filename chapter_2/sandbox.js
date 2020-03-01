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


