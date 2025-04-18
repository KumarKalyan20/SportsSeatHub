// Function to open booking form
function openBookingForm(eventName) {
    document.getElementById("booking-form").classList.remove("hidden");
    document.getElementById("event-name").value = eventName;
}

// Handle form submission
document.getElementById("ticket-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let tickets = document.getElementById("tickets").value;
    let eventName = document.getElementById("event-name").value;

    let confirmationMessage = `Thank you, ${name}! Your tickets for ${eventName} have been booked. A confirmation email will be sent to ${email}.`;
    
    document.getElementById("confirmation-message").innerText = confirmationMessage;
    
    document.getElementById("booking-form").classList.add("hidden");
    document.getElementById("confirmation").classList.remove("hidden");
});

// Close confirmation message
function closeConfirmation() {
    document.getElementById("confirmation").classList.add("hidden");
}
