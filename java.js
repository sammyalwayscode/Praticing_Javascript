// // alert("Hello world")
// //  console.log("This is javascript")
// //  document.write("This is javascript class")

// // var Name = "     Sammy"
// // console.log(Name)

// //  let num = 56
// // console.log(num)
// // console.log(typeof num)

// // var isNull = null
// // console.log(isNull)

// //  var sym = Symbol("edwin")
// // console.log(sym)
// // console.log(typeof sym)
// // //Object

// // var stu = {Name:"John", Age:63}
// // console.log(stu)
// // console.log(typeof stu)

// // var is_true = false
// // console.log(typeof is_true)
// // //array
// // var students = ["John", "Sam", 733]
// // console.log(typeof students)

// // console.log(Number.MAX_SAFE_INTEGER)

// // //var bigint = 500n
// // // console.log(typeof bigint)

// // var words = "Hmmmmm... well i'm just learning javascript and its going well"
// // var fruits = "banana, mango, orange, pawpaw,"
// // console.log(Name.length)
// // console.log(Name.toLowerCase())
// // console.log(Name.toUpperCase())
// // console.log(words.indexOf("."))
// // //indexOf let us know the position of a character in a string
// // console.log(Name.trim())

// // var txt = "abcdefghijklm"
// // console.log(txt.indexOf("h"))
// // console.log(Name.concat("Olorunda"))
// // console.log(Name.concat(" Olorunda").trim())
// // console.log(Name.split('').stringify)
// // console.log(fruits.split(', '))

// // var abc = "ola, sammy, Praise"
// // console.log(abc.slice(5,11))
// // console.log(abc.substr(12,6))
// // console.log(abc.substring(0,3))

// // var eat = "I love to code"
// // console.log(eat.replace("I", "We "), eat.replace(" code"," eat"))

// // // var trying = prompt("what is your name")
// // // alert(trying)

// // // document.write("welcome"+""+"user")
// // var my = "Sammmmmmmmeeee"
// // console.log(`my name is ${my}`)
// // console.log("he said \how are you\"")

// // let a = 5;
// // let b = 4;
// // let c = "6"

// // console.log(a,b)
// // console.log(a>b)
// // console.log  (a <b)
// // console.log  (a==b)
// // let result = (a>b)? "true": "false"
// // console.log  (result)
// // let noon = (a<b)? "true": "false"
// // console.log(noon)
// // let last = (a===b)? "true": "false"
// // console.log(last)
// // console.log  (a === 5 && a === c )
// // console.log (a === 5 || a === c )
// // console.log (! (a===c))


// // let oldstudents =["Grace", "indidi", "Precious", "Anthoney", "Tobi"]
// // let add = oldstudents.length
// // oldstudents[10] = "gbenga"
// // oldstudents[11] = "Ayama"
// // console.log(oldstudents);
// // console.log(oldstudents.fill("ola", add,oldstudents))


// // let numbers = [3,6,45,74,23,2,84,08,82,33]
// // numbers.sort(function(a,b){return a-b})
// // let userInput =Number (prompt("What Number do you want to remove "))
// // // console.log(numbers)
// // let finder = numbers.indexOf(userInput)

// // let result = finder < 0 ? "Not Found" : "You removed: " + numbers.splice(finder,1)

// // // console.log(numbers.splice(finder,1))
// // console.log(result)
// // console.log(numbers)


// let newStudents = ["Samuel", "Mr Ola", "Lekan", "joshua", "Yusuf", "Gedion", "Osazie"]
// let add = newStudents.length
// newStudents[9] = "Mr Sam"
// newStudents[8]= "Timoty"
// newStudents[7] = "Emmanuel"
// console.log(newStudents); console.log(add);
// console.log(newStudents.fill("Sammy",add,newStudents))


// //Multiple Array

// let namesOfFriends = [["Junior", "Davidson","Afroboy"], [2010, 2017, 2018] ]

// console.log(namesOfFriends[1][2])

// let names=["Junior", "Davidson","Afroboy"]

// for(i in names){
//     console.log(names[i])
// }

// //Objects in JavaScript

// let car ={
//     colour:"red",
//     model:"Camery",
//     wheels:4
// }

// // console.log(car.model)

// let userInput = prompt ("What features do you want to display")
// console.log(car[userInput])


