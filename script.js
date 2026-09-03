const navBar = document.querySelector('.nav-bar');
const navToggle = document.querySelector('.nav-toggle');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navBar.classList.toggle('open');
  });
}

const filterButtons = document.querySelectorAll('.filter-btn');
const galleryCards = document.querySelectorAll('.gallery-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    galleryCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !matches);
    });
  });
});

const testimonials = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

if (testimonials.length) {
  setInterval(() => {
    testimonials[currentTestimonial].style.display = 'none';
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].style.display = 'block';
  }, 6000);
}
// FORMS SECTION
/* const contactForm = document.querySelector('.contact-form');
// const formMessage = document.querySelector('.form-message');

// if (contactForm) {
//   contactForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     formMessage.textContent =
//       'Thanks for reaching out. We will reply within 24 hours.';
//     contactForm.reset();
//   });
// }*/

const contactForm = document.querySelector('.contact-form');
const formMessage = document.querySelector('.form-message');

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;

    // Feedback during sending
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    formMessage.textContent = '';

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        formMessage.style.color = 'var(--muted)'; // Uses your site styling
        formMessage.textContent =
          'Thanks for reaching out. We will reply within 24 hours.';
        contactForm.reset();
      } else {
        formMessage.style.color = '#e53e3e';
        formMessage.textContent =
          'Oops! There was a problem sending your message. Please try again.';
      }
    } catch (error) {
      formMessage.style.color = '#e53e3e';
      formMessage.textContent =
        'Network error. Please check your connection and try again.';
    } finally {
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}

const offerPreviewButtons = document.querySelectorAll('.offer-preview-btn');
const mediaOverlay = document.querySelector('.media-overlay');
const mediaOverlayClose = document.querySelector('.media-overlay-close');
const mediaOverlayImage = document.getElementById('mediaOverlayImage');
const mediaOverlayVideo = document.getElementById('mediaOverlayVideo');

function closeMediaOverlay() {
  if (!mediaOverlay) {
    return;
  }

  mediaOverlay.setAttribute('hidden', '');
  mediaOverlayVideo.pause();
  mediaOverlayVideo.currentTime = 0;
  mediaOverlayVideo.removeAttribute('src');
  mediaOverlayVideo.load();
  mediaOverlayVideo.hidden = true;
  mediaOverlayImage.hidden = true;
}

function openMediaOverlay(kind, src) {
  if (!mediaOverlay || !mediaOverlayImage || !mediaOverlayVideo) {
    return;
  }

  mediaOverlay.removeAttribute('hidden');
  mediaOverlay.setAttribute('data-type', kind); // Sets mode to 'video' or 'image'

  if (kind === 'video') {
    mediaOverlayImage.hidden = true;
    mediaOverlayVideo.hidden = false;

    mediaOverlayVideo.src = src;
    mediaOverlayVideo.load();
    mediaOverlayVideo.play().catch(() => {});
  } else {
    mediaOverlayVideo.pause();
    mediaOverlayVideo.currentTime = 0;
    mediaOverlayVideo.removeAttribute('src');
    mediaOverlayVideo.load();
    mediaOverlayVideo.hidden = true;

    mediaOverlayImage.src = src;
    mediaOverlayImage.hidden = false;
  }
}

offerPreviewButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openMediaOverlay(button.dataset.kind, button.dataset.src);
  });
});

if (mediaOverlayClose) {
  mediaOverlayClose.addEventListener('click', closeMediaOverlay);
}

if (mediaOverlay) {
  mediaOverlay.addEventListener('click', (event) => {
    if (event.target === mediaOverlay) {
      closeMediaOverlay();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (
    event.key === 'Escape' &&
    mediaOverlay &&
    !mediaOverlay.hasAttribute('hidden')
  ) {
    closeMediaOverlay();
  }
});

/*A CODE I DONT NEED YET
// Inside your click event listener for the play button:
// const video = document.querySelector('.offer-video-preview');

// Check if the user is on a mobile screen width
// if (window.innerWidth < 900) {
//   video.removeAttribute('poster'); // Removes the image completely
//   video.play();
// }
*/

// Hero Slider Logic
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.hero-slider');
  const slides = document.querySelectorAll('.hero-slider .slide');
  const dots = document.querySelectorAll('.slider-dots .dot');

  if (!slides.length || !slider) return;

  let currentSlide = 0;
  let direction = 1; // 1 = forward, -1 = backward
  const intervalTime = 4000;

  function goToSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }

  function nextSlide() {
    // Reverse direction when reaching either end
    if (currentSlide === slides.length - 1) {
      direction = -1; // Change to backward
    } else if (currentSlide === 0) {
      direction = 1; // Change to forward
    }

    currentSlide += direction;
    goToSlide(currentSlide);
  }

  let slideInterval = setInterval(nextSlide, intervalTime);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      currentSlide = index;
      goToSlide(currentSlide);

      // Update direction based on manual dot selection
      if (currentSlide === slides.length - 1) {
        direction = -1;
      } else if (currentSlide === 0) {
        direction = 1;
      }

      slideInterval = setInterval(nextSlide, intervalTime);
    });
  });
});
