document.querySelector("#name-input").addEventListener("input", (event) => {
  event.preventDefault();
  let result = event.target.value.trim();
  if (result !== null && result !== "" && result !== " ") {
    document.querySelector("#name-output").innerText = result;
  } else {
    document.querySelector("#name-output").innerText = "Anonymous";
  }
});