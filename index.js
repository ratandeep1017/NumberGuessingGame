const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;
document.getElementById("submitButton").onclick = function () {
  let guess = document.getElementById("guessField").value;
  guesses++;
  if (guess == answer) {
    document.getElementById("count").innerHTML = "Total Guesses : " + guesses;
  } else if (guess < answer) {
    alert("Too small!");
  } else {
    alert("Too large!");
  }
};
//document.write(answer); //THE ANSWER