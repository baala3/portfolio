async function LoadContact() {
  const response = await fetch("components/contact/contact.html");
  const data = await response.text();
  const contact = document.querySelector(".contact");
  contact.innerHTML = data;
}

function validEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function isEmpty(value) {
  return value.trim().length === 0;
}

function sendEmail() {
  document.getElementById("submitform").addEventListener("click", (e) => {
    e.preventDefault();
    const FirstName = document.getElementById("FirstName").value;
    const LastName = document.getElementById("LastName").value;
    const email = document.getElementById("email").value;
    const contentType = document.getElementById("contentType").value;
    const description = document.getElementById("description").value;
    const sendbtn = document
      .getElementById("submitform")
      .getElementsByTagName("i")[0];

    if (isEmpty(FirstName)) {
      document.getElementById("FirstName").placeholder = "must not be empty";
      return;
    } else {
      document.getElementById("FirstName").placeholder = "First Name";
    }
    if (isEmpty(LastName)) {
      document.getElementById("LastName").placeholder = "must not be empty";
      return;
    } else {
      document.getElementById("LastName").placeholder = "Last Name";
    }
    if (isEmpty(email)) {
      document.getElementById("email").placeholder = "email must not be empty";
      return;
    } else {
      document.getElementById("email").placeholder = "Email";
    }
    if (isEmpty(contentType)) {
      document.getElementById("contentType").placeholder = "must not be empty";

      return;
    } else {
      document.getElementById("contentType").placeholder = "What's it about?";
    }
    if (description.trim().length == 0) {
      document.getElementById("description").placeholder = "must not be empty";
      return;
    } else {
      document.getElementById("description").placeholder = "Message";
    }

    if (!validEmail(email)) {
      document.getElementById("email").placeholder = "Enter valid email";
      document.getElementById("email").value = "";
      return;
    } else {
      document.getElementById("email").placeholder = "Email";
    }

    sendbtn.textContent = " Sending...";

    emailjs.init("tQeXBSEJUfkTWaGIn");

    emailjs.send("service_1s5hega", "template_e2tri79", {
      to_name: "Bala",
      from_name: `${FirstName} ${LastName} with email: ${email}`,
      message: `about: ${contentType} & description: ${description}`,
    });

    setTimeout(() => {
      sendbtn.textContent = " Send Message";
      document.getElementById("formid").reset();
      document.getElementById("move").style.display = "flex";
    }, 1000);

    setTimeout(() => {
      document.getElementById("move").style.display = "none";
    }, 5000);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await LoadContact();
  sendEmail();
});
