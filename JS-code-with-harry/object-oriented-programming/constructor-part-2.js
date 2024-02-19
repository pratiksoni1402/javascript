class RailwayForm{
    constructor(givenname, trainnumber, address){
        console.log("Constructor Called "+ givenname + " " +trainnumber)
        this.name = givenname
        this.trainnumber = trainnumber
        this.address = address
    }
    preview(){
        console.log("Form Ready for Preview")
    }

    submit(){
        console.log(this.name + "Form Submitted and his trainnumber is: " + this.trainnumber)
    }
    cancel(){
        console.log(this.name + "Form Rejected")
    }

}

let pratik = new RailwayForm("Pratik ", 457813, "7/C/71 KBHB")

pratik.preview()