
document.querySelector('.nav-resources-section a').addEventListener('click', function (event) {
  const href = this.getAttribute('href');

  if (href === "#") { // Only prevent if it's a menu toggle link
    event.preventDefault();
    toggleSubOptions();
  }
});

document.querySelectorAll('#nav-resources-sub-options a').forEach(link => {
  link.addEventListener('click', function (event) {
    const href = this.getAttribute('href');

    if (!href || href === "#") { // Prevent only if there's no valid href
      event.preventDefault();
      toggleSubOptions();
    }
    // If the link has a real href, let it navigate normally
  });
});

function toggleSubOptions() {
  const subOptions = document.getElementById('nav-resources-sub-options');

  if (subOptions.style.right === '0vw') {
    subOptions.style.right = '-150vw'; // Hide it by sliding out to the right
  } else {
    subOptions.style.right = '0vw'; // Show it by sliding in from the right
  }
}