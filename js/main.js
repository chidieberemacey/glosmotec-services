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

// var score = 2;

// let dope = [1,2,3,4,5,6,7]

// let now = dope.forEach((x,y) => {
//     score = score + x;
//     console.log(score)
// });



// sleek(7)
// let num = [7,2,3,4,2,5]
let button = document.querySelector('#btn');
button.addEventListener('click', sleek)

function sleek(){
    let score = document.getElementById('score').value;
    if(score !== ''){
        for (let index = 1; index < score; index++) {
        
            if (index % 3 == 0 && index % 5 == 0) {
                console.log('FizzBuzz')
            }else if (index % 3 == 0){
                console.log('Fizz')
            }else if (index % 5 == 0){
                console.log('Buzz')
            }else{
                console.log(index)
            }
        }
    }else{
        console.log('No Input')
    }

};

let date = new Date();

console.log(date)

let dope = ('sweet, potato, that, is, made, nice')

console.log(dope.slice(3,9))

let vial = dope.split(',')
console.log(vial)

setTimeout(
  button.click = function(){
  console.log('make more money')
  }
, 3000)

let today = 'boxing day'
if(today){
    console.log(`It's a new ${today} ${date}`)
}else{
    console.log('Sorry, Not today')
}

let beautiful = ['Macey','Yolo','Skyla'];

function sweet(){
    for (let index = 0; index < vial.length; index++) {
        const element = vial[index];
        console.log(element)
        
        // if(element == beautiful.length){
        //     beautiful.length = 0;
            
        // }
        console.log('This is ' + beautiful[index]);        
    }
}

sweet();

var christmas = '25th December'
christmas = christmas.toLowerCase();
console.log(christmas)
let display = 'sup';
document.createElement('h3').innerText = christmas;
console.log(display)

let doppleganger = new Set();

doppleganger.add('dome').add('skyscraper').add('dome')
console.log(doppleganger)

console.log(...beautiful)
console.log(beautiful)




