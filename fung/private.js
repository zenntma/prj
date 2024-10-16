var mobileOnlyDiv = document.querySelector(".mobile-only");
var desktopOnlyDiv = document.querySelector(".desktop-only");
var body = document.body;

function toggleDivs() {
  if (window.innerWidth <= 768) {
    if (!mobileOnlyDiv.parentNode) {
      body.appendChild(mobileOnlyDiv);
      mobileOnlyDiv.classList.remove("hidden");
    }
    if (desktopOnlyDiv.parentNode) {
      desktopOnlyDiv.classList.add("hidden");
    }
  } else {
    if (desktopOnlyDiv.parentNode) {
      body.appendChild(desktopOnlyDiv);
      desktopOnlyDiv.classList.remove("hidden");
    }
    if (mobileOnlyDiv.parentNode) {
      mobileOnlyDiv.classList.add("hidden");
      body.removeChild(mobileOnlyDiv);
    }
  }
}

window.onload = toggleDivs;
window.onresize = toggleDivs;
