const passwordInput = document.getElementById('password');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const strengthText = document.getElementById('strength');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {
    let chars = "";
    if (uppercaseCheckbox.checked) chars += upperChars;
    if (lowercaseCheckbox.checked) chars += lowerChars;
    if (numbersCheckbox.checked) chars += numberChars;
    if (symbolsCheckbox.checked) chars += symbolChars;

    if (!chars) return "";

    let password = "";
    const length = parseInt(lengthSlider.value);
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
}

function updateStrength(password) {
    let strength = "WEAK";
    if (password.length >= 12 && uppercaseCheckbox.checked && lowercaseCheckbox.checked && numbersCheckbox.checked && symbolsCheckbox.checked) {
        strength = "STRONG";
    } else if (password.length >= 8 && ((uppercaseCheckbox.checked && lowercaseCheckbox.checked) || (numbersCheckbox.checked && symbolsCheckbox.checked))) {
        strength = "MEDIUM";
    }
    strengthText.textContent = `STRENGTH: ${strength}`;
}

generateBtn.addEventListener('click', () => {
    const password = generatePassword();
    passwordInput.value = password;
    updateStrength(password);
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordInput.value);
    alert('Password copied to clipboard!');
});