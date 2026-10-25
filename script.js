document.getElementById("theme").addEventListener("click", function () {
  var root = document.documentElement;
  var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
});
