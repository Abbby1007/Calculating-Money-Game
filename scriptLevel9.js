// DAY 9 (LEVEL 9)  CUSTOMER 1 (QUESTION 1) START
function level9Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 16.32;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Isabella:</b> Thank you Math Wiz 🔢!!! <br><button onclick="level9Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="level9Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// DAY 9 (LEVEL 9)  CUSTOMER 1 (QUESTION 1) END

// DAY 9 (LEVEL 9)  CUSTOMER 2 (QUESTION 2) START
function level9Q2(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 5 pennies, 20 nickels, 8 dimes, 12 quarters, and 25 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 17.35;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level9Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level9Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 9 (LEVEL 9)  CUSTOMER 2 (QUESTION 2) END

// DAY 9 (LEVEL 9)  CUSTOMER 3 (QUESTION 3) START
function level9Q3(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 3 (Question 3)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 12 pennies, 18 nickels, 25 dimes, 22 quarters, and 1 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 9.52;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level9Q4()"> Customer 4 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level9Q4()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 9 (LEVEL 9)  CUSTOMER 3 (QUESTION 3) END