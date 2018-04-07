
  var link = document.querySelector(".js-button");

  var popup = document.querySelector(".modal-window");
  var overlay = document.querySelector(".modal-overlay");
  var close = popup.querySelector(".modal-close");

  var form = popup.querySelector("form");
  var email = popup.querySelector("[name=writeus-name]");
  var message = popup.querySelector("[name=writeus-textarea]");

  var isStorageSupport = true;
  var storage = "";

  try {
  storage = localStorage.getItem("email");
  } catch (err) {
  isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("modal-show");

  if (storage) {
    email.value = storage;
    message.focus();
  } else {
    email.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести почту для ответа и ваше сообщение");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
