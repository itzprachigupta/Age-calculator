document.getElementById("dob-input").valueAsDate = new Date();

// Get the input element
const dateInput = document.getElementById("dob-input");

// Get today's date and format it as "YYYY-MM-DD"
const today = new Date().toISOString().split("T")[0];

// Set the maximum date for the input field to today's date
dateInput.setAttribute("max", today);

// for dark theme
const theme_button = document.getElementById("theme");
const container = document.getElementById("body");

theme_button.addEventListener("click", () => {
  container.classList.toggle("dark-mode");
});

// for toggle button of hamburger menu
// accessing hamburger menu 
const toggleButton = document.getElementById('nav-toggle'); 
// accessing nav menu 
const navLinks = document.getElementById('nav-links')
toggleButton.addEventListener('click',() => {
    navLinks.classList.toggle('active');
})


function swapImage(){
  if (document.getElementById("pic").src.endsWith('menu.png') == true)  //Comparison
  { 
       document.getElementById("pic").src = "images/menu2.png"; //assignment  

   } 
   else if (document.getElementById("pic").src.endsWith('menu2.png') == true) 
   { 
      document.getElementById("pic").src = "images/menu.png"; 
      
  }
}

const greet = [
  "Hello Visitor 😃",
  "Welcome to Age Calculator 🤗",
  "We do not share your age with others🤫 ",
  "Age is just a number 😉",
  "Glad to see you 😃",
  "Hope you are doing well 😀",
  "A warm welcome 🤗",
  "Hello Visitor 😃",
  "We do not share your age with others🤫 ",
  "Age is just a number 😉",
  "Glad to see you 😃",
];

let greet1 = Math.random();
console.log(greet1);
let greet2 = greet1 * 10;
console.log(greet2);
greet_no = Math.ceil(greet2);
console.log(greet_no);
console.log(greet[greet_no]);

document.getElementById("welcome-text").innerHTML = greet[greet_no];

// setting display
const submit = document.getElementById("submit-button").addEventListener("click", () => {
    document.getElementById("dob-form").classList.toggle("display-none");
    document.getElementById("response-section").classList.toggle("display-flex");
  });

// calculating age
function calculateAge() {
  // Get the user's birth date from the input field with id "dob-input"
  var birthDateInput = document.getElementById("dob-input").value;
  document.getElementById("entered-dob").innerHTML = birthDateInput;

  // Create Date objects for the birth date and current date
  var birthDate = new Date(birthDateInput);
  var currentDate = new Date();

  if ( currentDate.getMonth() == birthDate.getMonth() && currentDate.getDate() == birthDate.getDate()) 
  {
    alert("Happy Birthday!");
  }

  // Calculate the difference in milliseconds between the two dates
  var timeDifference = currentDate - birthDate;

  // Convert the difference to seconds, minutes, hours, days, and years
  var seconds = Math.floor(timeDifference / 1000);
  console.log(seconds);
  var minutes = Math.floor(seconds / 60);
  console.log(minutes);
  var hours = Math.floor(minutes / 60);
  console.log(hours);
  var days = Math.floor(hours / 24);
  console.log(days);

  // Calculate years, months, and remaining days
  var years = Math.floor(days / 365.25);
  console.log(years);
  var months = Math.floor((days % 365.25) / 30.4375); // Approximate average number of days in a month
  console.log(months);
  var weeks = Math.floor(days / 7);
  console.log(weeks);
  var remainingDays = Math.ceil((days % 365.25) % 30.4375);
  var totalMonths = Math.floor(years * 12) + months;

  document.getElementById("age").innerHTML = years + " years, " + months + " months, " + remainingDays + " days ";
  document.getElementById("entered-dob").innerHTML = birthDateInput;
  document.getElementById("age-years").innerHTML = years;
  document.getElementById("a-months").innerHTML = totalMonths.toLocaleString("en-US");
  document.getElementById("a-weeks").innerHTML = weeks.toLocaleString("en-US");
  document.getElementById("a-days").innerHTML = days.toLocaleString("en-US");
  document.getElementById("a-hours").innerHTML = hours.toLocaleString("en-US");
  document.getElementById("a-minutes").innerHTML = minutes.toLocaleString("en-US");
  document.getElementById("a-seconds").innerHTML = seconds.toLocaleString("en-US");
}

