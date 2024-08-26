// Hard DAY 1 (LEVEL 1)  CUSTOMER 1 (QUESTION 1) START
function hardLevel1Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 22.03;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Sophia:</b> Thank you Math Wiz 🔢!!! <br><button onclick="hardLevel1Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel1Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// Hard  DAY 1 (LEVEL 1)  CUSTOMER 1 (QUESTION 1) END

// Hard DAY 1 (LEVEL 1)  CUSTOMER 2 (QUESTION 2) START

function hardLevel1Q2(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 18 pennies, 25 nickels, 35 dimes, 22 quarters, and 18 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 19.43;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="hardLevel1Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel1Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Hard  DAY 1 (LEVEL 1)  CUSTOMER 2 (QUESTION 2) END

// Hard DAY 1 (LEVEL 1)  CUSTOMER 3 (QUESTION 3) START

function hardLevel1Q3(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 3 (Question 3)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 32 pennies, 27 nickels, 14 dimes, 18 quarters, and 13 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 14.07;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="hardLevel1Q4()"> Customer 4 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel1Q4()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Hard  Day 1 (LEVEL 1)  CUSTOMER 3 (QUESTION 3) END

// Hard DAY 1 (LEVEL 1)  CUSTOMER 4 (QUESTION 4) START

function hardLevel1Q4(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 4 (Question 4)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 18 pennies, 33 nickels, 28 dimes, 37 quarters, and 20 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 23.88;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="hardLevel1Q5()"> Customer 5 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel1Q5()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Hard  Day 1 (LEVEL 1)  CUSTOMER 4 (QUESTION 4) END