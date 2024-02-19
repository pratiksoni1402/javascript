class RailwayForm{
    constructor(givenname, trainnumber){
        console.log("Constructor Called "+ givenname + " " +trainnumber)
        this.name = givenname
        this.trainnumber = trainnumber
    }

    submit(){
        console.log(this.name + "Form Submitted and his trainnumber is: " + this.trainnumber)
    }
    cancel(){
        console.log(this.name + "Form Rejected")
    }

}

let pratik = new RailwayForm("Pratik ", 646556)



pratik.submit()