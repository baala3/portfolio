function LoadAboutMe() {
  fetch("components/about_me/about_me.html")
    .then((res) => res.text())
    .then((data) => {
      const aboutme = document.querySelector(".aboutme");
      aboutme.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading about me:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  LoadAboutMe();
});
