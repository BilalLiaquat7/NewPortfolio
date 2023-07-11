// Email Validation
const emailInput = document.getElementById('email');
emailInput.addEventListener('input', validateEmail);

function validateEmail(event) {
  const text = event.target.value;
  const lowercaseText = text.toLowerCase();
  const isLowerCase = text === lowercaseText;
  emailInput.setCustomValidity(isLowerCase ? '' : 'Please write email in lowercase');
}

// Local Storage
const form = document.getElementById('form');
const dataKey = 'formData';

form.addEventListener('submit', saveFormData);

function saveFormData(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const dataObject = Object.fromEntries(formData);
  const jsonData = JSON.stringify(dataObject);
  localStorage.setItem(dataKey, jsonData);
}

window.addEventListener('DOMContentLoaded', populateFormData);

function populateFormData() {
  const storedData = localStorage.getItem(dataKey);
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    emailInput.value = parsedData.email || '';
    document.getElementById('name').value = parsedData.text || '';
    document.getElementById('message').value = parsedData.message || '';
  }
}

//ProjectData
const projects = [
  {
    id: 1,
    image: "./assets/SnapshootPortfolio.svg",
    Projectname: "Tonic",
    history: {
      proName: "CANOPY",
      tech: "Backend Dev",
      year: 2015,
    },
    disc: "A daily selection of privately personalized reads;no accounts or sign-ups required.",
    languages: {
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
    },
    button: "myBtn",
  },
  {
    id: 2,
    image: "./assets/SnapshootPortfolio1.svg",
    Projectname: "Multi-Post",
    history: {
      proName: "CANOPY",
      tech: "Backend Dev",
      year: 2015,
    },
    disc: "A daily selection of privately personalized reads;no accounts or sign-ups required.",
    languages: {
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
    },
    button: "myBtn",
  },
  {
    id: 3,
    image: "./assets/SnapshootPortfolio2.svg",
    Projectname: "Tonic",
    history: {
      proName: "CANOPY",
      tech: "Backend Dev",
      year: 2015,
    },
    disc: "A daily selection of privately personalized reads;no accounts or sign-ups required.",
    languages: {
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
    },
    button: "myBtn",
  },
  {
    id: 4,
    image: "./assets/SnapshootPortfolio3.svg",
    Projectname: "MultiPost",
    history: {
      proName: "CANOPY",
      tech: "Backend Dev",
      year: 2015,
    },
    disc: "A daily selection of privately personalized reads;no accounts or sign-ups required.",
    languages: {
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
    },
    button: "myBtn",
  },
];
const section = document.getElementById("works");
const projectMethod = () => {
  const projectsHTML = projects
    .map(
      (card) => `
      <div class="project">
        <div>
          <img class="image" src="${card.image}" alt="Project">
        </div>
        <div class="projectDescription">
          <div class="projectTitle">
            <span class="heading">${card.Projectname}</span>
          </div>
          <ul class="projectTools">
            <li class="canopy">${card.history.proName}</li>
            <li><img src="./assets/Counter.svg" alt="dot"></li>
            <li>${card.history.tech}</li>
            <li><img src="./assets/Counter.svg" alt="dot"></li>
            <li>${card.history.year}</li>
          </ul>
          <div class="projectSummary">
            <p>${card.disc}</p>
          </div>
          <ul class="projectTechnology">
            <li class="tag">${card.languages.html}</li>
            <li class="tag">${card.languages.css}</li>
            <li class="tag">${card.languages.javascript}</li>
          </ul>
          <div class="projectDemo">
            <button onclick="button(${card.id})" class="button button1" id="btn" type="button">See project</button>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  section.innerHTML = projectsHTML;
};

projectMethod();

