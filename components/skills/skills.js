let skillsData = null;

function generateTabs() {
  const tabsContainer = document.querySelector(".skill-container-tabs");
  if (!tabsContainer) {
    console.error("Skill tabs container not found");
    return;
  }

  tabsContainer.innerHTML = "";

  Object.entries(skillsData.categories).forEach(
    ([categoryId, category], index) => {
      const tab = document.createElement("a");
      tab.id = `tab-${index + 1}`;
      tab.className = index === 0 ? "active" : "";
      tab.innerHTML = `<i class="${category.icon}"></i> ${category.name}`;
      tabsContainer.appendChild(tab);
    }
  );
}

function generateSkillIcons() {
  const mainDiv = document.querySelector(".skills-main-div");
  if (!mainDiv) {
    console.error("Skills main div not found");
    return;
  }

  Object.entries(skillsData.categories).forEach(
    ([categoryId, category], index) => {
      const iconsContainer = document.createElement("div");
      iconsContainer.id = `tab-${index + 1}-icons`;
      iconsContainer.className = "skill-container-logos";
      if (index !== 0) {
        iconsContainer.style.display = "none";
      }

      category.skills.forEach((skill) => {
        const img = document.createElement("img");
        img.width = 50;
        img.height = 50;
        img.id = skill.id;
        img.draggable = true;
        img.ondragstart = drag;
        img.src = `../../assets/images/skills/${skill.id}.png`;
        img.alt = skill.title;
        img.style.cursor = "pointer";
        iconsContainer.appendChild(img);
      });

      mainDiv.appendChild(iconsContainer);
    }
  );
}

async function LoadSkills() {
  try {
    const response = await fetch("components/skills/skills.html");
    const data = await response.text();
    const skills = document.querySelector(".skills");
    if (!skills) {
      throw new Error("Skills container not found");
    }
    skills.innerHTML = data;
  } catch (error) {
    window.location.reload();
    console.error("Error loading skills HTML:", error);
  }
}

async function loadSkillsData() {
  try {
    const response = await fetch("components/skills/skills.json");
    skillsData = await response.json();

    // Only generate UI if elements exist
    const skillsContainer = document.querySelector(".skills");
    if (skillsContainer) {
      generateTabs();
      generateSkillIcons();
    }
  } catch (error) {
    window.location.reload();
    console.error("Error loading skills data:", error);
  }
}

function handleTabs() {
  const tabs = document.querySelectorAll(".skill-container-tabs a");
  const iconContainers = document.querySelectorAll(".skill-container-logos");

  if (!tabs.length || !iconContainers.length) {
    console.error("Tab elements not found");
    return;
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Update tab classes
      tabs.forEach((t) => (t.className = ""));
      tab.className = "active";

      // Update icon container visibility
      iconContainers.forEach((container, i) => {
        container.style.display = i === index ? "flex" : "none";
      });
    });
  });
}

// to prevent default behavior
function allowDrop(ev) {
  ev.preventDefault();
}

// to set the data to be transferred
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

// to add the scale to the drop bar
function addscale(n) {
  const dimg1 = document.getElementById("drop-bar-level-img1");
  const dimg2 = document.getElementById("drop-bar-level-img2");
  const dimg3 = document.getElementById("drop-bar-level-img3");

  if (n < 45) {
    dimg1.classList.add("scale");
    dimg2.classList.remove("scale");
    dimg3.classList.remove("scale");
  } else if (n < 95) {
    dimg1.classList.add("scale");
    dimg2.classList.add("scale");
    dimg3.classList.remove("scale");
  } else if (n <= 100) {
    dimg1.classList.add("scale");
    dimg2.classList.add("scale");
    dimg3.classList.add("scale");
  } else {
    dimg1.classList.remove("scale");
    dimg2.classList.remove("scale");
    dimg3.classList.remove("scale");
  }
}

// to add the details to the drop bar
function addDetails(title, text, np, ex) {
  const droptext = document.getElementById("drop-text");
  const droptitle = document.getElementById("drop-title");
  const dropnp = document.getElementById("drop-np");
  const dropex = document.getElementById("drop-ex");

  droptitle.textContent = title;
  droptext.textContent = text;
  dropnp.textContent = np;
  dropex.textContent = ex;
}

// to drop the skill
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var it = document.getElementById(data);

  ev.target.style.backgroundImage = `url(${it.src})`;
  const bar = document.getElementById("drop-bar-line-value");

  // Find the skill in any category
  let skill = null;
  for (const category of Object.values(skillsData.categories)) {
    const found = category.skills.find((s) => s.id === data);
    if (found) {
      skill = found;
      break;
    }
  }

  if (skill) {
    addDetails(skill.title, skill.description, skill.np, skill.ex);
    bar.style.width = `${skill.level}%`;
    addscale(skill.level);
  } else {
    addDetails(
      "Drop a Skill",
      "This is a skill record selector. It'll help you know about my skills interactively. Drag a skill from the skill-set and drop in the above circle! (tap on the skill if you are using a mobile phone)",
      "-",
      "-"
    );
    bar.style.width = "0%";
    addscale(0);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([LoadSkills(), loadSkillsData()]);
  handleTabs();
});
