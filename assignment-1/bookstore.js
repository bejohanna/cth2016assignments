/*
    file:   bookstore.js
    desc:   simple script that will give you matching information about a book
    author: johanna bengtsson
    date:   29/11/16
*/

// import 'commander' (https://www.npmjs.com/package/commander)
var program = require('commander');

// database of persons
var book1_title = "Harry Potter en de Steen der Wijzen";
var book1_author = "J.K. Rowling";
var book1_price = "10 euro";
var book1_kind = "paperback";
var book1_lan = "dutch";

var book2_title = "Harry Potter en de gevangene van Azkaban";
var book2_author = "J.K. Rowling";
var book2_price = "10 euro";
var book2_kind = "paperback";
var book2_lan = "dutch";

var book3_title = "Harry Potter En de Orde van de Feniks";
var book3_author = "J.K. Rowling";
var book3_price = "12,50 euro";
var book3_kind = "paperback";
var book3_lan = "dutch";

var book4_title = "Harry Potter en de relieken van de dood";
var book4_author = "J.K. Rowling";
var book4_price = "12,50 euro";
var book4_kind = "paperback";
var book4_lan = "dutch";

var book5_title = "Harry potter and the cursed child (special rehearsal edition)";
var book5_author = "J.K. Rowling";
var book5_price = "22,50 euro";
var book5_kind = "hardcover";
var book5_lan = "english";


// initialise program (aka commander) 
program
  .version('0.1')
  .option('-n, --title [string]', 'Title of the book to match', 'empty') // add option --name with default value "empty"
  .parse(process.argv);

// check what the value of name is regardless of if it matches or not
console.log(program.title); // this line can be commented out

// match value of input's "name" argument
switch(program.title)
{
    case book1_title:
      
      // input match person1
        console.log(book1_title);  // print name
        console.log(book1_author);   // print age
        console.log(book1_price);  // print language
        console.log(book1_kind);
        console.log(book1_lan);
        break;
    case book2_title:
        // input match person2
        console.log(book2_title);  
        console.log(book2_author);   
        console.log(book2_price);  
        console.log(book2_kind);
        console.log(book2_lan);
        break;
    case book3_title:
        // input match person3
        console.log(book3_title);  
        console.log(book3_author);   
        console.log(book3_price);  
        console.log(book3_kind);
        console.log(book3_lan);
        break;
    case book4_title:
        // input match person3
        console.log(book4_title);  
        console.log(book4_author);   
        console.log(book4_price);  
        console.log(book4_kind);
        console.log(book4_lan);
        break;
    case book5_title:
        // input match person3
        console.log(book5_title);  
        console.log(book5_author);   
        console.log(book5_price);  
        console.log(book5_kind);
        console.log(book5_lan);
        break;
    default:
        // default message if no match
        console.log('...');
        break;
}