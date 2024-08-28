// Hard DAY 6 (LEVEL 6)  CUSTOMER 1 (QUESTION 1) START
function hardLevel6Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 30.59;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Jasmine:</b> Thank you Math Wiz 🔢!!! <br><button onclick="hardLevel6Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel6Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// Hard  DAY 6 (LEVEL 6)  CUSTOMER 1 (QUESTION 1) END

// Hard DAY 6 (LEVEL 6)  CUSTOMER 2 (QUESTION 2) START

function hardLevel6Q2(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 28 pennies, 25 nickels, 32 dimes, 35 quarters, and 10 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 18.48;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="hardLevel6Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel6Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Hard  DAY 6 (LEVEL 6)  CUSTOMER 2 (QUESTION 2) END

// Hard DAY 6 (LEVEL 6)  CUSTOMER 3 (QUESTION 3) START

function hardLevel6Q3(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 3 (Question 3)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 19 pennies, 24 nickels, 11 dimes, 11 quarters, and 40 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 25.24;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="hardLevel6Q4()"> Customer 4 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel6Q4()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Hard  DAY 6 (LEVEL 6)  CUSTOMER 3 (QUESTION 3) END