async function LoadSkills() {
  const response = await fetch("components/skills/skills.html");
  const data = await response.text();
  const skills = document.querySelector(".skills");
  skills.innerHTML = data;
}

function handleTabs() {
  ///tabs
  const tab1 = document.getElementById("tab-1");
  const tab2 = document.getElementById("tab-2");
  const tab3 = document.getElementById("tab-3");

  const tab1icons = document.getElementById("tab-1-icons");
  const tab2icons = document.getElementById("tab-2-icons");
  const tab3icons = document.getElementById("tab-3-icons");

  tab1.addEventListener("click", () => {
    tab1.className = "active";
    tab2.className = "";
    tab3.className = "";

    tab1icons.style.display = "flex";
    tab2icons.style.display = "none";
    tab3icons.style.display = "none";
  });
  tab2.addEventListener("click", () => {
    tab1.className = "";
    tab2.className = "active";
    tab3.className = "";

    tab1icons.style.display = "none";
    tab2icons.style.display = "flex";
    tab3icons.style.display = "none";
  });
  tab3.addEventListener("click", () => {
    tab1.className = "";
    tab2.className = "";
    tab3.className = "active";

    tab1icons.style.display = "none";
    tab2icons.style.display = "none";
    tab3icons.style.display = "flex";
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

  switch (it.id) {
    case "ruby":
      addDetails(
        "Ruby",
        "Ruby is an open-source, dynamic language. Before joining Money Forward, I had no experience, but working as a Rails developer in the ID service team helped me gain expertise in Rails and Ruby.",
        "3",
        "2"
      );
      bar.style.width = "80%";
      addscale(80);
      break;
    case "go":
      addDetails(
        "Go",
        "Go is a statically typed, open-source language. At Money Forward, I gained experience working with Go in microservices, further expanding my development skills.",
        "2",
        "1"
      );
      bar.style.width = "60%";
      addscale(60);
      break;
    case "cpp":
      addDetails(
        "C++",
        "C++ is the first programming language I learned in college, and I enjoyed using it in competitive programming, which helped me build a strong foundation in problem-solving.",
        "1",
        "2"
      );
      bar.style.width = "70%";
      addscale(70);
      break;
    case "java":
      addDetails(
        "Java",
        "Java is a versatile, object-oriented language that I first started learning for Android development. It was fun using Java to build Android apps with my friends, which gave me practical experience in both the language and mobile app development.",
        "1",
        "0.6"
      );
      bar.style.width = "60%";
      addscale(60);
      break;
    case "html":
      addDetails(
        "HTML",
        "HTML is the standard markup language for creating web pages. I learned it as part of my web development journey, gaining the foundational skills needed to build and structure websites.",
        "5",
        "5"
      );
      bar.style.width = "80%";
      addscale(80);
      break;
    case "css":
      addDetails(
        "CSS",
        "CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
        "5",
        "5"
      );
      bar.style.width = "80%";
      addscale(80);
      break;
    case "javascript":
      addDetails(
        "JavaScript",
        "JavaScript is a high-level, interpreted language that follows the ECMAScript specification. It's the language I’ve used most in my projects.",
        "5",
        "5"
      );
      bar.style.width = "80%";
      addscale(80);
      break;
    case "react":
      addDetails(
        "React",
        "React is a declarative, efficient JavaScript library for building user interfaces. It allowed me to easily create dynamic web apps.",
        "5",
        "5"
      );
      bar.style.width = "80%";
      addscale(80);
      break;
    case "nodejs":
      bar.style.width = "80%";
      addDetails(
        "NodeJS",
        "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside a web browser.",
        "4",
        "4"
      );
      addscale(80);
      break;
    case "android":
      addDetails(
        "Android",
        "Android Studio is the official IDE for Android, designed to accelerate development and help create high-quality apps for Android devices.",
        "2",
        "2"
      );
      bar.style.width = "80%";
      addscale(80);
      break;

    case "mysql":
      addDetails(
        "MySQL",
        "MySQL is an open-source relational database system. I first learned it in college and continue to use it at Money Forward.",
        "1",
        "0.4"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "ga":
      addDetails(
        "GA",
        "At Money Forward, I got hands-on with Google Analytics and Google Tag Manager, using them in my projects to track user behavior and dig into insights.",
        "3",
        "0.4"
      );
      bar.style.width = "65%";
      addscale(65);
      break;

    case "oauth":
      addDetails(
        "OAuth",
        "OAuth is an open-standard authorization protocol that allows secure, authenticated access to services without sharing credentials. As an ID developer at Money Forward, I learned and implemented this core concept in my work.",
        "1",
        "1"
      );
      bar.style.width = "33%";
      addscale(33);
      break;
    case "openid":
      addDetails(
        "OpenID",
        "OpenID is an open-standard authorization protocol that enables secure access to services without sharing credentials. As an ID service developer at Money Forward, I learned and applied this concept in my work.",
        "1",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "saml":
      addDetails(
        "SAML",
        "SAML is a standard for exchanging authentication and authorization data between security domains. As an ID service developer at Money Forward, I’ve learned it, and while challenging, I'm still refining my skills.",
        "1",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "webauthn":
      addDetails(
        "webauthn",
        "WebAuthn is a new technology that enables seamless passwordless authentication. At Money Forward, I played a key role in implementing this technology at the production level.",
        "1",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "grpc":
      addDetails(
        "gRPC",
        "gRPC is a fast, open-source RPC framework that’s all about mobile and HTTP/2. I’m currently learning it to level up my dev skills.",
        "1",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "docker":
      addDetails(
        "Docker",
        "Docker is a platform for building, shipping, and running applications in containers.",
        "-",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "k8s":
      addDetails(
        "Kubernetes",
        "Kubernetes is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications.",
        "-",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "aws":
      addDetails(
        "AWS",
        "Amazon Web Services (AWS) is a cloud computing platform that provides a wide range of services, including computing, storage, databases, and analytics.",
        "-",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "terraform":
      addDetails(
        "Terraform",
        "Terraform is an open-source infrastructure as code tool that allows you to define and manage your infrastructure in a declarative way.",
        "-",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "cloudflare":
      addDetails(
        "Cloudflare",
        "Cloudflare is a cloud computing platform that provides a wide range of services, including computing, storage, databases, and analytics.",
        "-",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    case "datadog":
      addDetails(
        "Datadog",
        "Datadog is a cloud computing platform that provides a wide range of services, including computing, storage, databases, and analytics.",
        "-",
        "1"
      );
      bar.style.width = "40%";
      addscale(40);
      break;
    default:
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
  await LoadSkills();
  handleTabs();
});
