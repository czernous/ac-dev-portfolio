const showSections = () => {
  const navigate = document.querySelectorAll('.navigate');
  const sections = document.querySelectorAll('.main-content');
  window.addEventListener('DOMContentLoaded', () => {
    sections[0].style.display = 'flex';
  });
  //filter items
  navigate.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].dataset.id === category) {
          sections[i].style.display = 'flex';
        } else {
          sections[i].style.display = 'none';
        }
      }
    });
  });
};
export default showSections;
