// DAY 6 (LEVEL 6)  CUSTOMER 1 (QUESTION 1) START
function level6Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 6.88;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Emma:</b> Wow You're a SUPERSTAR ⭐!!!! <br><button onclick="level6Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="level6Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// DAY 6 (LEVEL 6)  CUSTOMER 6 (QUESTION 1) END

// DAY 6 (LEVEL 6)  CUSTOMER 2 (QUESTION 2) START
function level6Q2(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 20 pennies, 10 nickels, 4 dimes, 21 quarters, and 11 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 11.85;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level6Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level6Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 6 (LEVEL 6)  CUSTOMER 2 (QUESTION 2) END

// DAY 6 (LEVEL 6)  CUSTOMER 3 (QUESTION 3) START
function level6Q3(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 3 (Question 3)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 6 pennies, 14 nickels, 6 dimes, 16 quarters, and 8 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 9.36;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level6Q4()"> Customer 4 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level6Q4()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 6 (LEVEL 6)  CUSTOMER 3 (QUESTION 3) END