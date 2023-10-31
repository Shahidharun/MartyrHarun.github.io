document.querySelector(".mobile-btn").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function() {
  const languageDropdownToggle = document.getElementById("language-dropdown-toggle");
  const languageDropdownMenu = document.getElementById("language-dropdown-menu");

  languageDropdownToggle.addEventListener("click", function() {
      if (languageDropdownMenu.style.display === "block") {
          languageDropdownMenu.style.display = "none";
      } else {
          languageDropdownMenu.style.display = "block";
      }
  });


  const languageLinks = document.querySelectorAll("#language-dropdown-menu a");
  languageLinks.forEach(function(link) {
      link.addEventListener("click", function() {
          languageDropdownMenu.style.display = "none";
      });
  });
});
