// DAY 10 (LEVEL 10)  CUSTOMER 1 (QUESTION 1) START
function level10Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 16.32;

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