// DAY 3 (LEVEL 3)  CUSTOMER 1 (QUESTION 1) START
function level3Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 11.32;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Howard:</b> Wow You're a SUPERSTAR ⭐!!!! <br><button onclick="level3Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="level3Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// DAY 3 (LEVEL 3)  CUSTOMER 1 (QUESTION 1) END

// DAY 3 (LEVEL 3)  CUSTOMER 2 (QUESTION 2) START
function level3Q2(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have _ pennies, _ nickels, _ dimes, _ quarters, and _ fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = "hello";

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level3Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level3Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 3 (LEVEL 3)  CUSTOMER 2 (QUESTION 2) END

// DAY 3 (LEVEL 3)  CUSTOMER 3 (QUESTION 3) START
function level3Q3(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 3 (Question 3)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have _ pennies, _ nickels, _ dimes, _ quarters, and _ fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = "hello";

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level3Q4()"> Customer 4 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level3Q4()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 3 (LEVEL 3)  CUSTOMER 3 (QUESTION 3) END