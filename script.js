const mobileNav = document.querySelector('.mobile-nav');
const toggleButton = document.querySelector('.toggle-button');
const backDrop = document.querySelector('.backdrop');
const mobileNavItemsList = document.querySelectorAll('.mobile-nav .nav-items a');
const desktopNavItemsList = document.querySelectorAll('.container-items .nav-items a');

function scrollSmoothlyToTarget(targetId) {
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
}


for (let i = 0; i < desktopNavItemsList.length; i++) {
  desktopNavItemsList[i].addEventListener('click',  function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    scrollSmoothlyToTarget(targetId);
  });
}

for (let i= 0 ; i < mobileNavItemsList.length ; i++) {
  mobileNavItemsList[i].addEventListener('click', function (event)  {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    scrollSmoothlyToTarget(targetId);
    mobileNav.style.display = 'none';
    backDrop.style.display = 'none';
  });
}

toggleButton.addEventListener('click', () => {
  mobileNav.style.display = 'flex';
  backDrop.style.display = 'block';
});

backDrop.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  backDrop.style.display = 'none';
});
