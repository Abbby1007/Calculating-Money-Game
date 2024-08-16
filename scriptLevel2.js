// DAY 2 (LEVEL 2)  CUSTOMER 1 (QUESTION 1) START
function level2Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 6.52 ;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Adriyel:</b> I appreaciate this❤️!!!!❤️ <br><button onclick="level1Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="level2Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// DAY 2 (LEVEL 2)  CUSTOMER 1 (QUESTION 1) END

// DAY 2 (LEVEL 2)  CUSTOMER 2 (QUESTION 2) START
function level1Q2(){
 // Names
  const name = ["Stanley", "Trevor", "Eva", "Poppy","Darren","Jake","Selena","Ariana","Leonard","Troy","Makenzie","Logan","Emma","Abigail","Keana","Isabella","Skyla","Zachary","Jude","Hailey","Emily","Kayla","Jessica","Carol","Alex","Noah","Sadie","Michael","Julia","Sarah","Ashley","Madison","Howard","Sheryl","Adriyel"]
   const randomName = name[Math.floor(Math.random() * name.length)];

  //Compliments
   const compliments = ["Wow You're a SUPERSTAR ⭐!!!!", "Your Awesome ❤️!!!!","Thank you Math Wiz 🔢!!!","Thank you ❤️!!!!", " I appreaciate this❤️!!!!❤️"];
   const randomcompliment = compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("questionTitle").innerHTML= `Customer 2 (Question 2)`

  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have 13 pennies, 6 nickels, 13 dimes, 11 quarters, and 15 fifty-cents... . How much money do I have? ` 



  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 11.98;

  if(input == correct){
     document.getElementById("display").innerHTML=` <b> ${randomName}:</b> ${randomcompliment} <br><button onclick="level2Q3()"> Customer 3 </button>`
    document.getElementById("submitButton").innerHTML = `<button onclick="level1Q3()"> Submit</button>`

  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// DAY 2 (LEVEL 2)  CUSTOMER 2 (QUESTION 2) END