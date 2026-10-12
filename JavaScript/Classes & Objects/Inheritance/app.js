class person{

    constructor(){
        this.species = "homo-sapiens";
    }
    eat() {
        console.log("eat");
    }

    drink() {
        console.log("drink");
    }
}

class engineer extends person {

    constructor(branch){
        super();    
        this.brach = branch;
    }
    work(){
        console.log('solve problems, build something');
    }
}

class doctor extends person{
    work() {
       console.log("more work = more patients improvement");
    }
}


let newObj = new engineer("chemical engineer");

let newObj1 = new person();

let newObj2 = new doctor();

let p1 = new person();