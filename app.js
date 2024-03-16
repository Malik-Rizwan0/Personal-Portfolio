
  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to dynamically attach CSS file when element is in viewport
  function attachCSS() {
    const element = document.getElementById('skill');
    if (isInViewport(element)) {
      const cssLink = document.createElement("link");
      cssLink.href = "white.skill.css"; // Your CSS file path
      cssLink.rel = "stylesheet";
      cssLink.type = "text/css";
      document.getElementById('dynamic-css').appendChild(cssLink);
      window.removeEventListener('scroll', attachCSS); // Remove event listener once CSS is attached
    }
  }

  window.addEventListener('scroll', attachCSS);
  window.addEventListener('resize', attachCSS);
  attachCSS(); // Call the function once to check immediately