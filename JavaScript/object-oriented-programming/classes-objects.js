class RailwayForm{
    submit(){
        console.log(this.name + "Form Submitted and his trainnumber is: " + this.trainnumber)
    }
    cancel(){
        console.log(this.name + "Form Rejected")
    }
    fill(givenname, trainnumber){
        this.name = givenname
        this.trainnumber = trainnumber
    }
}

let pratik = new RailwayForm()
pratik.fill("Pratik's ", 457812)

let raj = new RailwayForm()
raj.fill("Raj's ", 451278)

let raj2 = new RailwayForm()
raj2.fill("sdas ", 234234)

raj2.cancel()
raj.submit()
pratik.cancel()