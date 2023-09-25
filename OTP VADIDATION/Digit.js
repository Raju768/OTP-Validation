// JavaScript
const OTPInputs = document.querySelectorAll("input");
const button = document.querySelector("button");

window.addEventListener("load", () => OTPInputs[0].focus());

OTPInputs.forEach((input) => {
  input.addEventListener("input", () => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;

    if (currentInput.value.length === 2) {
      currentInput.value = "";
    }

    if (nextInput !== null && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (!OTPInputs[3].hasAttribute("disabled") && OTPInputs[3].value !== "") {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  input.addEventListener("keyup", (e) => {
    if (e.key === "Backspace") {
      if (input.previousElementSibling !== null) {
        e.target.value = "";
        e.target.setAttribute("disabled", true);
        input.previousElementSibling.focus();
      }
    }
  });
});
