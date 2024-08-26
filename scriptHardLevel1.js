// Hard DAY 1 (LEVEL 1)  CUSTOMER 1 (QUESTION 1) START
function hardLevel1Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 22.03;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Sophia:</b> Thank you Math Wiz 🔢!!! <br><button onclick="hardLevel1Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel1Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// Hard  DAY 1 (LEVEL 1)  CUSTOMER 1 (QUESTION 1) END