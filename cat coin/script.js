let count = document.querySelector("#count");
let click = document.querySelector("#coin");
let limit = document.getElementById("limit");

click.addEventListener("click", () => {
  count.innerText = parseInt(count.innerText) + 1;
  limit.innerText = parseInt(limit.innerText) - 1;

  if (parseInt(limit.innerText) === 0) {
    click.disabled = true;
  }
});
