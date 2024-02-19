class employee {
    login() {
        console.log(`Logged in`)
    }
    logout() {
        console.log(`Logged Out`)
    }
    requestleaves(leaves){
        console.log(`Employee has requested for ${leaves} leaves - Approved`)
    }
}
class programmer extends employee{
    requestCoffee(){
        console.log(`Employee has requested ${x} coffees`)
    }

    requestleaves(leaves){
        super.requestleaves(4)
        console.log(`Employee has requested for(One extra)`)
    }
}

let pro = new programmer()
pro.requestleaves(3)