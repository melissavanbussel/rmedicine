document.addEventListener("DOMContentLoaded", function() {
  let javascriptAlert = document.querySelectorAll(".nav-link[href*='#js_alert#']");
  javascriptAlert.forEach(function (jsalert) {
    jsalert.addEventListener("click", function(event) {
      event.preventDefault();
      alert("JavaScript is working!");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const brand = document.querySelector(".navbar-brand");
  if (!brand) return;

  const isFileProtocol = window.location.protocol === "file:";
  const imgSrc = isFileProtocol ? "../".repeat(7) + "logo.png" : "logo.png";

  brand.innerHTML = `
    <img src="${imgSrc}" height="30" style="vertical-align: middle; margin-right: 10px;">
    <span style="vertical-align: middle;">rmedicine</span>
  `;
});
