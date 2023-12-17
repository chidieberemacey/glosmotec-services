class User{
    constructor(userName,lastName){
        this.name = userName,
        this.lastname = lastName
    }
    login(){
        console.log(`${this.name} just logged in`)
    }
    logout(){
        console.log(`${this.lastname} just logged out`)
    }
}

class Admin extends User{
    deleteUser(userdel){
        console.log(`${this.name} deleted user ${userdel}`)
    }
}

let userOne = new User('Chinaza', 'Edeh')
let userTwo = new User('Chidubem', 'Wisdom')
let adminOne = new Admin('paul', 'patrick')

adminOne.deleteUser(userOne.lastname)
userOne.logout()
userTwo.login()

var score = 2;

let dope = [1,2,3,4,5,6,7]

let now = dope.forEach((x,y) => {
    score = score + x;
    console.log(score)
});

console.log(score)

// Finish project today