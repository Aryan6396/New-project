document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form fields
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation
    let message = '';
    if (!firstName || !lastName) {
        message = 'First Name and Last Name are required.';
    } else if (!validateEmail(email)) {
        message = 'Invalid email format.';
    } else if (!validatePhoneNumber(phoneNumber)) {
        message = 'Invalid phone number format.';
    } else if (password.length < 8) {
        message = 'Password must be at least 8 characters long.';
    } else {
        // Log form data in object format
        const formData = {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            email: email,
            password: password
        };
        console.log(formData);
        message = 'Form submitted successfully!';
    }

    document.getElementById('message').textContent = message;
});

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Phone number validation (simple regex for basic validation)
function validatePhoneNumber(phoneNumber) {
    const re = /^\d{10}$/;
    return re.test(phoneNumber);
}
