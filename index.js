//problem 1
//test 1
const numbersArray = ['apple', 'orange', 'peach'];

const [a, b, c] = numbersArray;

console.log(a, c);

//test 2
const person = {
    name: 'abcde',
    age: 10,
    gender: 'm'
};
const { name, gender } = person;

console.log(name, gender);


//Problem 2
//test 1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log([...array1, ...array2]);

//test 2
const basicDetails = {
    name: 'abcde',
    age: 10,
    gender: 'm'
};

const educationDetails = {
    degree: 'xyz',
    college: 'anc',
}
console.log({...basicDetails, ...educationDetails });


//problem 3
//test 1

let numArray = [1, 5, 7, 9];

function largestNumber(numArray) {

    let max = numArray[0];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > max) {
            max = numArray[i];
        }
    }
    console.log(max);
}
console.log(largestNumber(numArray));

/* Test 1:  
    Input: numArray = [1,5,7,9] 
    Output: 9 
*/

//test 2
let numberArray = [-1, -5, 0, -100];

function largestNumber(numberArray) {

    let max = numberArray[0];
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > max) {
            max = numberArray[i];
        }
    }
    console.log(max);
}
console.log(largestNumber(numberArray));


//problem 4

//test 1

let employeesArray = [100, 500, 700, 400]
let percent = 10;

function updateSalaries(employeesArray, percent) {

    for (let i = 0; i < employeesArray.length; i++) {
        let n = employeesArray[i] / 10;
        employeesArray[i] = employeesArray[i] + n;
    }
    console.log(employeesArray);

}
console.log(updateSalaries(employeesArray, percent));

/* Test 1:  
    Input: employeesArray = [100,500,700,400], percent = 10 
    Output: [110, 550, 770, 440] 
    */