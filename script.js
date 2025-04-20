const nameText = "Nathaneil Kurkalang";
const titleText = "MCA Student | Web Developer";
const typedNameEl = document.getElementById('typed-name');
const typedTitleEl = document.getElementById('typed-title');

function typeText(element, text, delay = 100) {
    return new Promise((resolve) => {
        let i = 0;
        element.textContent = '';
        const interval = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                resolve();
            }
        }, delay);
    });
}

async function runTyping() {
    await typeText(typedNameEl, nameText, 120);
    await new Promise(r => setTimeout(r, 500));
    await typeText(typedTitleEl, titleText, 80);
}
runTyping();

const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('dateTime').textContent = now.toLocaleDateString(undefined, options);
}
setInterval(updateDateTime, 1000);
updateDateTime();

const projects = [{
        title: "Task Manager App",
        description: "A task management app with drag-and-drop functionality, real-time sync, and user authentication.",
        link: "https://example.com/task-manager"
    },
    {
        title: "Portfolio Website",
        description: "A sleek, modern portfolio site showcasing projects and skills, built with vanilla JS, HTML, and CSS.",
        link: "https://example.com/portfolio"
    }
];

const projectsSection = document.getElementById('projects');

function loadProjects() {
    projectsSection.querySelectorAll('.project-card').forEach(card => card.remove());

    projects.forEach(({ title, description, link }) => {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
      <a href="${link}" target="_blank" rel="noopener noreferrer" aria-label="View project: ${title}">View Project &rarr;</a>
    `;
        projectsSection.appendChild(card);
    });
}
loadProjects();
const contactForm = document.getElementById('contactForm');
const feedbackEl = document.getElementById('formFeedback');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    feedbackEl.textContent = '';
    feedbackEl.className = '';

    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!email) {
        feedbackEl.textContent = 'Email is required.';
        feedbackEl.className = 'error-message';
        contactForm.email.focus();
        return;
    }
    if (!validateEmail(email)) {
        feedbackEl.textContent = 'Please enter a valid email address.';
        feedbackEl.className = 'error-message';
        contactForm.email.focus();
        return;
    }
    if (!message) {
        feedbackEl.textContent = 'Message cannot be empty.';
        feedbackEl.className = 'error-message';
        contactForm.message.focus();
        return;
    }

    feedbackEl.textContent = 'Thank you! Your message has been sent.';
    feedbackEl.className = 'success-message';
    contactForm.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}