// ================ Drag' custom animation ==========

const theLetters = document.querySelectorAll('.the-letter');
console.log('theLetter ', theLetters)

const targetCoords = [];

for (let i = 0; i < theLetters.length; i++) {

  targetCoords[i] = {
    x: 0,
    y: 0,
  };

  theLetters[i].addEventListener('drag', (e)=> {
    if (!targetCoords[i].x) {
      targetCoords[i].x = e.x;
    }
    if (!targetCoords[i].y) {
      targetCoords[i].y = e.y;
    }
    // console.log(e);
    // console.log('drag to ', e.x);
    // console.log('styles ', e.target.style.transform)
    
    if (e.x) {
      e.target.style.transform = `translate(${e.x - targetCoords[i].x}px, ${e.y - targetCoords[i].y}px)`;
    }
  });
}

// ===================== Swiper carousel ==================

var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ================== EmailJS ====================

const nameInput = document.querySelector("#form-element-name");
const emailInput = document.querySelector("#form-element-email");
const messageInput = document.querySelector("#form-element-message");
const formResponse = document.querySelector("#js-form-response");

function formValidation(event) {
  nameInput.style.boxShadow = "";
  emailInput.style.boxShadow = "";
  messageInput.style.boxShadow = "";
  formResponse.style.color = "";
  if (!event.target[1].value) {
    nameInput.style.boxShadow = "2px 2px red";
    formResponse.textContent = "Write your name";
    nameInput.focus();
    return false;
  }
  if (!event.target[2].value || !event.target[2].value.includes("@")) {
    emailInput.style.boxShadow = "2px 2px red";
    formResponse.textContent = "Write your e-mail";
    emailInput.focus();
    return false;
  }
  if (!event.target[3].value) {
    messageInput.style.boxShadow = "2px 2px red";
    formResponse.textContent = "Write your message";
    messageInput.focus();
    return false;
  }
  formResponse.textContent = "Message is sent!";
  return true;
}

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("ncNddTkgAtVDtb1YZ");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      if (!formValidation(event)) {
        return;
      }

      // console.log(event);
      // console.log('name ' + event.target[1].value);
      // console.log('email ' + event.target[2].value);
      // console.log('text input value ' + event.target[3].value);

      //TODO: Add modal with success msg, style it and remove console.log's
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs
        .sendForm("service_to_mail_ru", "contact_form_portfolio", this)
        .then(
          function () {
            formResponse.textContent = "Message is delivered.";
            //console.log('SUCCESS!');
          },
          function (error) {
            formResponse.textContent = "oops!.. Something went wrong";
            formResponse.style.color = "red";
            console.log("FAILED...", error);
          }
        );
    });
};

//======== BW photo div animation ===========

const photoBackgroundBW = document.querySelector(".photo__background-bw");

function setHeightOfMyDiv(element) {
  if (
    window.innerHeight - element.offsetHeight >
    element.getBoundingClientRect().top
  ) {
    element.classList.replace(
      "photo__background-bw-large",
      "photo__background-bw-small"
    );
  } else {
    element.classList.replace(
      "photo__background-bw-small",
      "photo__background-bw-large"
    );
  }
  if (element.getBoundingClientRect().top < 20) {
    element.classList.add("photo__background-bw-very-small");
  } else {
    element.classList.remove("photo__background-bw-very-small");
  }
}

window.addEventListener("scroll", () => {
  const photoBWcompStyle = window.getComputedStyle(photoBackgroundBW);
  // console.log('==================');
  // console.log('window.scrollY ' + window.scrollY);
  // console.log('element.offsetTop ' + photoBackgroundBW.offsetTop);
  // console.log('window.innerHeight ' + window.innerHeight)
  // console.log('getBoundC...top ' + photoBackgroundBW.getBoundingClientRect().top);
  // console.log('style height ' + photoBWcompStyle.getPropertyValue('height'));
  setHeightOfMyDiv(photoBackgroundBW);
});
