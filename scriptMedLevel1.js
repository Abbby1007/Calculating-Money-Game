// DAY 1 (LEVEL 1)  CUSTOMER 1 (QUESTION 1) START
function medLevel1Q1(){

  var input = document.getElementById("answerInput").value;

  console.log(input)
  var correct = 13.35;

if(input == correct){
  document.getElementById("display").innerHTML=` <b> Diego:</b> Thank you Math Wiz 🔢!!! <br><button onclick="medLevel1Q1()"> Customer 2 </button>`
  document.getElementById("submitButton").innerHTML = `<button onclick="medLevel1Q2()"> Submit</button>`

}
  else {
    document.getElementById("display").innerHTML=`Try Again`
  }

}
// DAY 10 (LEVEL 10)  CUSTOMER 1 (QUESTION 1) END

function medLevel1Q2(){
  
}