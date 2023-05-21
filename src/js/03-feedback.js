import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

populateFormInput();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
}

function onFormInput(e) {
  let inputData = localStorage.getItem(LOCAL_STORAGE_KEY);
  inputData = inputData ? JSON.parse(inputData) : {};
  inputData[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(inputData));
}

function populateFormInput() {
  let saveLocalData = localStorage.getItem(LOCAL_STORAGE_KEY);
  try {
    if (saveLocalData) {
      saveLocalData = JSON.parse(saveLocalData);
      Object.entries(saveLocalData).forEach(([name, value]) => {
        form.elements[name].value = value;
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}
