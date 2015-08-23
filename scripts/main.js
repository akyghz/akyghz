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

/*changing head of my html page by getting input from user*/ 
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
	if (myName == "") {
		prompt('please enter a valid name');
		localStorage.setItem('name', myName);
		myHeading.innerHTML = 'Sun Rise ---	' + myName;
	} else 
  		myHeading.innerHTML = 'Sun Rise ---	' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Sun Rise, ' + storedName;
}
/*change username by clicking this button*/
myButton.onclick = function() {
  setUserName();
}

function fakecounter(){

//decrease/increase counter value (depending on perceived popularity of your site!)
var decrease_increase = 50000;

var counterdate = new Date();
var currenthits = counterdate.getTime().toString();
currenthits = parseInt(currenthits.substring(2,currenthits.length-4))+decrease_increase;

document.write("You are visitor # <b>"+currenthits+"</b> to my site!")
}
fakecounter();