// function tree (n) {
//     let od = "*"
//     for (let i = 0 ;i <= n;i++) {
//         console.log(od)
//         od += "*"
//     }
// }
// tree(3);

// function findmid(a, b, c) {
//     if ((a >= b && a <= c) || (a <= b && a >= c)) return a;
//     if ((b >= a && b <= c) || (b <= a && b >= c)) return b;
//     if ((c >= b && c <= a) || (c <= b && c >= a)) return c;
//   }
//   console.log(findmid(10, 50, 20));




//   let ages = [10, 20, 30, 40, 50, 10,]
//   let names = ["boldo","dorj", "dondog" ,"bataa" ,"boogii" , "haagii"]

//   console.log(names[4]);
//   console.log(ages[4]);
//   console.log(ages.length);


//   function findsumages (ages) {
//     let sum = 0;
//     for (let i = 0; i < ages.length; i++) {
//         sum = sum + ages [i]
//     }
//     return sum;
//   }                 




//   let answer = findsumages ([10, 20, 30, 40, 50, 10,]);
//   console.log (answer);
//   console.log (answer/ages.length)





//   let numbers = [176, 11, 36, 78, 95, 200, 64]
//   function findevenNumbers (arr) {
//     let minNum = arr [0];
//     for (let i = 0;i < arr.length; i++) {
//         if (numbers % 2 == 0 && number >findevenNumbers){
//             minNum = arr [i]
//         }
//     }
//     return minNum
//   }

//   let answer = findevenNumbers (numbers);
//   console.log(answer);
  




//   let number = [1981, 99, 11, 45, 89, 76, 56, 12, 5]
//   function findMin (arr) {
//     let minNum = arr [0];
//     for (let i = 0; i < arr.length;i++) {
//         if (minNum < arr) {
//             minNum = arr
//         }
//     }
//     return minNum;
//   }
//   let answer1 = findMin (number);
//   console.log(answer1);






//   let too = [12, 4, 157, 200, 1, 26, 51, 5126, 500,]
//   function findMax (arr) {
//     let maxNum = arr [0]
//     for (let i = 0; i , arr.length - 1; i++) {
//      if (maxNum < arr [i + 1]) {
//      maxNum = arr [i + 1]
// }
//     }
//     return maxNum
// }
// let hariu = findMax (too);
// console.log (hariu);



// let numbers = [12, 4, 157, 200, 1, 26, 51, 5126, 500,]
// function findMax (arr) {
//     let maxNum = arr [0];
//     for (let i = 0;i < arr.length - 1; i++) {
//         if (maxNum < arr [i+1]) {
//             maxNum = arr [i+1]
//         }
//     }
//     return maxNum;
// }
// let answer = findMax (numbers);
// console.log (answer);





// let numbers = [12, 4, 157, 200, 1, 26, 51, 5126, 500,]
// function findMax (arr) {
//     let maxNum = arr [0];
//     for (let i = 0;i < arr.length - 1; i++) {
//         if (maxNum < arr [i+1]) {
//             maxNum = arr [i+1]
//         }
//     }
//     return maxNum;
// }
// let answer = findMax (numbers);
// console.log (answer);



// let too = [12, 4, 157, 200, 1, 26, 51, 5126, 500,]
// function findMin (arr) {
//     let minNum = arr [0];
//     for (let i = 0;i < arr.length - 1; i++) {
//         if (minNum > arr [i+1]) {
//             minNum = arr [i+1]
//         }
//     }
//     return minNum;
// }
// let hariu = findMin (too);
// console.log (hariu);




// let numbers1 = [12, 4, 157, 200, 1, 26, 51, 5126, 500,]
// function maxEven (arr) {
//     let Even = arr [0];
//     for (let i = 0;i < arr.length - 1; i++) {
//         if (numbers1 % 2 == 0 && Even < arr [i+1]) {
//             Evennum = arr [i+1]
//         }
//     }
//     return Even;
// }
// let answer1 = maxEven (numbers1);
// console.log (answer1);




// let too1 = [12, 4, 157, 200, 1, 26, 51, 5126, 500,]
// function minodd (arr) {
//     let Odd =  10000;
//     for (let i = 0; i < arr.length; i++) {
//         if (Odd > arr [i] && too1 % 2 == 1 ) {
//             Odd = arr [i]
//         }
//     }
//     return Odd;
// }
// let hariu1 = minodd (too1);
// console.log (hariu1);




// let too = [2, 42, 57, 5, 202, 16, 27, 64,  5129 , -2];
// function findMin (arr) {
//     let minNum = arr [0];
//     for (let i = 0;i < arr.length - 1 ; i++) {
//         if (too % 2 !== 1 && minNum > arr [i+1]) {
//             minNum = arr [i+1];
//         }
//     }
//     return minNum;
// }
// let hariu = findMin (too);
// console.log (hariu);




