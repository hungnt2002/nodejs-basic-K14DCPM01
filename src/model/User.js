class User {
    
    constructor(firstName, lastName, email, address){
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.address = address
    }

    addUser(userDB) {
        let { firstName, lastName, email, address } = userDB;
        User(firstName, lastName, email, address)
    }

    

}