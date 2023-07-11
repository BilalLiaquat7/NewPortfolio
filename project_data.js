// Email Validation
const emailInput = document.getElementById("email");
emailInput.addEventListener("input", validateEmail);

function validateEmail(event) {
  const text = event.target.value;
  const lowercaseText = text.toLowerCase();
  const isLowerCase = text === lowercaseText;
  emailInput.setCustomValidity(
    isLowerCase ? "" : "Please write email in lowercase"
  );
}

// Local Storage
const form = document.getElementById("form");
const dataKey = "formData";

form.addEventListener("submit", saveFormData);

function saveFormData(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const dataObject = Object.fromEntries(formData);
  const jsonData = JSON.stringify(dataObject);
  localStorage.setItem(dataKey, jsonData);
}

window.addEventListener("DOMContentLoaded", populateFormData);

function populateFormData() {
  const storedData = localStorage.getItem(dataKey);
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    emailInput.value = parsedData.email || "";
    document.getElementById("name").value = parsedData.text || "";
    document.getElementById("message").value = parsedData.message || "";
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

const modal = document.getElementById("model");

function createProjectCard(card) {
  const project = document.createElement("div");
  project.classList.add("modelsection");
  project.classList.add(card.button);
  project.innerHTML = `
    <div class="header">
      <div>
        <h2>${card.Projectname}</h2>
        <div class="card_historyy">
          <div class="card_history_detaill">
            <p>${card.history.proName}</p>
          </div>
          <div>
            <img src="./assets/Counter.svg" alt="dot" />
          </div>
          <div class="card_history_detail">
            <p>${card.history.tech}</p>
          </div>
          <div>
            <img src="./assets/Counter.svg" alt="dot" />
          </div>
          <div class="card_history_detail">
            <p>${card.history.year}</p>
          </div>
        </div>
      </div>
      <a href="#" id="modelcross" class="Menuicon">
        <span id="modelcrossIcon" style="color: black" class="material-symbols-outlined">
          close
        </span>
      </a>
    </div>
    <div class="modelimage">
      <img class="card_imagee" src="${card.image}" alt="Tonic Project" />
    </div>
    <div class="modeldisc">
      <div class="card_discription">
        <p>${card.disc}</p>
      </div>
      <div class="card_tags">
        <div class="modeltags">
          <div class="tag">
            <span class="small">${card.languages.html}</span>
          </div>
          <div class="tag">
            <span class="small">${card.languages.css}</span>
          </div>
          <div class="tag">
            <span class="small">${card.languages.javascript}</span>
          </div>
        </div>
        <hr class="hr">
        <div class="card_action">
          <button class="modelbtn button button1" type="button">
            See live <img style="height: 24px; width: 24px; margin-left: 6px;" src="./assets/see_live.svg" alt="">
          </button>
          <button class="modelbtn button button1" type="button">
            See source <img style="height: 24px; width: 24px; margin-left: 6px;" src="./assets/see_source.svg" alt="">
          </button>
        </div>
      </div>
    </div>`;

  const closeIcon = project.querySelector("#modelcrossIcon");
  closeIcon.addEventListener("click", closeModal);

  return project;
}

function button(id) {
  const card = projects.find((card) => card.id === id);
  if (card) {
    modal.innerHTML = ``;
    modal.appendChild(createProjectCard(card));
    modal.style.display = "flex";
  }
}

function closeModal() {
  modal.style.display = "none";
  modal.innerHTML = "";
}
