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
});
