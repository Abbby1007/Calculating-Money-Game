// Hard DAY 2 (LEVEL 2)  CUSTOMER 1 (QUESTION 1) START
function hardLevel2Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 23.01;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Desiree:</b> Thank you Math Wiz 🔢!!! <br><button onclick="hardLevel2Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel2Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// Hard  DAY 2 (LEVEL 2)  CUSTOMER 1 (QUESTION 1) END

// Hard DAY 2 (LEVEL 2)  CUSTOMER 2 (QUESTION 2) START

function hardLevel2Q2(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 28 pennies, 34 nickels, 17 dimes, 31 quarters, and 40 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 31.43;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="hardLevel2Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel2Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Hard  DAY 2 (LEVEL 2)  CUSTOMER 2 (QUESTION 2) END

// Hard DAY 2 (LEVEL 2)  CUSTOMER 3 (QUESTION 3) START

function hardLevel2Q3(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 3 (Question 3)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 39 pennies, 14 nickels, 29 dimes, 32 quarters, and 23 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 23.49;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="hardLevel2Q4()"> Customer 4 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel2Q4()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Hard  Day 2 (LEVEL 2)  CUSTOMER 3 (QUESTION 3) END