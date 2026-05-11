function animateCount(element, target, suffix = "") {
  if (!element) return;

  let current = 0;
  const duration = 1200;
  const steps = 40;
  const increment = target / steps;
  const interval = duration / steps;

  const counter = setInterval(() => {
    current += increment;

    if (current >= target) {
      element.textContent = target + suffix;
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(current) + suffix;
    }
  }, interval);
}

if (window.AOS) {
  AOS.init({
    duration: 700,
    once: true,
    offset: 80
  });
}
