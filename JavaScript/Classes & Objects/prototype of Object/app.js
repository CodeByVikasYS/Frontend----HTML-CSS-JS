const student = {
    name:"Vikas",
    College:"IIIT Dharwad",
    mark: 94.5,
    printMarks: function(){
        console.log("marks", this.mark);          // this here refers to current object like here this = student.
    },
};