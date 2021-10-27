//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes.
You can either display all of the values in the object - or, if you want a much tougher challenge,
loop through values(if applicable) to grab each favorite food.
Example 1:
Output This persons favorite pizza is ["Deep Dish","South Side Thin Crust"]...
Example 2 (Harder):
This person has many favorite foods:
Deep Dish, South Side Thin Crust, anything not from taco bell, Portillos Burgers, CHocolate, Vanilla, oreo...

*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// Solution #1 (Easy)
for(let i = 0; i < Object.keys(person3).length; i++){
    console.log(`This person favorite ${[Object.keys(person3)[i]]}:`)
    console.log(person3[Object.keys(person3)[i]])
};

// Solution #2 (Hard)
let printFavorites = (food) => {
    if(typeof food === 'string'){
        return food
    }else if(Array.isArray(food)){
        let str = '';
        for(let i = 0; i < food.length; i++){
            output = printFavorites(food[i])
            if(str == ''){
                str += output
            }else{
                str += ', ' + output
            } 
        }
        return str
    }else{
        let str = ''
        for(let i=0; i < Object.values(food).length; i++){
            output = printFavorites(Object.values(food)[i])
            if(str == ''){
                str += output
            }else{
                str += ', ' + output
            } 
        }
        return str
    } 
};

console.log(printFavorites(person3))


//=======Exercise #2=========//
/*
Write a class for a Person that has attributes for name, age, and arrray of their hobbies.
If should also have a printInfo method that prints the attributes in a formatted string.
Create a method that accepts a parameter to add to a Person's list of hobbies.
Create two people using the 'new' keyword, and print 
both of their infos. Add a hobby to one persons hobby list.
*/
// Create our Person Class here
class Person{
    constructor(name, age, hobbies){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    // Create the printInfo method
    printInfo(){
        return `My name is ${this.name} and I am ${this.age} years old and my hobbies are ${this.hobbies}`
    }
    // Create another function for the addHobbies method that takes one parameter
    addHobbies(hobby){
        // Adding to the hbbies array...
        this.hobbies.push(hobby)
        return `The new list of my hobbies are ${this.hobbies}`          
    }
};

let Nancy = new Person('Nancy', 23, ['dancing', 'hiking']);
console.log(Nancy.printInfo())
Nancy.addHobbies('watching movies')
console.log(Nancy.addHobbies('swimming'))

let Bill = new Person('Bill', 60, ['playing with my dog', 'walking']);
console.log(Bill.printInfo())
Bill.addHobbies('reading')
console.log(Bill.addHobbies('writing'))

// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const stringLength = (str) => {
    return new Promise( (resolve, reject) =>{
        if(str.length > 10){
            resolve(true)
        }else{
            reject(false)
        }
    })
};

stringLength('hello world!')
.then((result) => {
    console.log('Big word')
})
.catch((error) => {
    console.log('Small Number')
})

//============ Codewars Problem #1 ============//
//============ Name: Twice as old ============//
/*
    Your function takes two arguments:
    current father's age (years)
    current age of his son (years)
    Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/
let twiceOld = (dad, son) =>{
    return Math.abs(dad - (son *2))
};
console.log(twiceOld(40, 2))

//============ Codewars Problem #2 ============//
//============ Name: Return Negative ============//
/*
    In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
    Examples
    make_negative(1);  # return -1
    make_negative(-5); # return -5
    make_negative(0);  # return 0
    Notes
    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

let returnNegative = (num) => {
    if(num <= 0){
        return num
    }else if(num > 0){
        return -num
    }
};
console.log(returnNegative(5))