
// LEVEL 1 QUESTION 1 START
function level1Q1(){

  var input = document.getElementById("answerInput").value;
  
  console.log(input)
  var correct = 'hello';
  
if(input == correct){
  document.getElementById("display").innerHTML=` <b> Frank:</b> Thank you <br><button onclick="level1Q2()"> Question2 </button>`
}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }
  
}
// LEVEL 1 QUESTION 1 END
// LEVEL 1 QUESTION 2 START
function level1Q2(){
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];
  document.getElementById("questionTitle").innerHTML= `Question 2`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 2 pennies, 1 nickels, 8 dimes, 6 quarters, and 3 fifty-cents... . How much money do I have?` 
  
  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 'hello';

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> Wow You're a SUPERSTAR ⭐ !!!!<br><button onclick="level1Q3()"> Question3 </button>`
  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// LEVEL 1 QUESTION 2 END

// LEVEL 1 QUESTION 3 START
function level1Q3(){
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];
  // Question title
  document.getElementById("questionTitle").innerHTML= `Question 3`
  // Question
  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 5 pennies, 4 nickels, 6 dimes, 3 quarters, and 2 fifty-cents... . How much money do I have?` 

  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 'hello';

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> Your Awesome!!!! <br><button onclick="level1Q4()"> Question4 </button>`
  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// LEVEL 1 QUESTION 3 END

// LEVEL 1 QUESTION 4 START
function level1Q4(){
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  // Question title
  document.getElementById("questionTitle").innerHTML= `Question 4`
  
  // Question
  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 10 pennies, 4 nickels, 9 dimes, 3 quarters, and 8 fifty-cents... . How much money do I have?` 

  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 'hello';

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> Thank you Math Wiz <br><button onclick="level1Q5()"> Question5 </button>`
  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// LEVEL 1 QUESTION 4 END

// LEVEL 1 QUESTION 5 START

function level1Q5(){
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  // Question title
  document.getElementById("questionTitle").innerHTML= `Question 5`

  // Question
  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 7 pennies, 6 nickels, 8 dimes, 5 quarters, and 9 fifty-cents... . How much money do I have?` 

  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 'hello';

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> Thank you Math Wiz <br><button onclick="level1Q6()"> Question6 </button>`
  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// LEVEL 1 QUESTION 5 END


// LEVEL 1 QUESTION 6 START

function level1Q6(){
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  // Question title
  document.getElementById("questionTitle").innerHTML= `Question 6`

  // Question
  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have _ pennies, _ nickels, _ dimes, _ quarters, and _ fifty-cents... . How much money do I have?` 

  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 'hello';

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> Thank you Math Wiz <br><button onclick="level1Q7()"> Question7 </button>`
  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// LEVEL 1 QUESTION 6 END