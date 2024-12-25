function validateForm() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    const nameError = document.getElementById("name-error");
    const passwordError = document.getElementById("password-error");

    nameError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent = "please enter a valid name/Email";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent = "please enter a valid password";
        isValid = false;
    }
    return isValid;
}


function validateSignupForm() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("Email").value;
    const dob = document.getElementById("dob").value;
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;

    const fnameError = document.getElementById("fname-error");
    const lnameError = document.getElementById("lname-error");
    const dobError = document.getElementById("dob-error");
    const emailError = document.getElementById("email-error");
    const pass1Error = document.getElementById("pass1-error");
    const pass2Error = document.getElementById("pass2-error");


    fnameError.textContent = "";
    lnameError.textContent = "";
    dobError.textContent = "";
    emailError.textContent = "";
    pass1Error.textContent = "";
    pass2Error.textContent = "";

    let isValid = true;

    if (fname === "" || /\d/.test(fname)) {
        fnameError.textContent = "please enter a valid first name";
        isValid = false;
    }

    if (lname === "" || /\d/.test(lname)) {
        lnameError.textContent = "please enter a valid Last name"
        isValid = false;

    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent = "please enter a valid Email id";
        isValid = false;
    }

    if (dob === "") {
        dobError.textContent = "Please enter your Date of Birth.";
        isValid = false;
    } else {
        const dob = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();

        // Adjust if today's date is before the birthday this year
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        if (age < 18) {
            dobError.textContent = "You must be at least 18 years old.";
            isValid = false;
        }
    }

    if (pass1 === "" || pass1.length < 6) {
        pass1Error.textContent = "please enter a valid password";
        isValid = false;
    }

    if (pass2 === "") {
        pass2Error.textContent = "please enter a valid password";
        isValid = false;

    } else {
        if (pass2 != pass1) {
            pass2Error.textContent = "passwords do not match"
        }

        isValid = false;
    }
    return isValid;

}