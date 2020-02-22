/**
 * Variables and Data types
 */
/*
 console.log('Hello World!!!');

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;
var fullAge = true;

console.log(lastName);
console.log(age);
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// one line comment
*/

/**
 * Variable mutation and type coercion
 */
/*
 // Type coercion
 var firstName = 'John';
 var age = 28;
 console.log(firstName  + ' ' + age);

 var job, isMarried;
 job = 'teacher';
 isMarried = false;
 console.log(firstName + ' is a ' + age + ' year old ' + job + ', Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + age + ' year old ' + job + ', Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/**
 * Basic Operators
 */
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - 28;
yearMark = now - 33;
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/**************************************************
 * Operator Precedence
 */
/*
 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;
 
 // Multiple operators
 var isFullAge = now - yearJohn >= fullAge;
 console.log(isFullAge);

 // Grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
 console.log(average);

 // Multiple assignments
 var x,y;
 x = y = ( 3 + 5 ) * 4 - 6;
 console.log(x, y);

 // left to right, right to left (Assignment(=),expotensial)

 // More Operators
 x = x * 2;
 x *= 2;
 console.log(x);
 x += 10;
 console.log(x);
 x = x + 1;
 x += 1;
 x++;
*/

/*********************************************
 * Coding Challenge 1
 */
/*
 var MarkMass, MarkHeight, JohnMass, JohnHeight;
 MarkMass = 78, MarkHeight = 1.69;
 JohnMass = 92, JohnHeight = 1.95;
 var compareBMI = ( MarkMass / (MarkHeight * MarkHeight)) > ( JohnMass / (JohnHeight * JohnHeight));
 console.log("Is Mark's BMI higher than John's? " + compareBMI);
 */

/***********************************************
 * If / else statements
 */
/*
 var firstName = 'John';
 var civilStatus = 'single';

 if(civilStatus === 'married') {
     console.log(firstName + ' is married!');
 } else {
     console.log(firstName + ' will hopefully marry soon.:)');
 }

 var isMarried = true;
 if(isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon.:)');
}
*/

/************************************************
 * Boolean logic
 */
/*
 var firstName = 'John';
 var age = 16;
 if(age < 13){
     console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
 } else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
 } else {
     console.log(firstName + ' is a man.');
 }
*/

/***********************************************
 * The Ternary Operator and Swith Statement
 */

 /*
 // Ternary Operators
 var firstName = 'John';
 var age = 16;

 age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
 
 var drink = age >= 18 ? 'beer' : 'juice';
 console.log(drink);

// Switch Statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 17;
switch(true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/********************************************************
 * Truthy and Falsy values and equality operators
 */

 // falsy values: undefined, null, 0, '', NaN
 // truty values: Not falsy values
/*
 var height;
 if(height || height === 0 ) console.log('Variable is defined');
 else console.log('Variable has NOT been defined');

 // Equality operators
 height = 23;
 if (height == '23'){
     console.log('The == operator does type coercion!');
 }
*/

/******************************************************
 * Coding Challenge 2
 */
/*
var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if(scoreJohn > scoreMike){
    console.log('Jonn\'s team wins with ' + scoreJohn + ' points');
} else if (scoreJohn < scoreMike){
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}

if(scoreJohn > scoreMike && scoreJohn > scoreMary){
    console.log('Jonn\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary){
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike){
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}
*/

/*****************************************************
 * Functions
 */
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}
var ageJohn = calculateAge(1999);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1970);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
    
}
yearsUntilRetirement(1990, 'John');
*/

/**************************************************
 * Functions Statements and Expressions
 */
/*
 // Function declaration
 //function whatDoYouDo(job, firstName){}

 // Function Expression
var whatDoYouDo = function(job, firstName) {
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else.';
    }
}
console.log(whatDoYouDo('teacher', 'John'));
*/

/**************************************************
 * Arrays
 */
/*
 // Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[5] = 'Mary';
console.log(names);
console.log(names.length);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));
console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is Not a designer' : 'John is a designer';
console.log(isDesigner);
*/

/*********************************************************
 * Coding Challenge 3
 */
/*
 var bill = [124, 48, 268];
var tipCalc = function(price){
    var tip;
    if( price < 50 ) tip = price * 0.2;
    else if ( price >= 50 && price < 200) tip = price * 0.15;
    else tip = price * 0.1;
    return tip;
}

var tips = [];
for( x = 0 ; x < 3 ; x ++){
    tips.push(tipCalc(bill[x]));
}
console.log(tips);

var totals = [];
for(x = 0; x < 3 ; x++){
    totals.push(tips[x] + bill[x]);
}
console.log(totals);
*/

