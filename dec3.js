
// let text = "replace doo, doo, doo, doo, doo, doo.";
// let lyricsArr = [
//   "Baby shark",
//   "Mommy shark,",
//   "Daddy shark,",
//   "Grandma shark",
//   "Grandpa shark",
//   "Let's go hunt,",
//   "Run away,",
//   "Safe at last, ",
//   "It's the end",
// ];

// lyricsArr.map((lyrics) => {
//   let line = text.replace("replace", lyrics);
//   for (let i = 0; i < 3; i++) {
//     console.log(line);
//   }
//   console.log(lyrics + "!");
// });
let text = "Hello world! I am Fullstack Developer";
let words = text.split(" ");
console.log(words[4]);




// let string2 = "Hello world! I am Fullstack Developer";
// let replacedString2= string2.replace ("Hello" , "Developer")
// console.log("replaced" , replacedString2)


let string2 = "Hello world! I am Fullstack Developer";
let obj = {
    Hello: "Developer",
    Developer: "Hello"
};
function sentence () {
    console.log(string2.replace(/Hello|Developer/gi,
        function (rep) {
            return obj [rep]
        }
    ))
}
sentence ();



let number = 97699123456
let code = number.slice(3)
let c = number.slice(0,3)
let output = '({c}) {code}';
console.log(output);
