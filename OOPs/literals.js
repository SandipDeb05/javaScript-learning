//====================== literals

//------------------------ object literals
const book1 = {
    title: "BOOK One",
    author: "john doe",
    year : "2020",
    getSummery(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};
const book2 = {
    title: "BOOK Two",
    author: "jane doe",
    year : "2010",
    getSummery(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
console.log(book1.title);
console.log(book1.getSummery());
console.log(book2.getSummery());
console.log(Object.values(book2)) // returns a array of the values inside & also the keys
console.log(Object.keys(book2)); // retrun the key of the values