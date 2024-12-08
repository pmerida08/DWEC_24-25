document.addEventListener("DOMContentLoaded", function () {
  const h2 = document.querySelector("h2");
  h2.style.color = "pink";

  h2.addEventListener("click", () => {
    if (h2.style.color === "pink") {
      h2.style.color = "blue";
    } else {
      h2.style.color = "pink";
    }
  });
});
