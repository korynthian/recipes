document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.scrolling-container');
    const content = document.querySelector('.scrolling-content');
    const originalHTML = content.innerHTML; // Save the original content as a template
  
    // Function to append a new copy of the original content
    function appendCopy() {
      content.innerHTML += originalHTML;
    }
  
    // Automatically duplicate it a couple of times at the start
    appendCopy();
    appendCopy();
  
    // Listen for scroll events on the container
    container.addEventListener('scroll', function() {
      const tolerance = 200; // Tolerance in pixels before reaching the end
      // When the user is near the end of the content, append a new copy early
      if (container.scrollLeft + container.offsetWidth >= content.scrollWidth - tolerance) {
        appendCopy();
      }
    });
  });
  