function getValue(number) {
  var input = document.getElementById("input");
  input.value += number;
}

function equalTo() {
  var input = document.getElementById("input");
  var result = eval(input.value);
  input.value = result;
}

function delValue() {
  var input = document.getElementById("input");
  var editValue = input.value.slice(0, -1);
  input.value = editValue;
}

function clearAll() {
  var input = document.getElementById("input");
  input.value = "";
}
