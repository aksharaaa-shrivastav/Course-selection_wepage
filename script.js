function selectCourse(button, courseName) {
  var allCards = document.querySelectorAll('.course-card');
  allCards.forEach(function(card) {
    card.classList.remove('selected-card');
  });

  var allButtons = document.querySelectorAll('.select-btn');
  allButtons.forEach(function(btn) {
    btn.textContent = 'Select Course';
    btn.classList.remove('selected');
  });

  button.closest('.course-card').classList.add('selected-card');
  button.textContent = '✔ Enrolled';
  button.classList.add('selected');

  var banner = document.getElementById('selected-banner');
  var nameEl = document.getElementById('selected-course-name');
  nameEl.textContent = courseName;
  banner.classList.remove('hidden');

  banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function setActive(link) {
  var links = document.querySelectorAll('.nav-link');
  links.forEach(function(l) {
    l.classList.remove('active');
  });
  link.classList.add('active');
}