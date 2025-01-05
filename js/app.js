const ul = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// Using DOM, add navigation menu to page. Clicking on navigation menu scrolls page to section.
sections.forEach((section) => {
  const li = document.createElement('li');
  li.textContent = section.dataset.nav;
  li.classList.add('menu__link');
  li.addEventListener('click', (event) => {
    event.preventDefault();
    section.scrollIntoView({ behavior: 'smooth' });
  })
  ul.appendChild(li);
});

// When scrolling page, section in viewport becomes active by adding `.active` css to secion and navigation menu.
const lis = ul.querySelectorAll('li');
function makeActive() {

  sections.forEach((section, i) => {
    const li = lis[i];
    const box = section.getBoundingClientRect();
    const VALUE = 80;

    const isVisible = box.top <= VALUE && box.bottom >= VALUE
    if (isVisible) {
      section.classList.add('active');
      li.classList.add('active');
    } else {
      section.classList.remove('active');
      li.classList.remove('active');
    }
  })
}

document.addEventListener('scroll', makeActive);
