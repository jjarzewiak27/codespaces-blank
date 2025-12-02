// script.js
// 1) Slideshow logic
const slides = [
  {
    src: "images/email.png",
    alt: "Example of a suspicious email asking for urgent payment",
    caption: "Example 1: An email with 'urgent payment' and spelling mistakes."
  },
  {
    src: "images/text.png",
    alt: "Suspicious text message with a short link",
    caption: "Example 2: A text with a strange link about a fake package."
  },
  {
    src: "images/bank.png",
    alt: "Fake bank login page that looks similar to real bank",
    caption: "Example 3: A fake bank sign-in page asking for your password."
  },
  {
    src: "images/tech.png",
    alt: "Pop-up claiming your computer is infected",
    caption: "Example 4: A pop-up saying 'Call this number' for tech support."
  },
  {
    src: "images/giftcard.png",
    alt: "Email asking for gift card payment",
    caption: "Example 5: Someone demanding payment in gift cards."
  }
];

let currentSlide = 0;

function showSlide(index) {
  const image = document.getElementById("slideshow-image");
  const caption = document.getElementById("slideshow-caption");

  if (!image || !caption) return;

  // Wrap around the array
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  const slide = slides[currentSlide];
  image.src = slide.src;
  image.alt = slide.alt;
  caption.textContent = slide.caption;
}

document.getElementById("next-slide")?.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

document.getElementById("prev-slide")?.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

// Initialize first slide
showSlide(0);

// 2) Plain language toggle
const toggleBtn = document.getElementById("plain-language-toggle");
const plainText = document.getElementById("plain-language-text");

toggleBtn?.addEventListener("click", () => {
  if (!plainText) return;
  const isHidden = plainText.classList.contains("hidden");
  plainText.classList.toggle("hidden");
  toggleBtn.textContent = isHidden
    ? "Hide easier version"
    : "Make this page easier to read";
});

// 3) Show red flags in fake email
const redFlagsBtn = document.getElementById("show-red-flags");
const redFlagsList = document.getElementById("red-flags-list");

redFlagsBtn?.addEventListener("click", () => {
  if (!redFlagsList) return;
  redFlagsList.classList.remove("hidden");
  redFlagsBtn.disabled = true;
  redFlagsBtn.textContent = "Red flags shown";
});