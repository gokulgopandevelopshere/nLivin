tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#007749",
        secondary: "#4FB8E8",
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
        button: "8px",
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", function () {
  // Sticky Header
  const header = document.querySelector(".sticky-header");
  const backToTop = document.getElementById("back-to-top");
  // Animation Elements
  const animatedElements = document.querySelectorAll(
    ".fade-in, .slide-in-left, .slide-in-right, .scale-in, .rotate-in"
  );
  // Scroll Handler
  window.addEventListener("scroll", () => {
    // Header and Back to Top
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
      backToTop.classList.remove("opacity-0", "invisible");
    } else {
      header.classList.remove("scrolled");
      backToTop.classList.add("opacity-0", "invisible");
    }
  });
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  // Back to Top
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  // Intersection Observer for Animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
  // Form Submission
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    // Show success message
    const successMessage = document.createElement("div");
    successMessage.className =
      "fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 translate-x-full";
    successMessage.textContent = "Message sent successfully!";
    document.body.appendChild(successMessage);
    // Animate in
    setTimeout(() => {
      successMessage.style.transform = "translateX(0)";
    }, 100);
    // Animate out
    setTimeout(() => {
      successMessage.style.transform = "translateX(full)";
      setTimeout(() => {
        successMessage.remove();
      }, 500);
    }, 3000);
    form.reset();
  });
});
