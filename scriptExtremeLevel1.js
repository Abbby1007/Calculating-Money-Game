// Extreme DAY 1 (LEVEL 1)  CUSTOMER 1 (QUESTION 1) START
function extremeLevel1Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 35.58;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Grace:</b> Thank you Math Wiz 🔢!!! <br><button onclick="extremeLevel1Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="extremeLevel1Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// Extreme  DAY 1 (LEVEL 1)  CUSTOMER 1 (QUESTION 1) END

// Extreme DAY 1 (LEVEL 1)  CUSTOMER 2 (QUESTION 2) START

function extremeLevel1Q2(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 13 pennies, 24 nickels, 22 dimes, 23 quarters, and 30 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 24.28;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="extremeLevel1Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="extremeLevel1Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Extreme  DAY 1 (LEVEL 1)  CUSTOMER 2 (QUESTION 2) END

// Extreme DAY 1 (LEVEL 1)  CUSTOMER 2 (QUESTION 2) START

function extremeLevel1Q3(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 3 (Question 3)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 19 pennies, 25 nickels, 27 dimes, 37 quarters, and 47 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 36.89;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="extremeLevel1Q4()"> Customer 4 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="extremeLevel1Q4()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Extreme  DAY 1 (LEVEL 1)  CUSTOMER 3 (QUESTION 3) END