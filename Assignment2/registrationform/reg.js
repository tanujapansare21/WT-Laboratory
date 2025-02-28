document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    // Get input values
    let name = document.getElementById("name").value.trim();
    let rollno = document.getElementById("rollno").value.trim();
    let address = document.getElementById("address").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();

    // Name Validation (Only letters, min 3 characters)
    if (name === "" || !/^[a-zA-Z ]{3,}$/.test(name)) {
        document.getElementById("nameError").innerText = "Enter a valid name (min 3 letters)";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Roll Number Validation (Only numbers, 5-10 digits)
    if (rollno === "" || !/^\d{1,10}$/.test(rollno)) {
        document.getElementById("rollnoError").innerText = "Enter a valid roll number (5-10 digits)";
        isValid = false;
    } else {
        document.getElementById("rollnoError").innerText = "";
    }

    // Address Validation (Cannot be empty)
    if (address === "") {
        document.getElementById("addressError").innerText = "Address cannot be empty";
        isValid = false;
    } else {
        document.getElementById("addressError").innerText = "";
    }

    // Mobile Number Validation (Exactly 10 digits)
    if (mobile === "" || !/^\d{10}$/.test(mobile)) {
        document.getElementById("mobileError").innerText = "Enter a valid 10-digit mobile number";
        isValid = false;
    } else {
        document.getElementById("mobileError").innerText = "";
    }

    // Email Validation (Proper email format)
    if (email === "" || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email address";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // If form is valid, submit or show success message
    if (isValid) {
        alert("Registration Successful!");
        document.getElementById("registrationForm").reset();
    }
}
