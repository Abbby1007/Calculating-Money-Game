
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