// let numbers = [190, 89, 67, 12, 36, 48, 100, 44];
// function findEvenNumbers (input) {
//     let evenNumbers = [];
//     for (let i = 0; i < input.length ;i++) {
//     if (input[i]%2==0) {
//         evenNumbers.push(input[i])
//     }
//     } return evenNumbers;
// }
// let answer = findEvenNumbers (numbers);
// console.log (answer);



// let transfer = [-500 , 1200, 1600, 1800, -900, -760, 200]
// function income (input) {
//     let positive = [];
//     for (let i = 0; i < input.length ; i++ ) {
//         if (input[i] <0) {
//             positive.push (input[i])
//         }
//     } return positive;
// }

// function expense (r) {
//     let negative = [];
//     for (let i = 0; i < r.length ; i++) {
//         if (r[i] > 0) {
//             negative.push (r[i])
//         }
//     } return negative;
// }

// let answer = income (transfer);
// console.log ("zarlaga" ,answer);
// let hariu = expense (transfer);
// console.log ("orlogo" ,hariu);








// let students = [
//     {name: "dorjo" ,age: 14, gender: "male"},
//     {name: "dulma" , age: 30, gender: "female"},
//     {name: "dondog" ,age: 5, gender: "male"},
//     {name: "bata" ,age: 50, gender: "male"},
//     {name: "tsetsge" , age: 10, gender: "female"}

// ];
// function findGender (input) {
//     let genders = [];
//     for (let i = 0; i < input.lenght; i++) {
//         if (input[i].gender) {
//             genders.push(input[i]);
//         }
//     } return genders;
// }
// let result = findGender(students);
// console.log(result);



let students = [
    {name: "boldo" ,age: 15 , grades: [10,20,30,90,80] , gender: "male"},
    {name: "tsetsgee" ,age: 20 , grades: [50,40,90,30,90] , gender:"female"},
    {name: "zaya" ,age: 18 , grades: [90,20,30,40,50,] , gender:"female"},
    {name: "enhjin" ,age: 18 , grades: [90,50,60,10,70] , gender:"female"},
    {name: "noomi" ,age: 18 , grades: [70,50,60,70,80] , gender:"female"},
    {name: "michka" ,age: 18 , grades: [50,60,70,80,90] , gender:"female"},
    {name: "ochiro" ,age: 16 , grades: [10,90,30,40,50] , gender:"male"},
    {name: "anujin" ,age: 13 , grades: [20,30,40,50,90] , gender:"female"},
    {name: "javha" ,age: 13 , grades: [30,40,50,60,70] , gender:"male"},
    {name: "dorjo" ,age: 21 , grades: [10,30,40,50,60] , gender:"male"},
    {name: "dondog" ,age: 25 , grades: [20,90,60,80,10] , gender:"male"},
    {name: "bilguun" ,age: 19 , grades: [10,20,10,40,50] , gender:"male"},
    {name: "urnaa" ,age: 41, grades: [10,10,50,60,50] , gender:"female"},
    {name: "uchka" ,age: 18, grades: [20,20,40,30,90] , gender:"female"},
    {name: "zulaa" ,age: 18, grades: [30,40,50,60,70] , gender:"female"},
    {name: "dulguun" ,age: 18, grades: [10,20,30,50,60] , gender:"male"},
    {name: "orgil" ,age: 29, grades: [20,30,40,30,20] , gender:"male"},
    {name: "bayra" ,age: 28, grades: [90,80,40,50,10] , gender:"male"},
    {name: "gerle" ,age: 27, grades: [80,80,80,60,70] , gender:"female"},
    {name: "usku" ,age: 19, grades: [90,90,90,80,80] , gender:"male"},
];
// function findOneStudentAverageGrade (oneStudent) {
//     let grades = oneStudent.grades;
//     let sum = 0;
//     for (let i = 0;i < grades.length; i++) {
//         sum = sum + grades[i];
//     }
//     let average = sum / grades.length;
//     return average
// }
// function findAllAverageGrade (allStudents) {
//     let sum = 0;
//     for (let i = 0;i < allStudents.length; i++) {
//         let average = findOneStudentAverageGrade(allStudents[i])
//         sum = sum + average
//     }
//     console.log (sum)
//     let allaverage = 0
//     allaverage = sum / students.length
//     console.log (allaverage)
// }
const getAges = (students) => students.map((students) => students.age);
const ages = getAges(students);
console.log({ages});


const getGrades = (students) => {
    let neetArray = [];
students.map((students) => {
    neetArray.push(...students.grades);
})
return neetArray;
};
const grades = getGrades(students);
console.log(grades);



const getMaleStudents = (students) => 
  students.filter((students) => students.gender == "male");
console.log(getMaleStudents(students)); 

// let num = "12"
// let num1 = "123"
// console.log(Number(num)+Number(num1));
// let num2 = [123, 34, 6 , 12];
// let num3 = {age: 12, name: "boldo"};
// console.log(num2.toString() + num3.toString());
// let studentStr = '{"name":"boldo"}'
// const student = JSON.parse(studentStr);
// console.log(student);
const getStartsWithB = (students) => 
    students.filter((students) => students.name[0] == "b")
console.log(getStartsWithB(students));