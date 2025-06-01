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
  if (brand) {
    const base = document.querySelector("base")?.href || "/";
    brand.innerHTML = `
      <img src="melissavanbussel.github.io/rmedicine/logo.png" height="30" style="vertical-align: middle; margin-right: 10px;">
      <span style="vertical-align: middle;">rmedicine</span>
    `;
  }
});
