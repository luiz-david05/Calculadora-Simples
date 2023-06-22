document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display") as HTMLInputElement;
    const buttons = document.querySelectorAll("button");
    let expression = "";
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const buttonText = button.textContent;
  
        if (buttonText === "=") {
          try {
            const result = eval(expression);
            display.value = `${expression} = ${result}`;
            expression = "";
          } catch (error) {
            display.value = "Error";
            expression = "";
          }
        } else if (buttonText === "C") {
          display.value = "";
          expression = "";
        } else if (buttonText === "CE") {
          display.value = display.value.slice(0, -1);
          expression = expression.slice(0, -1);
        } else {
          display.value += buttonText;
          expression += buttonText;
        }
      });
    });
  });
  