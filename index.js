const submitButton = document.querySelector("button");
const passwordInput = document.querySelector("#password");
const passwordSpan = document.querySelector("[data-match-pass]");
const confirmPasswordInput = document.querySelector("#confirmpassword");
const requiredInputs = [...document.querySelectorAll("[required]")];
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phonenumber");

submitButton.addEventListener("click", () => {
    let valid = validateForm();
    if (!valid) {
        return false;
    }
    requiredInputs.forEach((input) => {
        input.value = "";
    });
    alert("Successfuly created account!")
});

function validateForm() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordSpan.textContent = "Passwords not matching";
        return false;
    } else {
        passwordSpan.textContent = "";
    }

    requiredInputs.forEach((input) => {
        if (input.value === "") {
            input.parentElement.lastElementChild.textContent = "Required field";
            input.classList.add("invalid");
            return false;
        } else {
            input.parentElement.lastElementChild.textContent = "";
        }
    });

    return true;
}

requiredInputs.forEach((input) => {
    input.addEventListener("keydown", (e) => {
        if (input.textContent.length < 2) {
            input.classList.remove("invalid");
            input.parentElement.lastElementChild.textContent = "";
        }
    });
});

emailInput.addEventListener("input", () => {
    if (emailInput.value.indexOf("@") > -1 && emailInput.value.indexOf(".com") > -1) {
        emailInput.classList.remove("invalid");
        emailInput.parentElement.lastElementChild.textContent = "";
    } else {
        emailInput.classList.add("invalid");
        emailInput.parentElement.lastElementChild.textContent = "Must Include a valid E-mail";
    }
});
phoneInput.addEventListener("input", () => {
    let pattern = /\d+/g;
    if (phoneInput.value.match(pattern)) {
        phoneInput.classList.remove("invalid");
        phoneInput.parentElement.lastElementChild.textContent = "";
    } else {
        phoneInput.classList.add("invalid");
        phoneInput.parentElement.lastElementChild.textContent = "Only numbers allowed, no '-()_' characters";
    }
});
