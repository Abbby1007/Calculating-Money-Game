// DAY 5 (LEVEL 5)  CUSTOMER 1 (QUESTION 1) START
function level5Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 11.47;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Keana:</b> Wow You're a SUPERSTAR ⭐!!!! <br><button onclick="level5Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="level5Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// DAY 5 (LEVEL 5)  CUSTOMER 1 (QUESTION 1) END

// DAY 5 (LEVEL 5)  CUSTOMER 2 (QUESTION 2) START
function level5Q2(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 16 pennies, 18 nickels, 2 dimes, 15 quarters, and 9 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 9.51;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level5Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level5Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 5 (LEVEL 5)  CUSTOMER 2 (QUESTION 2) END

// DAY 5 (LEVEL 5)  CUSTOMER 3 (QUESTION 3) START
function level5Q3(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 3 (Question 3)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 6 pennies, 8 nickels, 4 dimes, 5 quarters, and 18 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 11.11;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level5Q4()"> Customer 4 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level5Q4()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 5 (LEVEL 5)  CUSTOMER 3 (QUESTION 3) END

// DAY 5 (LEVEL 5)  CUSTOMER 4 (QUESTION 4) START
function level5Q4(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 4 (Question 4)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 6 pennies, 14 nickels, 5 dimes, 7 quarters, and 9 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 7.51;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level5Q5()"> Customer 5 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level5Q5()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 5 (LEVEL 5)  CUSTOMER 4 (QUESTION 4) END

// DAY 5 (LEVEL 5)  CUSTOMER 5 (QUESTION 5) START
function level5Q5(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 5 (Question 5)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 4 pennies, 3 nickels, 19 dimes, 6 quarters, and 16 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 11.59;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level5Q6()"> Customer 6 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level5Q6()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 5 (LEVEL 5)  CUSTOMER 5 (QUESTION 5) END

// DAY 5 (LEVEL 5)  CUSTOMER 6 (QUESTION 6) START
function level5Q6(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 6 (Question 6)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 12 pennies, 9 nickels, 3 dimes, 15 quarters, and 7 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 8.12;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level5Q7()"> Customer 7 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level5Q7()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 5 (LEVEL 5)  CUSTOMER 6 (QUESTION 6) END

// DAY 5 (LEVEL 5)  CUSTOMER 7 (QUESTION 7) START
function level5Q7(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 7 (Question 7)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 11 pennies, 8 nickels, 16 dimes, 15 quarters, and 4 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 7.86;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level5Q8()"> Customer 8 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level5Q8()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 5 (LEVEL 5)  CUSTOMER 7 (QUESTION 7) END

// DAY 5 (LEVEL 5)  CUSTOMER 8 (QUESTION 8) START
function level5Q8(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 8 (Question 8)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 10 pennies, 7 nickels, 17 dimes, 20 quarters, and 4 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 9.15;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level5Q9()"> Customer 9 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level5Q9()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 5 (LEVEL 5)  CUSTOMER 8 (QUESTION 8) END

// DAY 5 (LEVEL 5)  CUSTOMER 9 (QUESTION 9) START
function level5Q9(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 9 (Question 9)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 1 pennies, 5 nickels, 13 dimes, 9 quarters, and 17 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 12.31;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level5Q10()"> Customer 10 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level5Q10()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 5 (LEVEL 5)  CUSTOMER 9 (QUESTION 9) END

// DAY 5 (LEVEL 5)  CUSTOMER 10 (QUESTION 10) START
function level5Q10(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 10 (Question 10)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 3 pennies, 7 nickels, 13 dimes, 9 quarters, and 20 fifty-cents... . How much money do I have? ` 

  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 13.93 ;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level5End()"> Finish Day 5 </button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 5 (LEVEL 5)  CUSTOMER 10 (QUESTION 10) END

function level5End(){
  document.getElementById("display").innerHTML=` <b> Boss :</b> Nice Work for Today!!!!  <br> <a href="levelssssss.html"><button> Move on to Day 6 (Level 6) </button> </a>`
}