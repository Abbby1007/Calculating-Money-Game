// Hard DAY 5 (LEVEL 5)  CUSTOMER 1 (QUESTION 1) START
function hardLevel5Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 26.25;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Riley:</b> Thank you Math Wiz 🔢!!! <br><button onclick="hardLevel5Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel5Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// Hard  DAY 5 (LEVEL 5)  CUSTOMER 1 (QUESTION 1) END