function sendmail() {
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_4ztpcnt', 'template_qobhc44', params)
        .then(function (response) {
            alert("Email sent successfully!");  // Alert once after successful submission
            console.log("SUCCESS!", response);

            // Reset the form after successful submission
            document.getElementById("gform").reset();
        })
        .catch(function (error) {
            alert("Failed to send email. Check console for details.");
            console.error("FAILED...", error);
        });
}

// Prevent form from reloading and submitting the form twice
document.getElementById("gform").addEventListener("submit", function (event) {
    event.preventDefault(); // Stops form from redirecting
    sendmail(); // Call the sendmail function
});
