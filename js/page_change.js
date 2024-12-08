document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".home-social a");
    const sections = document.querySelectorAll(".page");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
  
        // Get target section ID from href
        const targetId = link.getAttribute("href").replace("#", "");
        const targetSection = document.getElementById(targetId);
  
        // Remove active class from all sections
        sections.forEach((section) => section.classList.remove("active"));
  
        // Add active class to the target section
        setTimeout(() => {
          targetSection.classList.add("active");
        }, 400); // Delay for a smoother overlap effect
      });
    });
  });
  