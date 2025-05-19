document.addEventListener("DOMContentLoaded", () => {
  // Show main content after intro delay
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
  }, 5000); // 5 seconds
});
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 2) + "s";
  document.getElementById("floating-hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Generate hearts continuously
setInterval(createFloatingHeart, 500);
