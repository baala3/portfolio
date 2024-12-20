function LoadEducation() {
  fetch("components/education/education.html")
    .then((res) => res.text())
    .then((data) => {
      const education = document.querySelector(".education");
      education.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading education:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  LoadEducation();
});
