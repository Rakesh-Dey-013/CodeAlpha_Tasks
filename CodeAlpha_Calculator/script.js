
const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");
let string = "";

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = "0";
        } else if (e.target.innerHTML == "x") {
            string = string.substring(0, string.length - 1);
            input.value = string || "0";
        } else if (e.target.innerHTML == "%") {
            try {
                // Convert current value to percentage (divide by 100)
                string = (eval(string) / 100).toString();
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else {
            if (input.value === "0" || input.value === "Error") {
                string = e.target.innerHTML;
            } else {
                string = string + e.target.innerHTML;
            }
            input.value = string;
        }
    });
});
