// Assuming you have jQuery included, if not, use vanilla JS
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById('menu-toggle');
  const body = document.body;

  // Function to toggle scroll lock
  function toggleScrollLock() {
      if (menuToggle.checked) {
          body.classList.add('no-scroll'); // Lock scroll
      } else {
          body.classList.remove('no-scroll'); // Unlock scroll
      }
  }

  // Add event listener to toggle function
  menuToggle.addEventListener('change', toggleScrollLock);
});

document.querySelectorAll('.nav-links a, .nav-links2 a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});