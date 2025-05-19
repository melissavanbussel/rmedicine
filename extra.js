document.addEventListener("DOMContentLoaded", function() {
  let javascriptAlert = document.querySelectorAll(".nav-link[href*='#js_alert#']");
  javascriptAlert.forEach(function (jsalert) {
    jsalert.addEventListener("click", function(event) {
      event.preventDefault();
      alert("JavaScript is working!");
    });
  });
});
