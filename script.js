
// LEVEL 1 QUESTION 1 START
function level1Q1(){

  var input = document.getElementById("answerInput").value;
  
  console.log(input)
  var correct = 5.6 ;
  
if(input == correct){
  document.getElementById("display").innerHTML=` <b> Howard:</b> Thank you!!!! ❤️ <br><button onclick="level1Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="level1Q2()"> Submit</button>`
  
}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }
  
}
// LEVEL 1 QUESTION 1 END
// LEVEL 1 QUESTION 2 START
function level1Q2(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 2 pennies, 1 nickels, 8 dimes, 6 quarters, and 3 fifty-cents... . How much money do I have? ` 


  
  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 3.87;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level1Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level1Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// LEVEL 1 QUESTION 2 END

// LEVEL 1 QUESTION 3 START
function level1Q3(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  
  // Question title
  document.getElementById("questionTitle").innerHTML= `Customer 3 (Question 3)`
  // Question
  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 5 pennies, 4 nickels, 6 dimes, 3 quarters, and 2 fifty-cents... . How much money do I have?` 

  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 2.6;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level1Q4()"> Customer 4 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level1Q4()"> Submit</button>`
  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// LEVEL 1 QUESTION 3 END

// LEVEL 1 QUESTION 4 START
function level1Q4(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];

  // Question title
  document.getElementById("questionTitle").innerHTML= `Customer 4 (Question 4)`
  
  // Question
  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 10 pennies, 4 nickels, 9 dimes, 3 quarters, and 8 fifty-cents... . How much money do I have?` 

  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 5.95;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level1Q5()"> Customer 5 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level1Q5()"> Submit</button>`
  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// LEVEL 1 QUESTION 4 END

// LEVEL 1 QUESTION 5 START

function level1Q5(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];

  // Question title
  document.getElementById("questionTitle").innerHTML= `Customer 5 (Question 5)`

  // Question
  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 7 pennies, 6 nickels, 8 dimes, 5 quarters, and 9 fifty-cents... . How much money do I have?` 

  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 6.92;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level1Q6()"> Customer 6 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level1Q6()"> Submit</button>`
  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// LEVEL 1 QUESTION 5 END


// LEVEL 1 QUESTION 6 START

function level1Q6(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];

  // Question title
  document.getElementById("questionTitle").innerHTML= `Customer 6 (Question 6)`

  // Question
  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 6 pennies, 7 nickels, 3 dimes, 8 quarters, and 7 fifty-cents... . How much money do I have?` 

  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 6.21;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level1Q7()"> Customer 7 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level1Q7()"> Submit</button>`
  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// LEVEL 1 QUESTION 6 END

// LEVEL 1 QUESTION 7 START

function level1Q7(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];

  // Question title
  document.getElementById("questionTitle").innerHTML= `Customer 7 (Question 7)`

  // Question
  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 2 pennies, 9 nickels, 7 dimes, 3 quarters, and 8 fifty-cents... . How much money do I have?` 

  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 5.92;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level1Q8()"> Customer 8 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level1Q8()"> Submit</button>`
  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// LEVEL 1 QUESTION 7 END

// LEVEL 1 QUESTION 8 START

function level1Q8(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];

  // Question title
  document.getElementById("questionTitle").innerHTML= `Customer 8 (Question 8)`

  // Question
  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 6 pennies, 8 nickels, 4 dimes, 5 quarters, and 2 fifty-cents... . How much money do I have?` 

  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 3.11;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level1Q9()"> Customer 9 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level1Q9()"> Submit</button>`
  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// LEVEL 1 QUESTION 8 END

// LEVEL 1 QUESTION 9 START

function level1Q9(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];

  // Question title
  document.getElementById("questionTitle").innerHTML= `Customer 9 (Question 9)`

  // Question
  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 9 pennies, 2 nickels, 10 dimes, 6 quarters, and 9 fifty-cents... . How much money do I have?` 

  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 7.19;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level1Q10()"> Customer 10 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level1Q10()"> Submit</button>`
  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// LEVEL 1 QUESTION 9 END

// LEVEL 1 QUESTION 10 START

function level1Q10(){
  // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
  const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];

  // Question title
  document.getElementById("questionTitle").innerHTML= `Customer 10 (Question 10)`

  // Question
  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 5 pennies, 6 nickels, 8 dimes, 10 quarters, and 8 fifty-cents... . How much money do I have?` 

  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 7.65;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level1End()"> Finish Day 1 </button>`
  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// LEVEL 1 QUESTION 10 END

function level1End(){
   document.getElementById("display").innerHTML=` <b> Boss :</b> You did a great job today, get some rest because, tommorow is gonna be alot more challenging <br> <a href="level,,.html"><button> Day 2 (Level 2) </button> </a>`
}