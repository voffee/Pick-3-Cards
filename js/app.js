
// DOM Manipulation

// Event Listeners

// element.addEventListener()

// btn-1.onclick="alert('test')";
const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('I love JS');
};

buttonTwo.addEventListener("click", alertBtn);

const newBackGroundColor = document.querySelector('.card-3');

function ChangeBackgroundColor() {
    newBackGroundColor.style.backgroundColor = 'blue';
};

newBackGroundColor.addEventListener("mouseover", ChangeBackgroundColor);