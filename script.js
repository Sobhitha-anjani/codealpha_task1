document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery-item img');
    images.forEach(image => {
      image.addEventListener('click', function () {
        const imageSrc = image.src;  // Get the source of the clicked image
        openLightbox(imageSrc);     // Call the function to open the lightbox
      });
    });
  });
  
  // Function to create and display the lightbox
  function openLightbox(src) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    
    // Insert HTML content for the lightbox
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <img src="${src}" alt="Enlarged Image">
        <button class="close-btn">X</button>
      </div>
    `;
    
    // Append the lightbox to the body
    document.body.appendChild(lightbox);
    
    // Make the lightbox visible by adding the active class
    setTimeout(() => {
      lightbox.classList.add('active');
    }, 10); // Delay to ensure transition happens smoothly
  
    // Close the lightbox when the "X" button is clicked
    const closeBtn = lightbox.querySelector('.close-btn');
    closeBtn.addEventListener('click', function () {
      closeLightbox(lightbox);
    });
  
    // Close the lightbox when clicking outside the image
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) {
        closeLightbox(lightbox);
      }
    });
  }
  
  // Function to close the lightbox
  function closeLightbox(lightbox) {
    lightbox.classList.remove('active');
    
    // Remove the lightbox from the DOM after the transition
    setTimeout(() => {
      lightbox.remove();
    }, 300); // Match the transition time of the fade-out
  }