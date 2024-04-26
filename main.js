// Создать текстовое поле
function getInput(placeholder, type, className) {
  let input = document.createElement('input');
  input.placeholder = placeholder;
  input.classList.add(className);
  input.type = type;
  return input
}


// Создать блок для текстовых полей
let box = document.createElement('div');
box.classList.add('box')



// Создать заголовок
let title = document.createElement('h1');
title.classList.add('title')
title.textContent = 'Registration';


// Создать input


/*Создать блок фамилией */
let surnameInpWrap = document.createElement('div');
surnameInpWrap.classList.add('field-wrap')
let surnameInp = getInput('Surname', 'text', 'text-field');
let surnameErrorLabel = document.createElement('label');
surnameErrorLabel.classList.add('error');
surnameInpWrap.append(surnameInp, surnameErrorLabel);

/*Создать блок с именем */
let nameInpWrap = document.createElement('div');
nameInpWrap.classList.add('field-wrap')
let nameInp = getInput('Name', 'text', 'text-field');
let nameErrorLabel = document.createElement('label');

nameErrorLabel.classList.add('error');
nameInpWrap.append(nameInp, nameErrorLabel);

/*Создать блок с возрастом */
let ageInpWrap = document.createElement('div');
ageInpWrap.classList.add('field-wrap')
let ageInp = getInput('Age', 'number', 'text-field');
let ageErrorLabel = document.createElement('label');

ageErrorLabel.classList.add('error');
ageInpWrap.append(ageInp, ageErrorLabel);


/*Создать блок с email */
let emailInpWrap = document.createElement('div');
emailInpWrap.classList.add('field-wrap')
let emailInp = getInput('E-mail', 'email', 'text-field');
let emailErrorLabel = document.createElement('label');

emailErrorLabel.classList.add('error');
emailInpWrap.append(emailInp, emailErrorLabel);


/*Создать блок с паролем*/
let passwordInpWrap = document.createElement('div');
passwordInpWrap.classList.add('field-wrap')
let passwordInp = getInput('Password', 'password', 'text-field');
let passwordErrorLabel = document.createElement('label');

passwordErrorLabel.classList.add('error');
passwordInpWrap.append(passwordInp, passwordErrorLabel);





// Создать согласия с условиями
let conditionLabelWrap = document.createElement('div');
conditionLabelWrap.classList.add('field-wrap')
let conditionLabel = document.createElement('label');
conditionLabel.classList.add('conditional');
let conditionInp = document.createElement('input');
conditionInp.type = 'checkbox';
let conditionSpan = document.createElement('span');
conditionSpan.textContent = 'Agree with all conditionals'

conditionLabel.append(conditionInp, conditionSpan);

let conditionErrorLabel = document.createElement('label');

conditionErrorLabel.classList.add('error');
conditionLabelWrap.append(conditionLabel, conditionErrorLabel);







//  Создать кнопку
let regBtn = document.createElement('button');
regBtn.classList.add('btn')
regBtn.textContent = 'Registration';

regBtn.onclick = function () {
  /*Получаем значение input для проверки */
  let surnameValue = surnameInp.value;
  let nameValue = nameInp.value;
  let ageValue = Number(ageInp.value);
  let emailValue = emailInp.value;
  let passwordValue = passwordInp.value;
  let conditionalValue = conditionInp.checked;
  let validationResult = false;

  /*Проверки */
  surnameErrorLabel.textContent = '';
  if (surnameValue.length <= 1) {
    surnameErrorLabel.textContent = 'Write the correct surname';
    validationResult = true;
  }

  if (surnameValue === '') {
    surnameErrorLabel.textContent = 'Write your surname';
    validationResult = true;
  }

  // ---------------------------------------
  nameErrorLabel.textContent = '';
  if (nameValue.length <= 1) {
    nameErrorLabel.textContent = 'Write the correct name';
    validationResult = true;
  }

  if (nameValue === '') {
    nameErrorLabel.textContent = 'Write your name';
    validationResult = true;
  }

  // --------------------------

  ageErrorLabel.textContent = '';

  if (ageValue < 14) {
    ageErrorLabel.textContent = 'You are so young!';
    validationResult = true;
  }

  if (ageValue === '' || ageValue === 0) {
    ageErrorLabel.textContent = 'Write your age';
    validationResult = true;
  }




  // -------------------------------
  emailErrorLabel.textContent = '';
  if (emailValue.length <= 6 || emailValue.includes("@") === false) {
    emailErrorLabel.textContent = 'Write the correct mail';
    validationResult = true;
  }

  if (emailValue === '') {
    emailErrorLabel.textContent = 'Write your mail';
    validationResult = true;
  }



  // ---------------------------------------------

  passwordErrorLabel.textContent = '';

  if (passwordValue.length <= 6 || passwordValue.includes("_") === false) {
    passwordErrorLabel.textContent = 'Write the correct password';
    validationResult = true;
  }


  if (passwordValue === '') {
    passwordErrorLabel.textContent = 'Write your password';
    validationResult = true;
  }



  // -------------------------------------

  conditionErrorLabel.textContent = '';
  if (conditionalValue === false) {
    conditionErrorLabel.textContent = 'Please accept the conditional';
    validationResult = true;
  }


  if (validationResult === true) {
    return;
  }
  alert(`${surnameValue} ${nameValue} your registration is done!`)

}
// Добавляем созданные элементы в div
box.append(title, surnameInpWrap, nameInpWrap, ageInpWrap, emailInpWrap, passwordInpWrap, conditionLabelWrap, regBtn);

document.body.append(box)


let str = "Hello";
let result = str.includes('H');
console.log(result)


