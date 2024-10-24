function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confpass = document.getElementById("confpass").value;
    var error = document.getElementById("error");
    var message = '';

    // Validate Name
    if (name === '') {
        message += 'Name is required.<br>';
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        message += 'Email is required.<br>';
    } else if (!emailPattern.test(email)) {
        message += 'Invalid email format.<br>';
    }

    // Validate Password
    if (password === '') {
        message += 'Password is required.<br>';
    } else if (password.length < 6) {
        message += 'Password must be at least 6 characters long.<br>';
    }

    // Validate Confirm Password
    if (confpass === '') {
        message += 'Confirm password is required.<br>';
    } else if (password !== confpass) {
        message += 'Passwords do not match.<br>';
    }

    if (message !== '') {
        error.innerHTML = message;
        return false;
    } else {
        error.innerHTML = "Form submitted successfully!";
        return true;
    }
}
