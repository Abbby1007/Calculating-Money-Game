// DAY 8 (LEVEL 8)  CUSTOMER 1 (QUESTION 1) START
function level8Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 6.98;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Isabella:</b> Thank you Math Wiz 🔢!!! <br><button onclick="level8Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="level8Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// DAY 8 (LEVEL 8)  CUSTOMER 1 (QUESTION 1) END

// DAY 8 (LEVEL 8)  CUSTOMER 2 (QUESTION 2) START
function level8Q2(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 22 pennies, 1 nickels, 19 dimes, 3 quarters, and 16 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 10.92;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level8Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level8Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 8 (LEVEL 8)  CUSTOMER 2 (QUESTION 2) END

// DAY 8 (LEVEL 8)  CUSTOMER 3 (QUESTION 3) START
function level8Q3(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 3 (Question 3)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 6 pennies, 15 nickels, 8 dimes, 3 quarters, and 10 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 7.36;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level8Q4()"> Customer 4 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level8Q4()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 8 (LEVEL 8)  CUSTOMER 3 (QUESTION 3) END

// DAY 8 (LEVEL 8)  CUSTOMER 4 (QUESTION 4) START
function level8Q4(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 4 (Question 4)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 14 pennies, 1 nickels, 21 dimes, 8 quarters, and 11 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 9.79;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level8Q5()"> Customer 5 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level8Q5()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 8 (LEVEL 8)  CUSTOMER 4 (QUESTION 4) END

// DAY 8 (LEVEL 8)  CUSTOMER 5 (QUESTION 5) START
function level8Q5(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 5 (Question 5)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 3 pennies, 12 nickels, 14 dimes, 22 quarters, and 18 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 16.53;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level8Q6()"> Customer 6 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level8Q6()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 8 (LEVEL 8)  CUSTOMER 5 (QUESTION 5) END

// DAY 8 (LEVEL 8)  CUSTOMER 6 (QUESTION 6) START
function level8Q6(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 6 (Question 6)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 21 pennies, 17 nickels, 9 dimes, 14 quarters, and 5 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 7.96;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level8Q7()"> Customer 7<button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level8Q7()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 8 (LEVEL 8)  CUSTOMER 6 (QUESTION 6) END

// DAY 8 (LEVEL 8)  CUSTOMER 7  (QUESTION 7 ) START
function level8Q7(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 7 (Question 7)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 18 pennies, 4 nickels, 12 dimes, 8 quarters, and 15 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 11.08;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level7Q8()"> Customer 8 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level7Q8()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 8 (LEVEL 8)  CUSTOMER 7 (QUESTION 7) END

// DAY 8 (LEVEL 8)  CUSTOMER 8 (QUESTION 8) START
function level8Q8(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 8 (Question 8)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 17 pennies, 13 nickels, 8 dimes, 7 quarters, and  20 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 13.37;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level8Q9()"> Customer 9 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level8Q9()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 8 (LEVEL 8)  CUSTOMER 8 (QUESTION 8) END

// DAY 8 (LEVEL 8)  CUSTOMER 9 (QUESTION 9) START
function level8Q9(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 9 (Question 9)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 19 pennies, 22 nickels, 11 dimes, 12 quarters, and 19 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 14.89;
  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level8Q10()"> Customer 10<button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level8Q10()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 8 (LEVEL 8)  CUSTOMER 9 (QUESTION 9) END

// DAY 8 (LEVEL 8)  CUSTOMER 10 (QUESTION 10) START
function level8Q10(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 10 (Question 10)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 12 pennies, 11 nickels, 17 dimes, 7 quarters, and 10 fifty-cents... . How much money do I have? ` 

  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 9.12 ;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level8End()"> Finish Day 8 </button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 8 (LEVEL 8)  CUSTOMER 10 (QUESTION 10) END

function level8End(){
  document.getElementById("display").innerHTML=` <b> Boss :</b> Keep up the amazing Work!!!  <br> <a href="levelnnnnnnnnn.html"><button> Move on to Day 9 (Level 9) </button> </a>`
}