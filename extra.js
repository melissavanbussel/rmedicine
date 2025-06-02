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

  // Use different offset based on environment
  const offset = window.location.protocol === "file:" ? 7 : 2;

  const pathParts = window.location.pathname.replace(/^\/+/, '').split('/');
  const depth = Math.max(0, pathParts.length - offset);
  const prefix = '../'.repeat(depth);

  const imgSrc = `${prefix}logo.png`;

  brand.innerHTML = `
    <img src="${imgSrc}" height="30" style="vertical-align: middle; margin-right: 10px;"">
    <span style="vertical-align: middle;">rmedicine</span>
  `;
});
