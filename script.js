document.addEventListener("DOMContentLoaded", function () {
  const content = document.querySelector('.scrolling-content');
  // Save the original items HTML
  let itemsHTML = content.innerHTML;
  // Duplicate the content so we have two copies for seamless scrolling
  content.innerHTML = itemsHTML + itemsHTML;

  let offset = 0;
  const speed = 1; // pixels per frame; adjust as needed
  let baseWidth = content.scrollWidth / 2; // width of one copy

  // Continuous animation using requestAnimationFrame
  function animate() {
    // Increase the offset, wrapping around when reaching baseWidth
    offset = (offset + speed) % baseWidth;
    // Apply translation
    content.style.transform = `translateX(-${offset}px)`;
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  // Dynamically append new content every 10 seconds without a jump
  setInterval(function () {
    // Update the scrolling content to be exactly two copies of the new pattern
    content.innerHTML = itemsHTML + itemsHTML;
    // Recalculate baseWidth for one copy
    baseWidth = content.scrollWidth / 2;
    // Ensure offset remains within the new baseWidth
    offset = offset % baseWidth;
  }, 10000);
});
