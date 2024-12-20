async function LoadProjects() {
  const response = await fetch("components/projects/projects.html");
  const data = await response.text();
  const projects = document.querySelector(".projects");
  projects.innerHTML = data;
}

// to display the android projects
function setAndroidProject(no) {
  const androidbody = document.getElementById("android-body");
  const androidimg = document.getElementById("android-img");
  const androidbutton = document.getElementById("android-button");

  switch (no) {
    case 0:
      androidimg.src = "../../assets/images/projects/app0.png";
      androidbody.getElementsByTagName("h2")[0].textContent = "More to Store";
      androidbody.getElementsByTagName("p")[0].textContent =
        "More-To-Store is an app where you can buy items like flipkart, Amazon.Technologies used:Firebase Libraries(Realtime database,storage,Authentication),Android Architecture components(View Pager,Recycler withmultiple Items). Architecture used:MVC";
      androidbutton.getElementsByTagName("a")[0].href =
        "https://appetize.io/app/q1edkvrn3p9r3g13x8h0qx5904?device=nexus5&scale=75&orientation=portrait&osVersion=8.1";
      androidbutton.getElementsByTagName("a")[1].href =
        "https://github.com/BALASHEKHAR/moreToStore";

      break;
    case 1:
      androidimg.src = "../../assets/images/projects/app1.png";
      androidbody.getElementsByTagName("h2")[0].textContent = "Social Network";
      androidbody.getElementsByTagName("p")[0].textContent =
        "A simple social media app including chat feature and also this lets the users able to post. It has the following features :user login, sign up, and authentication Customize your user profile and their posts Following and unfollowing othersLiking, commenting, and saving other users posts; Technologies used : Java/XML,Firebase realtime databases and Firebase Authentication and Android Architecture components";
      androidbutton.getElementsByTagName("a")[0].href =
        "https://appetize.io/app/q3g294nb7ymgy3a94wn8meky4w?device=nexus5&scale=75&orientation=portrait&osVersion=8.1";
      androidbutton.getElementsByTagName("a")[1].href =
        "https://github.com/BALASHEKHAR/SocialNetwork";

      break;
    case 2:
      androidimg.src = "../../assets/images/projects/app2.png";
      androidbody.getElementsByTagName("h2")[0].textContent = "Weather";
      androidbody.getElementsByTagName("p")[0].textContent =
        "Weatherapp is a simple weather forecast app, which uses some APIs to fetch 5 day / 3 hour forecast data from the OpenWeatherMap and to fetch places,cities,counties,coords etc.";
      androidbutton.getElementsByTagName("a")[0].href =
        "https://appetize.io/app/q9e1mrnphbm14p7d02wq4ujqx8?device=nexus5&scale=75&orientation=portrait&osVersion=8.1";
      androidbutton.getElementsByTagName("a")[1].href =
        "https://github.com/jagan9/Corona-Tracker";

      break;
    default:
      androidimg.src = "../../assets/images/projects/app0.png";
      androidbody.getElementsByTagName("h2")[0].textContent =
        "Social Media App";
      androidbody.getElementsByTagName("p")[0].textContent =
        "More-To-Store is an app where you can buy items like flipkart, Amazon.Technologies used:Firebase Libraries(Realtime database,storage,Authentication),Android Architecture components(View Pager,Recycler withmultiple Items). Architecture used:MVC";
      androidbutton.getElementsByTagName("a")[0].href =
        "https://appetize.io/app/q1edkvrn3p9r3g13x8h0qx5904?device=nexus5&scale=75&orientation=portrait&osVersion=8.1";
      androidbutton.getElementsByTagName("a")[1].href =
        "https://github.com/BALASHEKHAR/moreToStore";
  }
}

