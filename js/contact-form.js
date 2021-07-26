/* OPENING FORM */
// targeting form as a whole
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
  launchModal(modalbg);
}));
// launch modal form
function launchModal(element) {
  element.style.display = "block";
}


/* CLOSING FORM */
// targeting x button to close form
const closeForm = document.querySelectorAll(".close");

// launch modal close event
closeForm.forEach((btn) => btn.addEventListener("click", () => {
closeModal(modalbg)}));
// launch modal close form
function closeModal(element) {
  element.style.display = "none";
}


/* CLOSING SUCCESS MESSAGE */
// targeting entire success message
const successBackground = document.querySelector(".success-background");
// targeting x button to close form
const closeSuccessForm = document.querySelectorAll(".close");
// targeting success message close button 
const successCloseBtn = document.querySelectorAll(".btn-close");

// success message close event (x)
closeSuccessForm.forEach((btn) => btn.addEventListener("click", closeSuccessMessage));
// success message close event (btn)
successCloseBtn.forEach((btn) => btn.addEventListener("click", closeSuccessMessage));
// function to close success message for both (x) and (btn)
function closeSuccessMessage() {
  closeModal(successBackground);
  closeModal(modalbg);
}
//////////////////////////////////////////////////////////////

/* VALIDATING THE FORM */
/* Using document query selector to select the input fields and the form */
const first = document.querySelector('#first');
const last = document.querySelector('#last');
const email = document.querySelector('#email');
const text = document.querySelector('#text');
const form = document.querySelector('#contact');

/* attaching the submit event listener to the form using addEventListener */
form.addEventListener('submit', function (e) {

  // validate input fields 
  let isFirstValid = checkFirst(),
    isLastValid = checkLast(),
    isEmailValid = checkEmail(),
    isTextValid = checkText();

  // validate form 
  let isFormValid =
    isFirstValid &&
    isLastValid &&
    isEmailValid &&
    isTextValid;

  //don't submit to the server if form is invalid 
  if (!isFormValid) {
    // prevent the form from submitting
    e.preventDefault();
  } else if (isFormValid) {
    launchModal(successBackground);
    // prevent the success message from disappearing
    e.preventDefault();
  }
});


/* FUNCTIONS THAT SHOW SUCCESS / ERROR MESSAGE */
const showError = (input, message) => {
  // get the formData element
  const formData = input.parentElement;
  // remove the success class
  formData.classList.remove('success');
  // add the error class
  formData.classList.add('error');

  // show the error message
  const error = formData.querySelector('small');
  error.textContent = message;
};
const showSuccess = (input) => {
  // get the formData element
  const formData = input.parentElement;
  // remove the error class
  formData.classList.remove('error');
  // add the success class
  formData.classList.add('success');

  // take away error message
  const error = formData.querySelector('small');
  error.textContent = '';
};


/* UTILITY FUNCTION FOR EMAIL */
const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};


/* INPUT FIELD VALIDATING FUNCTIONS */
/* Validate the first name field */
const checkFirst = () => {

  let valid = false;
  const firstValue = first.value.trim();

  if (firstValue.length < 2) {
    // not less than 2 characters
    showError(first, 'Au moins 2 lettres');
  } else {
    showSuccess(first);
    valid = true;
  }
  return valid;
};
/* Validate the last name field */
const checkLast = () => {

  let valid = false;
  const lastValue = last.value.trim();

  if (lastValue.length < 2) { 
    // not less than 2 characters
    showError(last, 'Au moins 2 lettres');
  } else {
    showSuccess(last);
    valid = true;
  }
  return valid;
};
/* Validate the email field */
const checkEmail = () => {

  let valid = false;
  const emailValue = email.value.trim();

  if (emailValue === '' || !isEmailValid(emailValue)) { 
    // checks if email is emtpy
    showError(email, 'Email est invalide');
  } else {
    showSuccess(email);
    valid = true;
  }
  return valid;
};
/* Validate the message field */
const checkText = () => {

  let valid = false;
  const textValue = text.value.trim();

  if (textValue === '') {
    // checks if message is empty
    showError(text, 'Ne laissez pas vide');
  } else {
    showSuccess(text);
    valid = true;
  }
  return valid;
};

//////////////////////////////////////////////////////////////