/********************************************************
 * Objects and Properties
 */
/*
// Object liternal
var john = {
    firstName:  'John',
    lastName:   'Smith',
    birthYear:  1990,
    family:     ['Jane', 'Mark', 'Bob', 'Emily'],
    job:        'teacher',
    isMarried:  false
};
console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/*****************************************************
 * Objects and Methods
 */
/*
var john = {
    firstName:  'John',
    lastName:   'Smith',
    birthYear:  1990,
    family:     ['Jane', 'Mark', 'Bob', 'Emily'],
    job:        'teacher',
    isMarried:  false,
    calcAge:    function(birthYear){
        return 2018 - birthYear;
    },
    calcAgeThis:    function(){
        return 2018 - this.birthYear;
    },
    calcAgeAssign:    function(){
        this.ageAssign = 2018 - this.birthYear;
    }
};

console.log(john.calcAge(1990));
console.log(john.calcAgeThis());

john.age = john.calcAgeThis();
console.log(john.age);

john.calcAgeAssign();
console.log(john);
*/

/*********************************************************
 * Coding Challenge 4
 */
/*
var john = {
    name:   'John',
    mass:   92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
    }
}

var mark = {
    name:   'Mark',
    mass:   78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
    }
}

john.calcBMI(); mark.calcBMI();
console.log(john);
console.log(mark);
if(john.BMI > mark.BMI){
    console.log(john.name + ' is bigger with ' + (john.BMI - mark.BMI));
} else if (mark.BMI > john.BMI){
    console.log(mark.name + ' is bigger with ' + (mark.BMI - john.BMI));
} else {
    console.log('They have the same BMI.');
}
*/

/*****************************************************************
 * Loops and iteration
 */
/*
for(var i = 0 ; i < 10 ; i++){
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];
for(var i=0;i<john.length;i++){
    console.log(john[i]);
}

var i=0;
while(i<john.length){
    console.log(john[i]);
    i++;
}

// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false];
for(var i=0;i<john.length;i++){
    if(typeof john[i] !== 'string') continue;    
    console.log(john[i]);
}

for(var i=0;i<john.length;i++){
    if(typeof john[i] !== 'string') break;    
    console.log(john[i]);
}

// Looping backwards
for(var i = john.length - 1; i >= 0 ; i--){
    console.log(john[i]);
}
*/

/**********************************************************
 * Coding Challenge 5
 */

var john = {
    bills:[124, 48, 268, 180, 42],
    tips: [],
    totals: [],
    calculateTips: function(){
        var rate = 0;
        for(var i = 0; i < this.bills.length ; i++){
            if(this.bills[i] < 50)  rate = 0.2;
            else if (this.bills[i] >= 50 && this.bills[i] < 200 ) rate = 0.15;
            else rate = 0.1;
            
            this.tips.push(rate * this.bills[i]);
            this.totals.push(this.tips[i] + this.bills[i]);
        }
        console.log(this.tips);
        console.log(this.totals);
    }
}

john.calculateTips();

var mark = {
    bills:[77, 375, 110, 45],
    calculateTips: function(){
        this.tips = [];
        this.totals = [];
        var rate = 0;
        for(var i = 0; i < this.bills.length ; i++){
            if(this.bills[i] < 100)  rate = 0.2;
            else if (this.bills[i] >= 100 && this.bills[i] < 300 ) rate = 0.1;
            else rate = 0.25;
            
            this.tips.push(rate * this.bills[i]);
            this.totals.push(this.tips[i] + this.bills[i]);
        }
        console.log(this.tips);
        console.log(this.totals);
    }
}

mark.calculateTips();

var averageTip = function(tips){
    var total = 0;
    for(var i=0; i<tips.length ; i++){
        total += tips[i];
    }
    return total / tips.length;
}

john.avg = averageTip(john.tips);
mark.avg = averageTip(mark.tips);
console.log(john.avg, mark.avg);

if(john.avg > mark.avg){
    console.log('John payed more tips ' + (john.avg - mark.avg));
}else if (mark.avg > john.avg){
    console.log('Mark payed more tips ' + (mark.avg - john.avg));
} else {
    console.log('The same');
}
