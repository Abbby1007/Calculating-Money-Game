// Extreme DAY 4 (LEVEL 4)  CUSTOMER 1 (QUESTION 1) START
function extremeLevel4Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 36.70;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Roberta:</b> Thank you Math Wiz 🔢!!! <br><button onclick="extremeLevel4Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="extremeLevel4Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// Extreme  DAY 4 (LEVEL 4)  CUSTOMER 1 (QUESTION 1) END

// Extreme DAY 4 (LEVEL 4)  CUSTOMER 2 (QUESTION 2) START

function extremeLevel4Q2(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 37 pennies, 31 nickels, 38 dimes, 29 quarters, and 40 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 32.97;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="extremeLevel4Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="extremeLevel4Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Extreme  DAY 4 (LEVEL 4)  CUSTOMER 2 (QUESTION 2) END

// Extreme DAY 4 (LEVEL 4)  CUSTOMER 3 (QUESTION 3) START

function extremeLevel4Q3(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 3 (Question 3)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 20 pennies, 39 nickels, 16 dimes, 18 quarters, and 45 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 30.75;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="extremeLevel4Q4()"> Customer 4 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="extremeLevel4Q4()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Extreme  DAY 4 (LEVEL 4)  CUSTOMER 3 (QUESTION 3) END