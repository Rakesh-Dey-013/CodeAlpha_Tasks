const input = document.getElementById("calcDisplay");
const buttons = document.querySelectorAll("button");
let string = "";

// Handle button clicks
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        const btnValue = e.target.innerHTML;

        if (btnValue == "=") {
            calculateResult();
        } else if (btnValue == "AC") {
            clearAll();
        } else if (btnValue == "x") {
            backspace();
        } else if (btnValue == "%") {
            calculatePercentage();
        } else {
            insertValue(btnValue);
        }

        // Keep focus on input for keyboard functionality
        input.focus();
    });
});

// Handle keyboard input
input.addEventListener("keydown", (e) => {
    const key = e.key;

    // Prevent all default behavior
    e.preventDefault();

    // Handle special keys
    if (key === "Enter" || key === "=") {
        calculateResult();
    } else if (key === "Escape" || key.toLowerCase() === "c") {
        clearAll();
    } else if (key === "Backspace" || key === "Delete") {
        backspace();
    } else if (key === "%") {
        calculatePercentage();
    }
    // Handle valid calculator input
    else if (/^[0-9+\-*/.()]$/.test(key)) {
        insertValue(key);
    }
});

// Prevent paste of non-numeric content
input.addEventListener("paste", (e) => {
    e.preventDefault();
    const pastedText = (e.clipboardData || window.clipboardData).getData("text");
    const validText = pastedText.replace(/[^0-9+\-*/.()]/g, "");
    if (validText) {
        insertValue(validText);
    }
});

// Prevent direct text input (typing letters)
input.addEventListener("input", (e) => {
    const cleaned = input.value.replace(/[^0-9+\-*/.()]/g, "");
    if (input.value !== cleaned) {
        input.value = cleaned;
        string = cleaned;
    }
});

function insertValue(text) {
    if (input.value === "0" || input.value === "Error") {
        string = text;
    } else {
        string = string + text;
    }
    input.value = string;
}

function calculateResult() {
    try {
        string = eval(string).toString();
        input.value = string;
    } catch (error) {
        input.value = "Error";
        string = "";
    }
}

function clearAll() {
    string = "";
    input.value = "0";
}

function backspace() {
    string = string.substring(0, string.length - 1);
    input.value = string || "0";
}

function calculatePercentage() {
    try {
        string = (eval(string) / 100).toString();
        input.value = string;
    } catch (error) {
        input.value = "Error";
        string = "";
    }
}

// Focus input on page load
window.addEventListener("load", () => {
    input.focus();
});
