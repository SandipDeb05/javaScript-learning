// ================================= constructor function
function Person(firstName, lastName, dob){ // constructor function namming convension --> first letter stats with Capital
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // Date object --> build-in object
    this.getBirthYear = () =>{
        return this.dob.getFullYear(); // getFullYear is an method in Date Constructor
    }
    this.fullName = () =>{
        return `${this.firstName} ${this.lastName};`
    }
}
//--------------------------------- prototype
Person.prototype.getBirthDayYear = function(){ // store in the prototype
    return this.dob.getFullYear();
}
Person.prototype.getAge = function(){
    const date = new Date();
    return date.getFullYear() - this.dob.getFullYear() ;
}

// instantiate object
const person1 = new Person("sandip", "deb", "05-07-1998");
const person2 = new Person("akash", "jeswal", "03-12-1997");
console.log(person1);
console.log(person2.dob);
console.log(person1.getBirthYear());
console.log(person1.fullName());
console.log(person1.getAge());


//======================================= Class --> similar as function constructor
class Teacher{
    constructor(name, school, subject, dateOfBirth){
        this.name = name;
        this.school = school;
        this.subject = subject;
        this.dateOfBirth = new Date(dateOfBirth);
    }
    getBirthYear(){ // similar as prototype --> store in prototype
        return this.dateOfBirth.getFullYear();
    }
    getAge(){
        const date = new Date();
        return date.getFullYear() - this.dateOfBirth.getFullYear();    
    }
}

//-------------- class instantiation --> same as function constructor
const teacher1 = new Teacher("Anuj", "NSUT", "coding", "03/03/1998");
const teacher2 = new Teacher("Jonas", "Harvard", "javaScript", "05-02-1992");

console.log(teacher1);
console.log(teacher2);
console.log(teacher1.getBirthYear());
console.log(teacher2.getBirthYear());