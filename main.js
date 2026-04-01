
  const menuIcon = document.querySelector(".fa-bars");
  const navLinks = document.querySelector(".nav-link");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
