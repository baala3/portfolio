let projectsData = null;

async function LoadProjects() {
  const response = await fetch("components/projects/projects.html");
  const data = await response.text();
  const projects = document.querySelector(".projects");
  projects.innerHTML = data;
}

async function loadProjectsData() {
  try {
    const response = await fetch("components/projects/projects.json");
    projectsData = await response.json();
    await generateProjects();
  } catch (error) {
    console.error("Error loading projects data:", error);
    showError();
  }
}

function showError() {
  const errorMessage = "Failed to load projects. Please try again later.";
  document
    .querySelectorAll(".pro-desc h2")
    .forEach((h2) => (h2.textContent = errorMessage));
  document
    .querySelectorAll(".pro-desc p")
    .forEach((p) => (p.textContent = errorMessage));
}

function generateProjects() {
  // Generate Web Projects Section
  const webProjects = projectsData.categories.web.projects;
  const webContainer = document.querySelector(".project-main");
  const webBody = document.getElementById("web-body");
  const webImg = document.getElementById("web-img");
  const webButton = document.getElementById("web-button");

  // Generate Android Projects Section
  const androidProjects = projectsData.categories.android.projects;
  const androidContainer = document.querySelector(".project-main2");
  const androidBody = document.getElementById("android-body");
  const androidImg = document.getElementById("android-img");
  const androidButton = document.getElementById("android-button");

  // Set up navigation for web projects
  let webProjectIndex = 0;
  const webLeft = document.getElementById("web-left");
  const webRight = document.getElementById("web-right");

  webLeft.addEventListener("click", () => {
    webProjectIndex =
      (webProjectIndex - 1 + webProjects.length) % webProjects.length;
    updateWebProject(webProjectIndex);
  });

  webRight.addEventListener("click", () => {
    webProjectIndex = (webProjectIndex + 1) % webProjects.length;
    updateWebProject(webProjectIndex);
  });

  // Set up navigation for android projects
  let androidProjectIndex = 0;
  const androidLeft = document.getElementById("android-left");
  const androidRight = document.getElementById("android-right");

  androidLeft.addEventListener("click", () => {
    androidProjectIndex =
      (androidProjectIndex - 1 + androidProjects.length) %
      androidProjects.length;
    updateAndroidProject(androidProjectIndex);
  });

  androidRight.addEventListener("click", () => {
    androidProjectIndex = (androidProjectIndex + 1) % androidProjects.length;
    updateAndroidProject(androidProjectIndex);
  });

  // Initial project display
  updateWebProject(0);
  updateAndroidProject(0);
}

function updateWebProject(index) {
  const project = projectsData.categories.web.projects[index];
  const webBody = document.getElementById("web-body");
  const webImg = document.getElementById("web-img");
  const webButton = document.getElementById("web-button");

  // Update image with loading state
  webImg.src = `../../assets/images/projects/placeholder.png`;
  const img = new Image();
  img.onload = () => {
    webImg.src = `../../assets/images/projects/${project.image}`;
  };
  img.src = `../../assets/images/projects/${project.image}`;

  // Update content
  webBody.getElementsByTagName("h2")[0].textContent = project.title;
  webBody.getElementsByTagName("p")[0].textContent = project.description;
  webButton.getElementsByTagName("a")[0].href = project.demoUrl;
  webButton.getElementsByTagName("a")[1].href = project.githubUrl;
}

function updateAndroidProject(index) {
  const project = projectsData.categories.android.projects[index];
  const androidBody = document.getElementById("android-body");
  const androidImg = document.getElementById("android-img");
  const androidButton = document.getElementById("android-button");

  // Update image with loading state
  androidImg.src = `../../assets/images/projects/placeholder.png`;
  const img = new Image();
  img.onload = () => {
    androidImg.src = `../../assets/images/projects/${project.image}`;
  };
  img.src = `../../assets/images/projects/${project.image}`;

  // Update content
  androidBody.getElementsByTagName("h2")[0].textContent = project.title;
  androidBody.getElementsByTagName("p")[0].textContent = project.description;
  androidButton.getElementsByTagName("a")[0].href = project.demoUrl;
  androidButton.getElementsByTagName("a")[1].href = project.githubUrl;
}

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([LoadProjects(), loadProjectsData()]);
});
