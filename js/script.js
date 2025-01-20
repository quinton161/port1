const serviceDescriptions = {
    web: {
      title: "Web Design Services",
      description: "Professional web design solutions including responsive layouts, modern UI implementation, and custom website development. We focus on creating fast, user-friendly, and visually appealing websites that drive results."
    },
    uiux: {
      title: "UI/UX Design Services",
      description: "Comprehensive UI/UX design services focusing on user research, wireframing, prototyping, and creating intuitive user interfaces. We ensure seamless user experiences across all digital platforms."
    },
    app: {
      title: "App Design Services",
      description: "Mobile app design solutions for iOS and Android platforms. We create engaging, functional, and user-friendly mobile applications with modern design patterns and smooth interactions."
    }
  };
  
  const serviceItems = document.querySelectorAll('.service-item');
  const popup = document.getElementById('servicePopup');
  const popupTitle = document.getElementById('popupTitle');
  const popupDescription = document.getElementById('popupDescription');
  const closeBtn = document.querySelector('.close-btn');
  
  serviceItems.forEach(item => {
    item.addEventListener('click', () => {
      const serviceType = item.getAttribute('data-service');
      const service = serviceDescriptions[serviceType];
      
      popupTitle.textContent = service.title;
      popupDescription.textContent = service.description;
      popup.style.display = 'block';
    });
  });
  
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  }); 
//Array of projects
const projects = [
    {
        title : ' persnoal portfolio',
        description : "A showcase of Quinton personal portfolio and projects. ",
        url:'https://quinton161.github.io/portfolio/'
    },
    {
        title : ' peeckock',
        description : "A showcase of Quinton personal portfolio and projects. ",
        url:'https://quinton161.github.io/Peeckock/'
    },
    {
        title : ' javis Ai rebot',
        description : "A showcase of Quinton personal portfolio and projects. ",
        url:'https://quinton161.github.io/javis/'
    },
    {
        title : ' quily chart bot',
        description : "A showcase of Quinton personal portfolio and projects. ",
        url:'https://quinton161.github.io/Quily/'
    },
   
    {
        title : ' Movies flakes',
        description : "A showcase of Quinton personal portfolio and projects. ",
        url:'https://quinton161.github.io/flakesmovies/'
    },
];
// Fuction to load projects
function loadprojects() {
    const projectsList = document.getElementById('project-list');

    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <iframe src="${project.url}" title="${project.title}" class="project-iframe"></iframe>
        `;

        projectsList.appendChild(projectCard);

    });
}

// Load projects when DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadprojects);