// DAY 10 (LEVEL 10)  CUSTOMER 1 (QUESTION 1) START
function level10Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 13.35;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Shelby:</b> Thank you Math Wiz 🔢!!! <br><button onclick="level10Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="level10Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// DAY 10 (LEVEL 10)  CUSTOMER 1 (QUESTION 1) END

// DAY 10 (LEVEL 10)  CUSTOMER 2 (QUESTION 2) START
function level10Q2(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 8 pennies, 19 nickels, 12 dimes, 23 quarters, and 12 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 13.98;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level10Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level10Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 10 (LEVEL 10)  CUSTOMER 2 (QUESTION 2) END

// DAY 10 (LEVEL 10)  CUSTOMER 3 (QUESTION 3) START
function level10Q3(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 3 (Question 3)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 23 pennies, 16 nickels, 13 dimes, 20 quarters, and 22 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 18.33;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level10Q4()"> Customer 4 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level10Q4()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 10 (LEVEL 10)  CUSTOMER 3 (QUESTION 3) END

// DAY 10 (LEVEL 10)  CUSTOMER 4 (QUESTION 4) START
function level10Q4(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 4 (Question 4)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 17 pennies, 20 nickels, 9 dimes, 18 quarters, and 23 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 12.22;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level10Q5()"> Customer 5 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level10Q5()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 10 (LEVEL 10)  CUSTOMER 4 (QUESTION 4) END

// DAY 10 (LEVEL 10)  CUSTOMER 5 (QUESTION 5) START
function level10Q5(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 5 (Question 5)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 13 pennies, 9 nickels, 14 dimes, 19 quarters, and 20 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 16.73;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level10Q6()"> Customer 6 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level10Q6()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 10 (LEVEL 10)  CUSTOMER 5 (QUESTION 5) END

// DAY 10 (LEVEL 10)  CUSTOMER 6 (QUESTION 6) START
function level10Q6(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 6 (Question 6)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 27 pennies, 24 nickels, 17 dimes, 9 quarters, and 23 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 16.92;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level10Q7()"> Customer 7<button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level10Q7()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 10 (LEVEL 10)  CUSTOMER 6 (QUESTION 6) END

// DAY 10 (LEVEL 10)  CUSTOMER 7  (QUESTION 7 ) START
function level10Q7(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 7 (Question 7)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 8 pennies, 11 nickels, 14 dimes, 21 quarters, and 19 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 16.78;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level10Q8()"> Customer 8 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level10Q8()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 10 (LEVEL 10)  CUSTOMER 7 (QUESTION 7) END

// DAY 10 (LEVEL 10)  CUSTOMER 8 (QUESTION 8) START
function level10Q8(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 8 (Question 8)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 20 pennies, 26 nickels, 20 dimes, 12 quarters, and  22 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 17.50;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level10Q9()"> Customer 9 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level10Q9()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 10 (LEVEL 10)  CUSTOMER 8 (QUESTION 8) END

// DAY 10 (LEVEL 10)  CUSTOMER 9 (QUESTION 9) START
function level10Q9(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 9 (Question 9)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 23 pennies, 10 nickels, 19 dimes, 17 quarters, and 15 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 14.38;
  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level10Q10()"> Customer 10<button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level10Q10()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 10 (LEVEL 10)  CUSTOMER 9 (QUESTION 9) END

// DAY 10 (LEVEL 10)  CUSTOMER 10 (QUESTION 10) START
function level10Q10(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 10 (Question 10)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 16 pennies, 10 nickels, 13 dimes, 21 quarters, and 28 fifty-cents... . How much money do I have? ` 

  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 21.21 ;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level10End()"> Finish Day 10 </button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 10 (LEVEL 10)  CUSTOMER 10 (QUESTION 10) END

function level10End(){
  document.getElementById("display").innerHTML=` <b> Boss :</b> One more day until your Promotion  <br> <a href="easyModeComplete.html"><button> Complete Easy Mode  </button> </a>`
}