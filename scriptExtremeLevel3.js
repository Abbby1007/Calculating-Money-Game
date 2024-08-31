// Extreme DAY 3 (LEVEL 3)  CUSTOMER 1 (QUESTION 1) START
function extremeLevel3Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 22.04;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Jane:</b> Thank you Math Wiz 🔢!!! <br><button onclick="extremeLevel3Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="extremeLevel3Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// Extreme  DAY 3 (LEVEL 3)  CUSTOMER 1 (QUESTION 1) END

// Extreme DAY 3 (LEVEL 3)  CUSTOMER 2 (QUESTION 2) START

function extremeLevel3Q2(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 49 pennies, 19 nickels, 27 dimes, 22 quarters, and 15 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 17.14;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="extremeLevel3Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="extremeLevel3Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Extreme  DAY 3 (LEVEL 3)  CUSTOMER 2 (QUESTION 2) END

// Extreme DAY 3 (LEVEL 3)  CUSTOMER 3 (QUESTION 3) START

function extremeLevel3Q3(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 3 (Question 3)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 30 pennies, 42 nickels, 48 dimes, 41 quarters, and 37 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 35.95;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="extremeLevel3Q4()"> Customer 4 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="extremeLevel3Q4()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Extreme  DAY 3 (LEVEL 3)  CUSTOMER 3 (QUESTION 3) END