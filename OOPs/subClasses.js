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
}

// Magazine subClass
class Magazine extends Book{
    constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
    }
}
// instantiate Magazine
const mag1 = new Magazine("BOOK One", "sandip deb", 1998,"june");
console.log(mag1);
console.log(mag1.getSummery());