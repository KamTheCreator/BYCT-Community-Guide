/** 
Create a subclass of the book class named "E-book" with an additional attribute "file format"
 */
class Book {
     constructor(title, author, year) {
       this.title = title;
       this.author = author;
       this.year = year;
     }
   }
   
   class EBook extends Book {
     constructor(title, author, year, fileFormat) {
       super(title, author, year);
       this.fileFormat = fileFormat;
     }
   }
/**
Override the display method in the E-book class to include the file format.
 */

class Book {
     constructor(title, author, year) {
       this.title = title;
       this.author = author;
       this.year = year;
     }
   
     display() {
       return `${this.title} by ${this.author}, published in ${this.year}`;
     }
   }
   
   class EBook extends Book {
     constructor(title, author, year, fileFormat) {
       super(title, author, year);
       this.fileFormat = fileFormat;
     }
   
     display() {
       return `${super.display()} [Format: ${this.fileFormat}]`;
     }
   }