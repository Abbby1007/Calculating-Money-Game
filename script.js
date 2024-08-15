
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
  
  document.getElementById("question").innerHTML= `<b> ${randomName} </b> I have _ pennies, _ nickels, _ dimes, _quarters, and _ fifty-cents... . How much money do I have?` 
  
  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 'hello';

  if(input == correct){
    document.getElementById("display").innerHTML=`Hello`
  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}

// LEVEL 1 QUESTION 2 END

// LEVEL 1 QUESTION 3 START
function level1Q3(){
  document.getElementById("question").textContent = `Question 2` 

  var input = document.getElementById("answerInput").value;

    console.log(input)
    var correct = 'hello';

  if(input == correct){
    document.getElementById("display").innerHTML=`Hello`
  }
    else {
      document.getElementById("display").innerHTML=`Try Again`
    }
}
// LEVEL 1 QUESTION 3 END