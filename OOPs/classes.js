class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
        this.getAge = function(){
            const date = new Date();
            return date.getFullYear() - this.year;
        }
    }
    //these methods goes in the prototype
    getSummery(){
        return `${this.title} is written by ${this.author} in ${this.year}`;
    }
    getDescription(){
        return `this description is written in ${this.year}`;
    }
    revise(newYear){
        this.year = newYear;
        this.revise = true;
    }
    // static means we dont have to instantiate
    static topBookStores(){
         console.log('fire & ice');
    }
}

// instantiate object
const book1 = new Book("BOOK One", "sandip deb", 1998);
console.log(book1);
console.log(book1.getSummery());
console.log(book1.getAge());
console.log(book1.getDescription());
book1.revise(1920);
console.log(book1.getSummery());
//static method --> runs this on the actual class
Book.topBookStores();