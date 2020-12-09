var elForm = document.querySelector('.js-form');
var elInput = elForm.querySelector('.js-input');
var elResult = document.querySelector('.result');
var elButton = elForm.querySelector('.js-button');

elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  var inputValue = elInput.value;

  if (inputValue % 3 === 0 && inputValue % 5 === 0) {
    elResult.textContent = `FizzBuzz`;
  } else if (inputValue % 5 === 0) {
    elResult.textContent = `Buzz`;
  } else if (inputValue % 3 === 0) {
    elResult.textContent = `Fizz`;
  } else {
    elResult.textContent = elInput.value;
  }
});