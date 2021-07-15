const inputValue = document.querySelector(".input-value");
const outputValue = document.querySelector(".output-value");
function getInputValue() {
  return inputValue.innerText;
}
function printInputValue(num) {
  inputValue.innerText = num;
}
function getOutputValue() {
  return outputValue.innerText;
}
function printOutputValue(num) {
  if (num == "") {
    outputValue.innerText = num;
  } else {
    outputValue.innerText = getFormat(num);
  }
}
function getFormat(num) {
  if (num == "-") {
    return "";
  }
  var number = Number(num);
  var result = number.toLocaleString("en");
  return result;
}
printOutputValue("34875");
console.log(getOutputValue());
function noFormatNumber(num) {
  return Number(num.replace(/,/g, ""));
}
// console.log(noFormatNumber(getOutputValue()));
var operator = document.getElementsByClassName("operator");
// console.log(operator.length);
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    // console.log("You clicked :" + this.id);
    if (this.id == "clear") {
      printInputValue("");
      printOutputValue("");
    } else if (this.id == "delete") {
      var output = noFormatNumber(getOutputValue()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutputValue(output);
      }
    } else {
      var output = getOutputValue();
      var input = getInputValue();
      if (output == "" && input != "") {
        if (isNaN(input[input.length - 1])) {
          input = input.substr(0, input.length - 1);
        }
      }
      if (output != "" || input != "") {
        output = output == "" ? output : noFormatNumber(output);
        input = input + output;
        if (this.id == "=") {
          var res = eval(input);
          printOutputValue(res);
          printInputValue(input);
        } else {
          input = input + this.id;
          printInputValue(input);
          printOutputValue("");
        }
      }
    }
  });
}

var number = document.getElementsByClassName("number");
// console.log(number.length);
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    // console.log("You clicked :" + this.id);
    let output = noFormatNumber(getOutputValue());
    if (output != NaN) {
      //output is  number
      output = output + this.id;
      printOutputValue(output);
    }
  });
}