// to display the web projects
function setWebProject(no) {
  const webbody = document.getElementById("web-body");
  const webimg = document.getElementById("web-img");
  const webbutton = document.getElementById("web-button");

  switch (no) {
    case 0:
      webimg.src = "../../assets/images/projects/foodwaste.png";
      webbody.getElementsByTagName("h2")[0].textContent =
        "Food Waste Management";
      webbody.getElementsByTagName("p")[0].textContent =
        "Food Waste Management is a full stack web application that enable user to login and post the food availability in their areas or known location. And any one to see the post from other people and able to track the location and directions from their current location. Tech Stack used: MongoDB, (Mongoose), Node.js, React, Express,Material-UI, Mapbox-gl, ftp-mail, JWT (Authentication), Redux, (React-Redux), React-swipeable-views";
      webbutton.getElementsByTagName("a")[0].href =
        "https://food-waste-managements.netlify.app/#/";
      webbutton.getElementsByTagName("a")[1].href =
        "https://github.com/BALASHEKHAR/food-waste-management-client";

      break;
    case 1:
      webimg.src = "../../assets/images/projects/moretostore (1).png";
      webbody.getElementsByTagName("h2")[0].textContent =
        "More to Store Admin Panel";
      webbody.getElementsByTagName("p")[0].textContent =
        "More-To-Store admin panel for an app made for Android app.The website has the following features :The admin can add new items, issue items to some existing users. The admin can also view the items of more to store, an Admin can edit and delete the items if he wants. The users can create their account, search for items, edit their profile.";
      webbutton.getElementsByTagName("a")[0].href =
        "https://jagan9.github.io/More-to-store-admin-panel/#/";
      webbutton.getElementsByTagName("a")[1].href =
        "https://github.com/jagan9/More-To-Store";

      break;
    case 2:
      webimg.src = "../../assets/images/projects/corona.png";
      webbody.getElementsByTagName("h2")[0].textContent =
        "Corona-Tracker Web App";
      webbody.getElementsByTagName("p")[0].textContent =
        "A progressive web app to serve corona cases are there in state , country , district. The user can search another state, or district.A website made using Bootstrape to display the corona cases are there in state , country , district. The user can search another state, or district. The user can find easily understand th cases information due to in this I used Fusion Charts ['charts Library'] .";
      webbutton.getElementsByTagName("a")[0].href =
        "https://coronaweb.netlify.app/";
      webbutton.getElementsByTagName("a")[1].href =
        "https://github.com/jagan9/Corona-Tracker";

      break;
    default:
      webimg.src = "../../assets/images/projects/foodwaste.png";
      webbody.getElementsByTagName("h2")[0].textContent =
        "Food Waste Management";
      webbody.getElementsByTagName("p")[0].textContent =
        "Food Waste Management is a full stack web application that enable user to login and post the food availability in their areas or known location. And any one to see the post from other people and able to track the location and directions from their current location. Tech Stack used: MongoDB, (Mongoose), Node.js, React, Express,Material-UI, Mapbox-gl, ftp-mail, JWT (Authentication), Redux, (React-Redux), React-swipeable-views";
      webbutton.getElementsByTagName("a")[0].href =
        "https://food-waste-managements.netlify.app/#/";
      webbutton.getElementsByTagName("a")[1].href =
        "https://github.com/BALASHEKHAR/food-waste-management-client";
  }
}

function HandleWebProjects() {
  let webprojectno = 0;

  const webleft = document.getElementById("web-left");
  const webright = document.getElementById("web-right");

  webleft.addEventListener("click", () => {
    webprojectno = (webprojectno - 1 + 3) % 3;
    setWebProject(webprojectno);
  });
  webright.addEventListener("click", () => {
    webprojectno = (webprojectno + 1) % 3;
    setWebProject(webprojectno);
  });
}

function HandleAndroidProjects() {
  let androidprojectno = 0;

  const androidleft = document.getElementById("android-left");
  const androidright = document.getElementById("android-right");

  androidleft.addEventListener("click", () => {
    androidprojectno = (androidprojectno - 1 + 3) % 3;
    setAndroidProject(androidprojectno);
  });
  androidright.addEventListener("click", () => {
    androidprojectno = (androidprojectno + 1) % 3;
    setAndroidProject(androidprojectno);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await LoadProjects();
  HandleWebProjects();
  HandleAndroidProjects();
});
