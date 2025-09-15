const scrollBtn = document.getElementById('scrollToTopBtn');
console.log("ScrollToTop.JS Loaded");
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
    scrollBtn.classList.add("show");
  } 
  else {
    scrollBtn.style.display = "none";
    scrollBtn.classList.remove("show");
  }
};
scrollBtn.onclick = function() {
    console.log("Scroll to top button clicked");
  window.scrollTo({ top: 0, behavior: 'smooth' });
};