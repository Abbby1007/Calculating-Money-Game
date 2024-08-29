// Hard DAY 8 (LEVEL 8)  CUSTOMER 1 (QUESTION 1) START
function hardLevel8Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 24.19;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Fiona:</b> Thank you Math Wiz 🔢!!! <br><button onclick="hardLevel8Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel8Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// Hard  DAY 8 (LEVEL 8)  CUSTOMER 1 (QUESTION 1) END

// Hard DAY 8 (LEVEL 8)  CUSTOMER 2 (QUESTION 2) START

function hardLevel8Q2(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 23 pennies, 30 nickels, 38 dimes, 14 quarters, and 17 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 17.53;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="hardLevel8Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel8Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Hard  DAY 8 (LEVEL 8)  CUSTOMER 2 (QUESTION 2) END

// Hard DAY 8 (LEVEL 8)  CUSTOMER 3 (QUESTION 3) START

function hardLevel8Q3(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 3 (Question 3)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 10 pennies, 17 nickels, 13 dimes, 29 quarters, and 34 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 26.50;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="hardLevel8Q4()"> Customer 4 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel8Q4()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Hard  DAY 8 (LEVEL 8)  CUSTOMER 3 (QUESTION 3) END