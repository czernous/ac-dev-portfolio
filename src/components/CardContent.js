import {
  AdobePhotoshop,
  Angular,
  AdobeXd,
  Bootstrap,
  Html5,
  Javascript,
  NodeJs,
  Sass,
} from './Icons';
const CreateContent = () => {
  const content = [
    {
      id: 1,
      title: 'Plato Landing Page',
      category: 'landing_page',
      desc: `This project is a landing page for Online English tutoring service. It features an integrated Mailchimp sign-up form and a contact form`,
      myWork:
        'I created a new design and prototype in Adobe XD, developed the website, and deployed it to Netlify.',
      image:
        '"https://phounton.sirv.com/Images/ac-dev-portfolio/img/plato_english.jpg?format=webp&webp.fallback=jpg"',
      myStack: `${AdobeXd()}
      ${Html5()}
      ${Sass()}
      ${Javascript()}`,

      github: '', //`<a href="https://www.google.com" class="project-link" rel="noopener" target="_blank">View code</a>`,
      live: 'https://www.platoenglishacademy.co.uk',
    },
    {
      id: 2,
      title: 'Swytch Landing Page',
      category: 'landing_page',
      desc: `This landing page was created for an e-bike startup. It features a product slider, embedded video which starts and stops automatically, dynamically generated reviews, etc.`,
      myWork:
        'I created a new design and prototype in Adobe XD, and developed the website.',
      image:
        '"https://phounton.sirv.com/Images/ac-dev-portfolio/img/switch_landing.jpg?format=webp&webp.fallback=jpg"',
      myStack: `${AdobeXd()}
      ${Html5()}
      ${Sass()}
      ${Javascript()}`,

      github: `<a href="https://github.com/czernous/swytch-landing" class="project-link" rel="noopener" target="_blank">View code</a>`,
      live: 'https://czernous.github.io/swytch-landing',
    },
    {
      id: 4,
      title: 'Plumbing Website',
      category: 'design',
      desc: `This project is a service website for a local plumber. It includes a home, about, service and contact pages as well as portfolio. The design is available for sale.`,
      myWork: 'I created new design and prototype in Adobe XD.',
      image:
        '"https://phounton.sirv.com/Images/ac-dev-portfolio/img/plumbing_site.jpg?format=webp&webp.fallback=jpg"',
      myStack: `${AdobeXd()}`,

      github: '', //`<a href="https://www.google.com" class="project-link" rel="noopener" target="_blank">View code</a>`,
      live:
        'https://www.behance.net/gallery/101936711/Plumbing-website-redesign',
    },
    {
      id: 5,
      title: 'Copywriter Portfolio',
      category: 'portfolio',
      desc: `This project is a portfolio I did for a copywriter. It includes a home, about, and contact pages as well as portfolio.`,
      myWork:
        'I created new design in Adobe Photoshop and developed the website.',
      image:
        '"https://phounton.sirv.com/Images/ac-dev-portfolio/img/cw-portfolio.jpg?format=webp&webp.fallback=jpg"',
      myStack: `${AdobePhotoshop()}
      ${Html5()}
      ${Sass()}
      ${Javascript()}`,

      github: '', //`<a href="https://www.google.com" class="project-link" rel="noopener" target="_blank">View code</a>`,
      live: '',
    },
    {
      id: 6,
      title: 'Book app',
      category: 'full_stack',
      desc: `This website connects to the New York Times API and pulls data on the current bestselling books.`,
      myWork: 'I created Express webserver with GraphQL and Apollo',
      image:
        '"https://phounton.sirv.com/Images/ac-dev-portfolio/img/getbestsellers.herokuapp.com_books.png?format=webp&webp.fallback=jpg"',
      myStack: `${NodeJs()}
      ${Html5()}
      ${Bootstrap()}
      ${Javascript()}`,

      github: `<a href="https://github.com/czernous/NYT_BESTSELLERS" class="project-link" rel="noopener" target="_blank">View code</a>`, //,
      live: 'https://getbestsellers.herokuapp.com/books',
    },
    {
      id: 7,
      title: 'MEAN RSVP app',
      category: ['full_stack', 'angular'],
      desc: `This app allows users create and edit events, and RSVP to events. It supports user authentication provided by Auth0.`,
      myWork:
        'I created the app using Angular 11, Express, and MongoDB. I also set up NGINX server with reverse proxy.',
      image:
        '"https://phounton.sirv.com/Images/ac-dev-portfolio/img/34.71.25.13_admin.png"',
      myStack: `${NodeJs()}
      ${Html5()}
      ${Bootstrap()}
      ${Angular()}`,
      github: ``, //,
      live: 'https://34.71.25.13/',
    },
    {
      id: 8,
      title: 'Express blog app',
      category: 'full_stack',
      desc: `A fully functional blog application. Available for use free of charge.`,
      myWork:
        'I created this app using Express, MongoDB, SemanticUI, PassportJS, etc. Full description is available in the repository Readme file.',
      image:
        '"https://phounton.sirv.com/Images/ac-dev-portfolio/img/express_blog.png"',
      myStack: `${NodeJs()}
      ${Html5()}
      ${Javascript()}`,
      github: `<a href="https://github.com/czernous/express-blog-app" class="project-link" rel="noopener" target="_blank">View code</a>`, //,
      live: `https://github.com/czernous/express-blog-app`,
    },
  ];
  return content;
};
export default CreateContent;
