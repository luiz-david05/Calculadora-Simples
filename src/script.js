document.addEventListener("DOMContentLoaded", function () {
    var display = document.getElementById("display");
    var buttons = document.querySelectorAll("button");
    var expression = "";
    var easteregg = document.getElementById("easteregg");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var buttonText = button.textContent;
            if (buttonText === "=") {
                if (display.value === "") {
                    return;
                }
                try {
                    var result = eval(expression);
                    display.value = "".concat(expression, " = ").concat(result);
                    expression = "";
                }
                catch (error) {
                    display.value = "Error";
                    expression = "";
                }
            }
            else if (buttonText === "AC") {
                display.value = "";
                expression = "";
            }
            else if (buttonText === "CE") {
                display.value = display.value.slice(0, -1);
                expression = expression.slice(0, -1);
            }
            else if (buttonText === "x") {
                display.value += "*";
                expression += "*";
            }
            else if (buttonText === "÷") {
                display.value += "/";
                expression += "/";
            }
            else if (buttonText === "^") {
                display.value += "**";
                expression += "**";
            }
            else {
                display.value += buttonText;
                expression += buttonText;
            }
            if (display.value.length > 20) {
                display.value = display.value.slice(0, 20);
            }
            // easteregg
            if (expression === "3385") {
                display.value = "Te amo, Camila!";
                easteregg.textContent = "❤️";
                expression = "";
                setTimeout(function () {
                    easteregg.textContent = "";
                    display.value = "";
                }, 5000);
            }
        });
    });
    document.addEventListener("keydown", function (event) {
        var key = event.key;
        if (/[0-9]/.test(key)) {
            display.value += key;
            expression += key;
        }
        else if (key === "+" || key === "-" || key === "*" || key === "/") {
            display.value += key;
            expression += key;
        }
        else if (key === "Enter") {
            try {
                var result = eval(expression);
                display.value = "".concat(expression, " = ").concat(result);
                expression = "";
            }
            catch (error) {
                display.value = "Error";
                expression = "";
            }
        }
        else if (key === "Backspace") {
            display.value = display.value.slice(0, -1);
            expression = expression.slice(0, -1);
        }
    });
});
