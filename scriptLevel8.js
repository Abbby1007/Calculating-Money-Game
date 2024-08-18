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
