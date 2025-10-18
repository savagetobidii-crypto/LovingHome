// booking.js

// Path to your JSON file
const jsonFile = '/js/data.json';

// Function to format date/time from "DD/MM/YY HH:MM" to your display format
function formatDate(dateString) {
    // For now, we just return as is
    return dateString;
}

// Function to create a booking card
function createBookingCard(booking) {
    // Clone the existing template
    const template = document.querySelector('.booking-card');
    const card = template.cloneNode(true);

    // Fill Room Type
    const roomType = card.querySelector('.room-type');
    roomType.textContent = booking.package; // Assuming package = room type

    // Fill Check-in / Check-out dates
    const dateBoxes = card.querySelectorAll('.date-box p');
    dateBoxes[0].textContent = formatDate(booking.checkIn);
    dateBoxes[1].textContent = formatDate(booking.checkOut);

    // Fill Room number
    const roomInfo = card.querySelector('.room-info');
    roomInfo.textContent = `Room: ${booking.roomNumber || 420}`;

    // Fill Pet Info
    const petItems = card.querySelectorAll('.pet-item');
    petItems[0].textContent = booking.petName; // Pet Name
    petItems[1].textContent = booking.ownerName; // Owner Name
    petItems[2].textContent = `$${booking.price?.toFixed(2) || 0.00}`; // Price

    // Append to container
    const container = document.querySelector('.booking-section');
    container.appendChild(card);
}

// Fetch JSON and populate the page
fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
        data.bookings.forEach(booking => {
            createBookingCard(booking);
        });

        // Remove the original template card
        const template = document.querySelector('.booking-card');
        if (template) template.remove();
    })
    .catch(error => console.error('Error loading JSON:', error));

const bookBtn = document.querySelector('.book-btn');
const bookingSection = document.querySelector('.booking');
const petForm = document.querySelector('.pet');
const ownerForm = document.querySelector('.owner');
const continueBtn = document.querySelector('.continue-btn');
const payBtn = document.querySelector('.pay');

// Step 1: Show booking container + pet form + continue button
bookBtn.addEventListener('click', () => {
  bookingSection.classList.add('show');
  petForm.classList.add('active');
  continueBtn.classList.add('active');
});

// Step 2: Continue → hide pet, hide continue, show owner + pay
continueBtn.addEventListener('click', (e) => {
  e.preventDefault();

  continueBtn.classList.remove('active');    // hide continue button
  continueBtn.classList.add('hide');         // smooth hide

  setTimeout(() => {
    ownerForm.classList.add('active');       // show owner
    payBtn.classList.add('active');          // show pay
  }, 400); // match CSS transition
});