// let person = {
//     name: "Samuel",
//     age:34,
//     height:5.8,
//     all :function(){
//         return this.name + "/n" + this.age
//     }
// }

// console.log(person.all())

// let allFriends = {
//     friends1:person,
//     friends:{
//         name: "tobby",
//         age:21,
//         height:6.0
//     }
// }

// // console.log(allFriends)
// console.log(allFriends.friends1.name)

// let myfriends = [person, {name:"Ayodeji", age:35, height:6.0}]
// console.log(myfriends[0].name)


// alert("hello Sam")

// let x = document.getElementById("user")
// let login = false
// let placeHolder = ""
// let result = login === true ? placeHolder = "true" : placeHolder = "false"
// x.innerHTML = result


// login ? alert("welcome") : alert("denied")


// let output = document.getElementById("user")



// let username = ["Samuel", "Gideion", "Osazie", "Ayama"]
// let userinput = prompt("Put in your name")
// let checker = username.indexOf(userinput)
// let result2 = checker




let output = document.getElementById("user")
// output.innerHTML = "Condition"
// let user = false
// output.innerHTML = "welcome"

// let allUser = ["edwin", "peter", "okon"]
// let Input = prompt("usernamr")

// if (allUser.indexOf(Input) > -1) {

//   output.innerHTML = "YOU ARE WELCOM"
// }
// else {
//   output.innerHTML = "not welcom"
// }




// let allUser = ["edwin", "peter", "okon"]
// let Input = prompt("usernamr")

// if (allUser.indexOf(Input) > -1) {

//   output.innerHTML = "YOU ARE WELCOM"
// }
// else {
//   output.innerHTML = "not welcom"
// }

// let morning = []
// let afternoon = []
// let evening = []

// let input = Number(prompt("username"))

// if (input >= 8 && input < 12) {
//   output.innerHTML = "Good morning"
// }
// else if (input >= 12 && input < 13) {
//   output.innerHTML = "Good Afternoon"
// }
// else if (input >= 14 && input < 16) {
//   output.innerHTML = "its dinner time"
// }
// else if (input >= 16 && input < 22) {
//   output.innerHTML = "go to sleep"
// }
// else {
//   let dd = prompt("your name")
//   output.innerHTML = `you should be sleeping ${dd}`
// }


// let user = prompt('Put in Your time')
// switch (Number(user)) {
//   case 8:
//     output.innerHTML = "Good Morning";
//     break;
//   case 12:
//     output.innerHTML = "Good AfterNoon";
//     break;
//   case 6:
//     output.innerHTML = "Good Evening";
//     break;
//   default:
//     output.innerHTML = "Time Does Not exist";
//     break;
// }


// let user = prompt('Put in Your Name')
// switch (user) {
//   case "John":
//     output.innerHTML = "Present... Welcome John";
//     break;
//   case "Sam":
//     output.innerHTML = "Present... Welcome Sam";
//     break;
//   case "Ola":
//     output.innerHTML = "Present... Welcome Ola";
//     break;
//   case "Gideon":
//     output.innerHTML = "Present... Welcome Gedion";
//     break;
//   case "Yusuf":
//     output.innerHTML = "Present... Welcome Yusuf";
//     break;
//   case "Ayo":
//     output.innerHTML = "Present... Welcome Ayo";
//     break;
//   default:
//     output.innerHTML = "Invalid Name";
//     break;
// }


// let user = prompt('Ask Any Question')
// let number = Math.floor(Math.random() * 5)
// switch (number) {
//   case 0:
//     output.innerHTML = "I Think You Sould Do A Reserch";
//     break;
//   case 1:
//     output.innerHTML = "Go On Google";
//     break;
//   case 2:
//     output.innerHTML = "Go to the Libuary";
//     break;
//   case 3:
//     output.innerHTML = "You Should Know That";
//     break;
//   case 4:
//     output.innerHTML = "Pray hard";
//     break;
//   // case "Ayo":
//   //   output.innerHTML = "Present... Welcome Ayo";
//   //   break;
//   default:
//     output.innerHTML = "Go on Bling To Check For that";
//     break;
// }

let user = prompt('Head Or Tail')
let input = user === "head" ? 1 : 0
console.log(input)
let computer = Math.floor(Math.random() * 2)
if (input === computer) {
  output.innerHTML = "Correct Answer"
} else {
  output.innerHTML = "Wrong Answer"
}

