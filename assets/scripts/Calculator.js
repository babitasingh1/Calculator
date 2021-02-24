const addBtn = document.getElementById('Add');
const SubstBtn = document.getElementById('Substract');
const MultBtn = document.getElementById('Multiply');
const DivBtn = document.getElementById('Divide');

let inputval = document.getElementById('input-value');
let calculatedval = document.getElementById('calculation');
let outputVal = document.getElementById('output');
let initialVal = 0;

function AddNo() {
  if (inputval.value == ''){
    alert('please input some value')
    return;
  }
  let newValue = parseInt(initialVal) + parseInt(inputval.value);

  calculatedval.textContent =
    parseInt(initialVal) + '+' + parseInt(inputval.value);
  outputVal.innerHTML = newValue;
  initialVal = newValue;
  inputval.value = '';
}

function SubNo() {
  if (inputval.value == ''){
    alert('please input some value')
    return;
  }
  //let initialVal = calculatedval.value;
  let newValue = parseInt(initialVal) - parseInt(inputval.value);

  calculatedval.textContent =
    parseInt(initialVal) + '-' + parseInt(inputval.value);
  outputVal.innerHTML = newValue;
  initialVal = newValue;
  inputval.value = '';
}

function MulNo() {
  if (inputval.value == ''){
    alert('please input some value')
    return;
  }
  //let initialVal = calculatedval.value;
  let newValue = parseInt(initialVal) * parseInt(inputval.value);

  calculatedval.textContent =
    parseInt(initialVal) + '*' + parseInt(inputval.value);
  outputVal.innerHTML = newValue;
  initialVal = newValue;
  inputval.value = '';
}

function DivNo() {
  if (inputval.value == ''){
    alert('please input some value')
    return;
  }
  //let initialVal = calculatedval.value;
  if (parseInt(initialVal) == 0) {
    alert('0 cannot be devided');
    return;
  }

  if (parseInt(inputval.value) == 0) {
    alert('0 cannot devide any no');
    return;
  }

  let newValue = parseInt(initialVal) / parseInt(inputval.value);

  calculatedval.textContent =
    parseInt(initialVal) + '/' + parseInt(inputval.value);
  outputVal.innerHTML = newValue;
  initialVal = newValue;
  inputval.value = '';
}
addBtn.addEventListener('click', AddNo);
SubstBtn.addEventListener('click', SubNo);
MultBtn.addEventListener('click', MulNo);
DivBtn.addEventListener('click', DivNo);
