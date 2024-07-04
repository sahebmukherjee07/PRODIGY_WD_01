
window.addEventListener('scroll', function() {
    var nav = document.getElementById('main-nav');
    if (window.scrollY > 0) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  });
  
  // Add click event listener to highlight active menu item
  var navLinks = document.querySelectorAll('#main-nav a');
  
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // Remove active class from all links
      navLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      // Add active class to the clicked link
      this.classList.add('active');
    });
  });
