//Form Script

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);


function onSubmit(e) {
    e.preventDefault(); 
    if(nameInput.value === '' || emailInput === '') { //If name and email are empty do this...
        msg.classList.add('error');                    //gives CSS styles to Error Message
        msg.innerHTML = 'Please Enter All Fields';

        setTimeout(()=> msg.remove(), 3000);       //gets rid of error message after 3sec
    } else {
        const li = document.createElement('li'); //if you do enter information, do this!
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
        userList.appendChild(li);
    }
}







 







//Dom Manipulation 
/*
const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello'
//ul.children[1].innerText= 'Brad';
//ul.lastElementChild.innerHTML = '<h1>hello</ h1>';

const btn =  document.querySelector('.btn');
btn.addEventListener('click', (e)=> {
    e.preventDefault();
    document.querySelector('#my-form')
    .style.background='#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1> hello </h1>'

});







//DOM Selection 

//Single Element Selectors
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

//Multiple Element Selectors 

//console.log(document.querySelectorAll('.item'));


const items = document.querySelectorAll('.item');
items.forEach ((item)=>console.log(item));

items.forEach(function(item){
    console.log(item);
});














/*
//OOP
//Class     Cleaner way to create a person object
class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date (dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){ 
        return `${this.firstName} ${this.lastName}`;
    }
} 

/* Uglier way to create a Person Object

function Person (firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date (dob);
    /*
    this.getBirthYear = function() {
        return this.dob.getFullYear();     
    }
!!these methods can now be deleted because you created a prototype of them

    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    } 


Person.prototype.getBirthYear = function() {        //These Prototypes replace the methods
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

  





//Instantiate object
 
const person1 = new Person('Siyad', 'Yusuf', '10-21-2003');
const person2 = new Person('Jimmy', 'Butler', '02-11-2000');

console.log(person1.getBirthYear());
  


//Review
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];
//Worst Version
for(let todo of todos) {
    console.log(todo.text);
}
//Better Version
todos.forEach(function(todo){
    console.log(todo.text); 
})

//Newer Better version
todos.forEach((todo) => console.log(todo.text));








/*
const addNums = (num1=1, num2=1) => console.log(num1+num2);


addNums(5,5);



 


function addNums(num1=1, num2=1) {
    return num1+num2;

}

console.log(addNums(5,5));





//Ternary and Case Switches
const x = 9

const color = x > 10 ? 'red' : 'green';      //: MEANS ELSE AND ? MEANS THEN!!!


switch(color) {
    case 'red':
        console.log('Color is Red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}







If Else Else-If


const x = 6 ;
const y = 11;

if(x>5 && y>10) {
    console.log('X is more than 5 OR Y is more than 10');
}





const x = 30;
const y = 10;
if(x>20 && y>20) {
    console.log('X and Y are greater than 20');
} else if(x>20 || y>20) {
    console.log('One of X OR Y is greater than 20');
} else if(x<20 && y<20) {
    console.log('X and Y are less than 20')
} else if(x<20 || y<20) {
    console.log('One of X or Y is less than 20');
} else {
    console.log('X or Y is 20');
}
 









//Loops

//Loops with Arrays


const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

for(let i = 0; i < tod os.length; i++) {
    console.log(todos[i].text) ; 
}

for(let todo of todos) {        //todo can be anything
    console.log(todo  );;
}

//forEach, map, filter
const todoCompleted= todos.filter(function(todo) {
    return todo.isCompleted == true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);







 


//For Loop

for(let i = 0; i < 10; i++) {
    console.log(`for loop number: ${i}`) ; 
}

//While Loop

let i = 0;
while (i < 10) {
    console.log(`while loop number: ${i}`)
    i++;
}

//Arrays of Objects

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];


const todoJSON = JSON.stringify(todos);
console.log(todoJSON );



//Object Literals
const person = {
    firstName: 'Siyad',
    lastName: 'Yusuf',
    age: 21,
    hobbies:['Sports', 'Movies and TV', 'Coding'],
    address: {
        street: 'Union Square st',
        city: 'Herndon',
        state: 'VA'
    } 
}
person.email = 'siyadyusuf@outlook.com';
const {firstName, lastName, address: {city}, email} = person;



console.log(email);







WarmUp 12/30
const age = 21;
const name= 'Siyad Yusuf';
const dob = 'October 21st';
const baddob = 'October 22nd';

const isFalse = false;



const hello = 'My name is ' + name + ' and my age is ' + age + ', my birthday is ' + dob + ', but people always get my birthday wrong and say it is ' + baddob + ' but that is ' + isFalse;

console.log(hello);
-------------------------------------------------------------------------------------------------------------------
const favplays = ['Paul George', 'Cam Newton', 'Neymar', 'Drake Maye'];

favplays[3] = 'Kyrie Irving';
favplays.unshift('Lebron');
favplays.push('Justin Jefferson');
console.log(favplays.indexOf('Neymar'));











// Array - variables that hold multiple values

const fruits = ['apples','oranges','pears'];
fruits[3]='grapes';
fruits.push('mango')
fruits.unshift('bananas')
console.log(fruits);







 



//String Properties and Methods

const s ='tech, computers, it, code';
 
console.log(s.split(",  " ));
  
 
//String:
//Number
const name = 'John';
const age = 27;
//String Cont. Concatenation
console.log('My name is ' + name + ' and my age is ' + age);

 
console.log( typeof name)
//Template Strings
const string= `My name is ${name} and my age is ${age}`;
console.log(string);






 

//Boolean

const isCool = true;
console.log(isCool);

//Decimal

const rating =4.5;
console.log(rating);

//null

const x = null
console.log(x);
//undefined

const y =undefined;
console.log(x);
//OR
let z; //is also undefined

console.log(typeof isCool)
*/