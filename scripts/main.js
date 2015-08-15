var imag = document.querySelector('img');

imag.onclick = function() {
	var mysrc = imag.getAttribute('src');
        
	if (mysrc === 'images/image.jpg') {
		imag.setAttribute('src', 'images/image1.jpg');
	} else if (mysrc === 'images/image1.jpg') {
		imag.setAttribute('src', 'images/image2.jpg');
	} else if (mysrc === 'images/image2.jpg') {
		imag.setAttribute('src', 'images/image3.jpg');
	} else {
		imag.setAttribute('src', 'images/image.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Sun Rise, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Sun Rise, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}