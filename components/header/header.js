function LoadHeader() {
  fetch("components/header/header.html")
    .then((res) => res.text())
    .then((data) => {
      const header = document.querySelector(".header");
      header.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading header:", error);
    });
}

function hideExperience() {
  setTimeout(() => {
    document.getElementById("experience").style.display = "none";
  }, 10000);
}

document.addEventListener("DOMContentLoaded", () => {
  LoadHeader();
  hideExperience();
});
