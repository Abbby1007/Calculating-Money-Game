// Medium DAY 5 (LEVEL 5)  CUSTOMER 1 (QUESTION 1) START
function medLevel5Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 29.94;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Shayla:</b> Thank you Math Wiz 🔢!!! <br><button onclick="medLevel5Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="medLevel5Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// Medium  DAY 5 (LEVEL 5)  CUSTOMER 1 (QUESTION 1) END

// Medium DAY 5 (LEVEL 5)  CUSTOMER 2 (QUESTION 2) START

function medLevel5Q2(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 15 pennies, 32 nickels, 17 dimes, 25 quarters, and 26 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 22.70;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="medLevel5Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="medLevel5Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Medium  DAY 5 (LEVEL 5)  CUSTOMER 2 (QUESTION 2) END

// Medium DAY 5 (LEVEL 5)  CUSTOMER 3 (QUESTION 3) START

function medLevel5Q3(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 3 (Question 3)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 13 pennies, 28 nickels, 20 dimes, 15 quarters, and 19 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 16.78;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="medLevel5Q4()"> Customer 4 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="medLevel5Q4()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// Medium  DAY 5 (LEVEL 5)  CUSTOMER 3 (QUESTION 3) END