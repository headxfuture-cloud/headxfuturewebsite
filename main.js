// Countdown Timer Logic
const countDownDate = new Date().getTime() + (30 * 24 * 60 * 60 * 1000); // 30 days from now

const updateTimer = () => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(timerInterval);
    document.getElementById("countdown").innerHTML = "<h2>Event has Started!</h2>";
  }
};

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

// FAQ Accordion Logic
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      // Close other open items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });
      // Toggle current item
      item.classList.toggle("active");
    });
  });
});
