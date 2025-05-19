document.addEventListener("DOMContentLoaded", function() {
  let javascriptAlert = document.querySelectorAll(".nav-link[href='#']");
  javascriptAlert.forEach(function (jsalert) {
    jsalert.addEventListener("click", function(event) {
      alert("JavaScript is working!");
    });
  });
});
