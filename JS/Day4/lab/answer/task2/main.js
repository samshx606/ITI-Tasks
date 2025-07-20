//Element selectors
var nameInput = document.getElementById("nameInput");
var passwordInput = document.getElementById("passwordInput");
var emailInput = document.getElementById("emailInput");
var countryInput = document.getElementById("countryInput");

// Error message elements
var nameError = document.getElementById("nameError");
var passwordError = document.getElementById("passwordError");
var emailError = document.getElementById("emailError");
var genderError = document.getElementById("genderError");
var sportError = document.getElementById("sportError");
var countryError = document.getElementById("countryError");

// patterns
//edit the name pattern to allow spaces too
var namePattern = /^[a-zA-Z0-9 ]{3,9}$/;
var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;
var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

//validation functions
function validateName(name) {
    if (!name) {
        nameError.textContent = "Name is required.";
        return false;
    } else if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters long.";
        return false;
    } else if (!namePattern.test(name)) {
        nameError.textContent = "Invalid name. Only alphanumeric characters are allowed.";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}
function validatePassword(password) {
    if (!password) {
        passwordError.textContent = "Password is required.";
        return false;
    } else if (!passwordPattern.test(password)) {
        passwordError.textContent = "Invalid password. Must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number.";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}
function validateEmail(email) {
    if (!email) {
        emailError.textContent = "Email is required.";
        return false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}
function validateGender(gender) {
    if (!gender) {
        genderError.textContent = "Gender field is required.";
        return false;
    } else {
        genderError.textContent = "";
        return true;
    }
}
function validateSport(sport) {
    if (sport.length === 0) {
        sportError.textContent = "At least one sport must be selected.";
        return false;
    } else {
        sportError.textContent = "";
        return true;
    }
}
function validateCountry(country) {
    if (!country) {
        countryError.textContent = "Country field is required.";
        return false;
    } else {
        countryError.textContent = "";
        return true;
    }
}
// Form submission handler
function submitForm() {
    var genderOptions = document.querySelector('input[name="gender"]:checked');
    var sportOptions = document.querySelectorAll('input[name="sports"]:checked');

    // Get values from inputs
    var name = nameInput.value;
    var password = passwordInput.value;
    var email = emailInput.value;
    var gender = genderOptions ? genderOptions.value : "";
    var sport = [];
    var country = countryInput.value;
    for (var i = 0; i < sportOptions.length; i++) {
        sport.push(sportOptions[i].value);
    }
    // Validate each field
    var isValidName = validateName(name);
    var isValidPassword = validatePassword(password);
    var isValidEmail = validateEmail(email);
    var isValidGender = validateGender(gender);
    var isValidSport = validateSport(sport);
    var isValidCountry = validateCountry(country);

    //console.log("Name:", name, "Password:", password, "Email:", email, "Gender:", gender, "Sport:", sport, "Country:", country);

    if (isValidName && isValidPassword && isValidEmail && isValidGender && isValidSport && isValidCountry) {
        console.log("Name:", name);
        console.log("Password:", password);
        console.log("Email:", email);
        console.log("Gender:", gender);
        console.log("Sport:", sport);
        console.log("Country:", country);

    } else {
        console.log("Form submission failed. Please correct the errors.");
    }
}