// Medium DAY 1 (LEVEL 1)  CUSTOMER 1 (QUESTION 1) START
function medLevel1Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 28.58;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Diego:</b> Thank you Math Wiz 🔢!!! <br><button onclick="medLevel1Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="medLevel1Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// Medium  DAY 1 (LEVEL 1)  CUSTOMER 1 (QUESTION 1) END

// Medium DAY 1 (LEVEL 1)  CUSTOMER 2 (QUESTION 2) START

function medLevel1Q2(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 26 pennies, 27 nickels, 17 dimes, 16 quarters, and 25 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 19.81;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="medLevel1Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="medLevel1Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Medium  DAY 1 (LEVEL 1)  CUSTOMER 2 (QUESTION 2) END

// Medium DAY 1 (LEVEL 1)  CUSTOMER 3 (QUESTION 3) START

function medLevel1Q3(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 3 (Question 3)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 20 pennies, 32 nickels, 21 dimes, 29 quarters, and 27 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 19.81;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="medLevel1Q4()"> Customer 4 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="medLevel1Q4()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Medium  DAY 1 (LEVEL 1)  CUSTOMER 3 (QUESTION 3) END