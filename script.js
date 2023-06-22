document.addEventListener("DOMContentLoaded", function () {
    var display = document.getElementById("display");
    var buttons = document.querySelectorAll("button");
    var expression = "";
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var buttonText = button.textContent;
            if (buttonText === "=") {
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
            else if (buttonText === "C") {
                display.value = "";
                expression = "";
            }
            else if (buttonText === "CE") {
                display.value = display.value.slice(0, -1);
                expression = expression.slice(0, -1);
            }
            else {
                display.value += buttonText;
                expression += buttonText;
            }
        });
    });
});
