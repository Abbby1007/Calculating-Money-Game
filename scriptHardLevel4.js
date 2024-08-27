// Hard DAY 4 (LEVEL 4)  CUSTOMER 1 (QUESTION 1) START
function hardLevel4Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 28.49;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Emily:</b> Thank you Math Wiz 🔢!!! <br><button onclick="hardLevel4Q2()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="hardLevel4Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// Hard  DAY 4 (LEVEL 4)  CUSTOMER 1 (QUESTION 1) END