// Get the travel and hotel section elements
console.log("Hello");
const travelSection = document.querySelector('#travel-section');
const hotelSection = document.querySelector('#hotel-section');

// Get the travel and hotel section headers
const travelHeader = document.querySelector('#travel-header');
const hotelHeader = document.querySelector('#hotel-header');

// Add click event listeners to the headers
//travelHeader.addEventListener('click', () => {
  //travelSection.classList.toggle('hidden');
//});

// hotelHeader.addEventListener('click', () => {
//   hotelSection.classList.toggle('hidden');
// });


// Define the plan ahead items
const planAheadItems = [
    { title: 'Check visa requirements', action: 'Check visa' },
    { title: 'Check visa requirements', action: 'Check visa' },
    { title: 'Get travelers insurance', action: 'Get Insurance' },
    { title: 'Buy plane tickets', action: 'Buy tickets' },
  ];
  
  // Get the plan ahead section element
  const planAheadSection = document.querySelector('#plan-ahead-section');
  
  // Create and append the plan ahead items
  planAheadItems.forEach((item) => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('card', 'bg-base-100', 'shadow-xl')
    console.log(item);
 })

//  const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=Boston"
//  const API_KEY = "07e6b5c8846468b633a7686bbd63780d"

//  const forecastSection = document.querySelector('#forecast');

//  fetch("https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=07e6b5c8846468b633a7686bbd63780d&units=imperial")
//    .then(function(response) {
//      return response.json();
//    })
//    .then(function(data) {
//      console.log(data);
//     }