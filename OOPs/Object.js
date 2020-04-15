// Object of Protos
const bookProtos = {
    getSummery: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function(){
        const date = new Date();
        const age =date.getFullYear() - this.year;
        return `${this.author} is ${age} years old`
    }
}
// create Object
// book1
const book1 = Object.create(bookProtos);
book1.title = "BOOK One";
book1.author = "sandip deb";
book1.year = 1998;
// book2
const book2 = Object.create((bookProtos), {
    title: {value : "BOOK Two"},
    author: {value: "akash jeswal"},
    year: {value: 1996}
})
console.log(book1.getAge());
console.log(book1.getSummery());

console.log(book2.getAge());
console.log(book2.getSummery());