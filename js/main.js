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



// sleek(7)
let num = [7,2,3,4,2,5]

let sleek = (x,y) => {
    
    score = score + x;
    if (score % 3 || score % 5 == 0) {
        console.log('FizzBuzz')
    }else if (score % 3){
        console.log('Fizz')
    }else if(score % 5){
        console.log('Buzz')
    }else{
        console.log('none')
    }

};

sleek(7)



// Finish project today