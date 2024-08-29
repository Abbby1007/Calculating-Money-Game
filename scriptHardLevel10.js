// Hard DAY 10 (LEVEL 10)  CUSTOMER 1 (QUESTION 1) START
function hardLevel10Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 26.92;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Sarah:</b> Thank you Math Wiz 🔢!!! <br><button onclick="hardLevel10Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel10Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// Hard  DAY 10 (LEVEL 10)  CUSTOMER 1 (QUESTION 1) END

// Hard DAY 9 (LEVEL 9)  CUSTOMER 2 (QUESTION 2) START

function hardLevel9Q2(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 15 pennies, 41 nickels, 22 dimes, 18 quarters, and 45 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 31.40;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="hardLevel9Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel9Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Hard  DAY 10 (LEVEL 10)  CUSTOMER 2 (QUESTION 2) END

// Hard DAY 10 (LEVEL 10)  CUSTOMER 3 (QUESTION 3) START

function hardLevel10Q3(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 3 (Question 3)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 19 pennies, 32 nickels, 24 dimes, 25 quarters, and 21 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 20.94;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="hardLevel10Q4()"> Customer 4 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel10Q4()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Hard  DAY 10 (LEVEL 10)  CUSTOMER 3 (QUESTION 3) END