function getValue(number) {
  var input = document.getElementById("input");
  input.value += number;
}

function equalTo() {
  var input = document.getElementById("input");
  var result = eval(input.value);
  input.value = result;
}

function allClear() {
  var input = document.getElementById("input");
  input.value = "";
}

function delValue() {
  var input = document.getElementById("input");
  var editValue = input.value.slice(0, -1);
  input.value = editValue;
}
