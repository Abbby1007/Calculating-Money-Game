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
  
}

// DAY 5 (LEVEL 5)  CUSTOMER 4 (QUESTION 4) END
