import CreateContent from './CardContent';

const Portfolio = () => {
  // Generate cards from array
  const projects = document.querySelector('#project-grid');
  const displayProjectInfo = (projectInfo) => {
    let displayProject = projectInfo.map(function (item) {
      return `<div class="card">
      <img
        src=${item.image}
        alt="${item.title}"
        crossorigin="anonymous"
      />
      <div class="project-desc" tabindex="0">
        <p class="project-title">${item.title}</p>
        <div class="desc-wrapper">
          <div class="desc-content">
            <p class="desc-heading">Project Description</p>
            <p class="desc-text">
            ${item.desc}
            </p>
            <p class="desc-heading">What I did</p>
            <p class="desc-text">
              ${item.myWork}
            </p>
            ${item.github}
            <a href="${item.live}" class="project-link" rel="noopener" target="_blank">Live</a>
          </div>
          <div class="stack-icons">
          ${item.myStack}
          </div>
        </div>
      </div>
    </div>`;
    });
    displayProject = displayProject.join('');
    projects.innerHTML = displayProject;
  };
  // Create filter buttons
  const container = document.querySelector('.btn-container');
  const displayProjectButtons = () => {
    const categories = CreateContent().reduce(
      function (values, item) {
        let categoryName = item.category;
        if (typeof categoryName === 'object') {
          for (const element of categoryName) {
            !values.includes(element) ? values.push(element) : null;
          }
        }
        if (!values.includes(categoryName)) {
          values.push(categoryName);
          (typeof categoryName === 'object') ? values.pop(categoryName) : null;
        }
        return values;
      },
      ['all']
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button class="filter-btn btn" data-id=${category} 
            type="button">${category}</button>`;
      })
      .join('');
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll('.filter-btn');
    //filter items
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        const projectCategory = CreateContent().filter(function (projectItem) {
          if (projectItem.category.includes(category)) {
            return projectItem;
          }
        });
        if (category === 'all') {
          displayProjectInfo(CreateContent());
        } else {
          displayProjectInfo(projectCategory);
        }
      });
    });
  };
  window.addEventListener('DOMContentLoaded', () => {
    displayProjectInfo(CreateContent());
    displayProjectButtons();
  });
};
export default Portfolio;
