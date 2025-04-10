// @ts-check

document.addEventListener("DOMContentLoaded", function () {
  /**
   * @type {NodeListOf<HTMLButtonElement>}
   */
  const buttonsQuery = document.querySelectorAll(".select-button");

  const buttons = Array.from(buttonsQuery);

  for (const button of buttons) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const selected = document.querySelector(".active");
      if (selected) {
        selected.classList.remove("active");
      }
      button.classList.add("active");
      /**
       * @type {HTMLElement|null}
       */
      const inputHidden = document.getElementById("rating");
      if (!inputHidden || !(inputHidden instanceof HTMLInputElement)) {
        throw new Error("Input element not found");
      }
      const selectedValue = button.innerText;
      inputHidden.value = selectedValue;
    });
  }

  const form = document.querySelector("form");
  if (!form) {
    throw new Error("Form element not found");
  }
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    /**
     * @type {HTMLInputElement|null}
     */
    const selected = document.querySelector(".active");
    if (!selected) {
      alert("Please select a rating before submitting.");
      return;
    }
    const selectedValue = parseInt(selected.innerText);
    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        rating: selectedValue,
      }),
    });
  });
});
