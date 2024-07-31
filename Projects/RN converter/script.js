const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", checkUsersInput);

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkUsersInput();
  }
});

function decimalToRoman(num) {
    const decimals = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    const romans = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let result = "";
    let i = 12;
    while(num > 0)
    {
    let divisor = Math.floor(num / decimals[i]);
    num = num % decimals[i];
    while(divisor--)
    {
        result += (romans[i]);
    }
    i--;
    };
return result;
}

function checkUsersInput() {
  output.classList.remove("hidden");
  const inputInt = parseInt(number.value);
  if (isNaN(inputInt)){
    output.textContent = "Please enter a valid number";
    return;
  };
  if (inputInt <= 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  };
  if (inputInt >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  };
  output.textContent = decimalToRoman(inputInt);
  number.value = "";
}


