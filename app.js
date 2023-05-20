'use strict'
// 14th May 2023
// -------VARIABLES,VALUES AND DECLARATORS
// -------VARIABLES are storage facilities for storing data or values
//-------- VALUES are just pieces of data 
//------- DECLARATORS are used in declaring variables(let,const,var)
// ------let
let firstname ='Lamar'
console.log(firstname);
let lastname ='dami'
console.log(lastname);
let country ='Nigeria'
console.log(country);
// ---------------------var
var trianee ='Emma';
console.log(trianee);
var tribe ='Yoruba';
console.log(tribe);
//-------const
const PIE = 3.142
console.log(PIE);
// 
// Constraints in variable naming
// ---- Variable names can only contain letters,numbers,underscore,dollar sign but can not start with a number
// ---- Dnt give spaces btw variable names,use carmel casing
// ---- Reserved names cnt b used as a variable name,since it is reserved
// ---- By convention dnt start varible names with uppercase except for const
// ---- Use decriptive names when naming varibales

// DATA TYPES
// strings,used for storing letters and dey r denoted by a single quote('') or double quotes("")
// number used for numbers(can hold decimal or whole numbers)
// boolean ---- true or false
// null - empty
// undefined 
// objects(arrays,dates and functions) for holding more dn one value and denoted by {}
// symbols
// bigInt
// ========================================================================================================================================================
// 20th May
// -To create spacing we create a space inside the string
// -the 'use strict' is used so as to make corrections on your work if there are any error 
// ======================================================================================================================================================== 
// STRINGS
// let school = 'aguda grammer sch';
// console.log(sch ool);

let continent = 'Africa';
console.log(continent);

let firstName2 = 'Faith';
let lastName2 = 'John';
let fullName = firstName2 + ' ' + lastName2
console.log(fullName);

// string properties and methods
// length property
let email = 'askjeeves@gmail.com';
console.log(email);
console.log(email.length);
// gettting ---wen counting length d numbering starts from 1 but wen looking for positions or index d numbering starts from 0
let city = 'surulere';
console.log(city.length);
console.log(city[0]);
// let class1 = 'javascript';

// Methods
let trainee1 = 'emma';
console.log(trainee1);

// to .upperCase()
console.log(trainee1.toUpperCase());
// toLowerCase()
let newTrainee = 'FAITH';
console.log(newTrainee.toLowerCase());
// indexOf()
let newEmail = 'dan@gmail.com';
console.log(newEmail);
let newEmailIndexOf = newEmail.indexOf('m');
console.log(newEmailIndexOf);

// lastIndexOf()
let applicant = 'racheal';
console.log(applicant);
console.log(applicant.lastIndexOf('a'));
// slice()
let religion = 'christianity';
console.log(religion);
console.log(religion.slice(5,9));
// replace()
let profesion = 'developer';
console.log(profesion);
console.log(profesion.replace('d','z'));
// ==========================ASSIGNMENT=============================
let continent2 ='Africa'
console.log(continent2);
let Language ='Pidgin English'
console.log(Language);
let ghanaPopulation =500
console.log(ghanaPopulation);
let finlandPopulation =800
console.log(finlandPopulation);
let country2 ='Nigeria'
console.log(country2);
let nigeriaPopulation =1000
    console.log(nigeriaPopulation);
    // SOLUTIONS//
    // Q1//
    let halfNigeria Population= nigeriaPopulation 
// number data type
let year1 = 2023;
console.log(year1)
let score = 100
console.log(score);
let score2 = 200;
console.log(score2);

// Math operators
// +, -, /, **, * %
let finalScore = score + score2
console.log(finalScore);
let minus = score2 - score
console.log(minus);
let multiply = score * score2
console.log(multiply);
let divide = score2 / score
console.log(divide);

let number = 10
console.log(number);
let number2 = 3
console.log(number2);
let indices = number ** number2
console.log(indices);

let modulus = number % number2
console.log(modulus);

// decremental and incremental
let addedYear = year1 + 1
console.log(addedYear);

year1++
year1--
console.log(year1);
year1 += 10
console.log(year1);
// concatinating(means joining or merging ) variables ith strings
let blog = 50

let statements = 'the blog has ' + blog + ' likes';
console.log(statements);
let traineeScore = 90;
let traineeName2 = 'Emma';
let school = 'Aguda grammar school';

let response = 'Dami did you know ' + traineeName2 + ' attends ' + school + ' and scored ' + traineeScore + ' in His test ';
console.log(response);


// Template litrals or strings (uses backticks(``)) and interpolation(${})
let newResponse = `Dami did you know ${traineeName2} attends ${school} and scored ${traineeScore} in His test`;
console.log(newResponse);

let classAvailable = 'Javascript fullstack course';
let bootCamp = 'Techstudio Academy';
let stateLocation = 'Lagos';
let regFeeInNaira = 300;
let prospectiveTrainee = ' John ';

let adminSay = 'Hello' + ' ' + prospectiveTrainee + bootCamp + ' offers ' + classAvailable + ' in ' + stateLocation + ' and the registration fee in naira is ' + regFeeInNaira;

console.log(adminSay);

let newresponse =`Hello ${prospectiveTrainee} ${bootCamp} offers ${classAvailable} in ${stateLocation} and the registration fee in naira is ${regFeeInNaira}`

let favFood = 'yam and egg'
let favFood2 = 'amala and ewedu'
let favFood3 = 'chineese rice and lobster'
// Arrays dey r used for storing collections of strings,numbers,booleans and other data types and dey can also store arrays dem selves,arrays are denoted by square bracket([])
let damiFavFood = ['yam and egg','amala and ewedu','chineese rice and lobster',
]
console.log(damiFavFood);

// let colors = ['blue',20,true,null,undefined,[0,2]]
// Array properties and methods
// lenght
let lengthOfDamiFavFoods = damiFavFood.length
console.log(lengthOfDamiFavFoods);
console.log(damiFavFood.length);
// position
console.log(damiFavFood[0]);
damiFavFood[0] = 'Beans';
console.log(damiFavFood);


//Array methods
// includes()
let includes = damiFavFood.includes('corn');
console.log(includes);
// join
let join = damiFavFood.join('-');
console.log(join);

// concat()
let concat = damiFavFood.concat(['banga','starch','yam']);
console.log(concat);

// push()
let push = damiFavFood.push('efo-riro');
console.log(push);
console.log(damiFavFood);
// pop()
let pop = damiFavFood.pop();
console.log(pop);
let pop2 = damiFavFood.pop();
console.log(pop2);
console.log(damiFavFood);

let cart = [];
console.log(cart.length);
// let cart1 = cart.push('bag');
// console.log(cart);
cart.push('bag');
cart.push('sandal')
console.log(cart.length);
console.log(cart); 

 