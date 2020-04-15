//=============================== constructor -->
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummery = function(){
        return `${this.title} is written by ${this.author} in ${year}`;
    }
}
// instantiate an object --> runs whatever in here
const book1 = new Book("BOOk One", "sandip", 2020);
const book2 = new Book("BOOk Two", "akash", 2010);
console.log(book1.title);
console.log(book1.getSummery());
console.log(book2.getSummery());
