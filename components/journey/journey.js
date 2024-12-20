async function LoadJourney() {
  const response = await fetch("components/journey/journey.html");
  const data = await response.text();
  const journey = document.querySelector(".journey");
  journey.innerHTML = data;
}

function isDarkTheme() {
  const mainElement = document.querySelector(".main");
  const bgColor = window.getComputedStyle(mainElement).backgroundColor;
  return bgColor === "rgb(6, 7, 37)";
}

function LoadJourneyListener() {
  const start = document.getElementById("start");
  const train = document.getElementById("train");
  const bubble = document.getElementById("bubble");
  const contact = document.getElementById("contact");

  let open = false;

  document.getElementById("startJ").addEventListener("click", () => {
    open = true;
    start.style.display = "none";
    bubble.style.display = "none";
    if (isDarkTheme()) {
      contact.style.backgroundImage = "linear-gradient(#060725,#060725)";
    } else {
      contact.style.backgroundImage = "linear-gradient(#fff,#fff)";
    }
    train.style.display = "flex";
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth < 940) {
      bubble.style.display = "none";
      if (isDarkTheme()) {
        contact.style.backgroundImage = "linear-gradient(#060725,#060725)";
      } else {
        contact.style.backgroundImage = "linear-gradient(#fff,#fff)";
      }
    } else {
      bubble.style.display = "block";
      if (isDarkTheme()) {
        contact.style.backgroundImage = `url(../../assets/images/contact/dark_bg.png)`;
      } else {
        contact.style.backgroundImage = `url(../../assets/images/contact/bg.png)`;
      }
    }
  });

  document.getElementById("closeJ").addEventListener("click", () => {
    open = false;
    start.style.display = "flex";
    if (window.innerWidth > 940) {
      bubble.style.display = "block";
      if (isDarkTheme()) {
        contact.style.backgroundImage = `url(../../assets/images/contact/dark_bg.png)`;
      } else {
        contact.style.backgroundImage = `url(../../assets/images/contact/bg.png)`;
      }
    } else {
      bubble.style.display = "none";
      if (isDarkTheme()) {
        contact.style.backgroundImage = "linear-gradient(#060725,#060725)";
      } else {
        contact.style.backgroundImage = "linear-gradient(#fff,#fff)";
      }
    }
    train.style.display = "none";
  });

  document.getElementById("rightJ").addEventListener("click", () => {
    let x = parseInt(
      document.getElementById("trainImg").style.backgroundPosition
    );
    if (window.innerWidth - x + 200 > 3650) x = 200;
    document.getElementById("trainImg").style.backgroundPosition = `${
      x - 200
    }px`;
  });

  document.getElementById("leftJ").addEventListener("click", () => {
    let x = parseInt(
      document.getElementById("trainImg").style.backgroundPosition
    );
    if (x >= 0) x = -200;
    document.getElementById("trainImg").style.backgroundPosition = `${
      x + 200
    }px`;
  });

  document.addEventListener("keyup", (e) => {
    if (open) {
      if (e.key === "ArrowLeft") {
        let x = parseInt(
          document.getElementById("trainImg").style.backgroundPosition
        );
        if (x >= 0) x = -200;
        document.getElementById("trainImg").style.backgroundPosition = `${
          x + 200
        }px`;
      }
      if (e.key === "ArrowRight") {
        let x = parseInt(
          document.getElementById("trainImg").style.backgroundPosition
        );
        if (window.innerWidth - x + 200 > 3650) x = 200;
        document.getElementById("trainImg").style.backgroundPosition = `${
          x - 200
        }px`;
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", async () => {
  await LoadJourney();
  LoadJourneyListener();
});
