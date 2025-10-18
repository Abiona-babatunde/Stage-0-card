
document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  // Show current time in milliseconds
  timeElement.textContent = Date.now();

  // Optional: Update every second
  setInterval(() => {
    timeElement.textContent = Date.now();
  }, 1000);
});
