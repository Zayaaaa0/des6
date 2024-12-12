// let days = { monday:1 , tuesday:2 , wednesday:3 , thursday:4 , friday:5 , saturday:6 , sunday:7 ,}
// console.log(days.monday );

function urjih (num1 , num2)
{
    console.log ("urjih")
    return num1 * num2
}
let niilber = urjih(10,2)
console.log (niilber);




function urjih (num1, num2) {
    console.log ("urjih")
    console.log (num1  * num2)
}
urjih (10, 3);





function huvaah (a, b) {
console.log ("huvaah")
console.log (a / b)
}
huvaah (100, 10);



function huvaah (a , b) {
    console.log ("huvaah1")
    return a / b
}
let niilber1 = huvaah(150,3)
console.log (niilber1);



function oddnumbers (n) {
    let niilber = 0
    for (let i = 1 ; i <= n; i=i+2) {
        console.log(i);
        niilber = niilber+ i
    }
return niilber
}
console.log (oddnumbers(10))


function multiplicationtable (n) {
    let num = 6
    for (let i = 1; i<=n;i++) {
console.log(i);
console.log( num,"*",i, "=", (num*i))
    }
}
console.log (multiplicationtable(10))

