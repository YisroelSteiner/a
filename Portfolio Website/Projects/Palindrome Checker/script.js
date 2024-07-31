const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkBtn.addEventListener("click", launch);
userInput.addEventListener("keydown", (e) =>{  if (e.key === "Enter") {
    e.preventDefault();
    launch();
  }
})

function launch() {
    isPalindrome(userInput.value);
}

function isPalindrome(input) {
    if (input === null || input === "")   {
        alert("Please enter a word or a sentence");
        return
    };
    let pureInput = (input.split("").filter((char) => !(char.match(/^[A-Za-z0-9]*$/
) == null)).join("")).toLowerCase();
    if (pureInput.split("").reverse().join("") === pureInput){
     result.innerHTML = `<p><strong>${input}</strong> is a palindrome!</p>`;
     result.classList.remove("red");
     result.classList.add("green");
    } else {
     result.innerHTML = `<p><strong>${input}</strong> is not a palindrome</p>`;
     result.classList.remove("green");
     result.classList.add("red");
    }
    userInput.value = "";
}

