/*
Define methods in the book class to display book information or change its genre.

 */

class Book {
     constructor(title, author, genre) {
       this.title = title;
       this.author = author;
       this.genre = genre;
     }
   
     displayInfo() {
       console.log(`Title: ${this.title}, Author: ${this.author}, Genre: ${this.genre}`);
     }
   
     changeGenre(newGenre) {
       this.genre = newGenre;
     }
   }