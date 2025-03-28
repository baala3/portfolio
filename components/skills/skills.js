let skillsData = null;

function generateTabs() {
  const tabsContainer = document.querySelector(".skill-container-tabs");
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
  Object.entries(skillsData.categories).forEach(
    ([categoryId, category], index) => {
      const iconsContainer = document.createElement("div");
      iconsContainer.id = `tab-${index + 1}-icons`;
      iconsContainer.className = "skill-container-logos";
      if (index !== 0) {
        iconsContainer.style.display = "none";
      }

      category.skills.forEach((skillId) => {
        const skill = skillsData.skills[skillId];
        const img = document.createElement("img");
        img.width = 50;
        img.height = 50;
        img.id = skillId;
        img.draggable = true;
        img.ondragstart = drag;
        img.src = `../../assets/images/skills/${skillId}.png`;
        img.alt = skill.title;
        iconsContainer.appendChild(img);
      });

      document.querySelector(".skills-main-div").appendChild(iconsContainer);
    }
  );
}

async function LoadSkills() {
  const response = await fetch("components/skills/skills.html");
  const data = await response.text();
  const skills = document.querySelector(".skills");
  skills.innerHTML = data;
}

async function loadSkillsData() {
  try {
    const response = await fetch("components/skills/skills.json");
    skillsData = await response.json();
    generateTabs();
    generateSkillIcons();
  } catch (error) {
    console.error("Error loading skills data:", error);
  }
}

function handleTabs() {
  const tabs = document.querySelectorAll(".skill-container-tabs a");
  const iconContainers = document.querySelectorAll(".skill-container-logos");

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

  if (skillsData && skillsData.skills[data]) {
    const skill = skillsData.skills[data];
    addDetails(skill.title, skill.description, skill.np, skill.ex);
    bar.style.width = `${skill.level}%`;
    addscale(skill.level);
  } else {
    addDetails(
      "Drop a Skill",
      "This is a skills record selector. It'll help you know about my skills in an interactive way. Drag a skill from the skillset and drop in the above circle! (Just tap on the skill if you are using a mobile phone)",
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
