// DAY 7 (LEVEL 7)  CUSTOMER 1 (QUESTION 1) START
function level7Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 15.71;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Isabella:</b> Thank you Math Wiz 🔢!!! <br><button onclick="level7Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="level7Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// DAY 7 (LEVEL 7)  CUSTOMER 1 (QUESTION 1) END

// DAY 7 (LEVEL 7)  CUSTOMER 2 (QUESTION 2) START
function level7Q2(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 23 pennies, 12 nickels, 11 dimes, 5 quarters, and 14 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 10.18;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level7Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level7Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 7 (LEVEL 7)  CUSTOMER 2 (QUESTION 2) END

// DAY 7 (LEVEL 7)  CUSTOMER 3 (QUESTION 3) START
function level7Q3(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 3 (Question 3)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 17 pennies, 2 nickels, 11 dimes, 20 quarters, and 5 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 8.87;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level7Q4()"> Customer 4 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level7Q4()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 7 (LEVEL 7)  CUSTOMER 3 (QUESTION 3) END

// DAY 7 (LEVEL 7)  CUSTOMER 4 (QUESTION 4) START
function level7Q4(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 4 (Question 4)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 12 pennies, 4 nickels, 10 dimes, 21 quarters, and 8 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 10.57;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level7Q5()"> Customer 5 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level7Q5()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 7 (LEVEL 7)  CUSTOMER 4 (QUESTION 4) END

// DAY 7 (LEVEL 7)  CUSTOMER 5 (QUESTION 5) START
function level7Q5(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 5 (Question 5)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 18 pennies, 14 nickels, 21 dimes, 14 quarters, and 1 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 6.98;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level7Q6()"> Customer 6 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level7Q6()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 7 (LEVEL 7)  CUSTOMER 5 (QUESTION 5) END

// DAY 7 (LEVEL 7)  CUSTOMER 6 (QUESTION 6) START
function level7Q6(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 6 (Question 6)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 13 pennies, 4 nickels, 5 dimes, 10 quarters, and 18 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 12.33;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level7Q7()"> Customer 7<button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level7Q7()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 7 (LEVEL 7)  CUSTOMER 6 (QUESTION 6) END

// DAY 7 (LEVEL 7)  CUSTOMER 7  (QUESTION 7 ) START
function level7Q7(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcomp6liment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 7 (Question 7)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 9 pennies, 5 nickels, 13 dimes, 7 quarters, and 22 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 14.39;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level7Q8()"> Customer 8 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level7Q8()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 7 (LEVEL 7)  CUSTOMER 7 (QUESTION 7) END

// DAY 7 (LEVEL 7)  CUSTOMER 8 (QUESTION 8) START
function level7Q8(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 8 (Question 8)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 4 pennies, 7 nickels, 17 dimes, 13 quarters, and  8 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 9.34;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level7Q9()"> Customer 9 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level7Q9()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 7 (LEVEL 7)  CUSTOMER 8 (QUESTION 8) END

// DAY 7 (LEVEL 7)  CUSTOMER 9 (QUESTION 9) START
function level7Q9(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 9 (Question 9)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 21 pennies, 8 nickels, 16 dimes, 22 quarters, and 17 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 16.21;
  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level7Q10()"> Customer 10<button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level7Q10()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 7 (LEVEL 7)  CUSTOMER 9 (QUESTION 9) END


// DAY 7 (LEVEL 7)  CUSTOMER 10 (QUESTION 10) START
function level7Q10(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 10 (Question 10)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 4 pennies, 7 nickels, 1 dimes, 17 quarters, and 16 fifty-cents... . How much money do I have? ` 

  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 12.74 ;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level7End()"> Finish Day 7 </button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 7 (LEVEL 7)  CUSTOMER 10 (QUESTION 10) END

function level7End(){
  document.getElementById("display").innerHTML=` <b> Boss :</b> Keep up the amazing Work!!!  <br> <a href="leveleeeeeeee.html"><button> Move on to Day 8 (Level 8) </button> </a>`
}