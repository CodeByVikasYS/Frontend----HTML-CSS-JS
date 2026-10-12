/* Qs. You are creating a website for your college. Create a class User with 2 properties, name & email. 
It also has a method called viewData() that allows user to view website data.*/

let data = "High tech secret information";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("DATA", data);
    }
}

class admin extends User{

    constructor(name, email){
        super(name, email);
    }

    editData(){
        data = "some new info"
    }
}


// let s1 = new User("Vikas", "vikas5457singh5457@gmail.com");
// let s2 = new User("Om", "om5457singh5457@gmail.com");
// let s3 = new User("Akash", "akash5457singh5457@gmail.com");

let ADMIN = new admin("Ayush", "ayush5457singh5457@gmail.com");