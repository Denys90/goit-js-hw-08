import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onFormValue, 500));
refs.form.addEventListener('submit', onFormSubmit);

const LOCAL_STORAGE_KEY = 'feedback-form-state';
let formData = {};
const saveData = localStorage.getItem(LOCAL_STORAGE_KEY);
const parseData = JSON.parse(saveData);

populateTextarea();

function onFormValue(e) {
  e.preventDefault();

  formData[e.target.name] = e.target.value;
  return localStorage.setItem('LOCAL_STORAGE_KEY', JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.currentTarget.reset();
}

function populateTextarea() {
  const saveFormValue = localStorage.getItem('LOCAL_STORAGE_KEY');

  if (saveFormValue) {
    refs.form.value = parseData;
  }
}
