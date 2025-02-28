const translations = {
    en: {
        about: "About Me",
        education: "Education",
        experience: "Professional Experience",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact Me",
        downloadCV: "Download CV",
        introduction: "I am a 3rd year Computer Science student.",
        aboutMe: "I am serious, motivated, organized and discreet. My goal is to work in application development and/or web development. I have skills with several development languages such as C#, WPF, HTML/CSS, PHP, Javascript and MySQL.",
        education_text: "I am currently studying computer science at the University of Technology of Compiègne. I obtained my scientific baccalaureate in 2019. I then joined UTC to continue my studies in computer science.",
        experience_text: "I have worked on several web and mobile development projects. In particular, I worked on creating a website for an association. I also developed a mobile application for a company. You can find these projects in my portfolio.",
        skills_text: "I master several programming languages such as HTML, CSS, JavaScript, PHP and Java. I also have skills in web design and mobile development. I am able to create quality websites and mobile applications.",
        projects_text: "Here are some of the projects I have completed. You can find all my projects in my portfolio.",
        name: "Name:",
        message: "Message:",
        send: "Send",
        title_about: "About Me",
        title_education: "My Education",
        title_experience: "My Professional Experience",
        title_skills: "My Skills",
        title_projects: "My Projects",
        title_contact: "Contact Me",
        title_linkedin: "LinkedIn Profile",
        title_github: "GitHub Profile"
    },
    fr: {
        about: "A propos de moi",
        education: "Mes formations",
        experience: "Mes expériences professionnelles",
        skills: "Mes compétences",
        projects: "Mes projets",
        contact: "Contactez-moi",
        downloadCV: "Télécharger CV",
        introduction: "Je suis une étudiante en 3ème année de BUT Informatique.",
        aboutMe: "Je suis sérieuse, motivée, organisée et discrète. J'ai pour projet de travailler dans le développement d'applications et/ou développement web. J'ai des compétences avec plusieurs langages de développement tels que C#, Wpf, HTML/CSS, PHP, Javascript et MySQL.",
        education_text: "Je suis actuellement étudiante en informatique à l'Université de Technologie de Compiègne. J'ai obtenu mon baccalauréat scientifique en 2019. J'ai ensuite intégré l'UTC pour poursuivre mes études dans le domaine de l'informatique.",
        experience_text: "J'ai réalisé plusieurs projets en lien avec le développement web et mobile. J'ai notamment travaillé sur la création d'un site web pour une association. J'ai également développé une application mobile pour une entreprise. Vous pouvez retrouver ces projets sur mon portfolio.",
        skills_text: "Je maîtrise plusieurs langages de programmation tels que le HTML, le CSS, le JavaScript, le PHP et le Java. J'ai également des compétences en design web et en développement mobile. Je suis capable de réaliser des sites web et des applications mobiles de qualité.",
        projects_text: "Voici quelques-uns des projets que j'ai réalisés. Vous pouvez retrouver l'ensemble de mes projets sur mon portfolio.",
        name: "Nom:",
        message: "Message:",
        send: "Envoyer",
        title_about: "À propos de moi",
        title_education: "Mes formations",
        title_experience: "Mes expériences professionnelles",
        title_skills: "Mes compétences",
        title_projects: "Mes projets",
        title_contact: "Contactez-moi",
        title_linkedin: "Profil LinkedIn",
        title_github: "Profil GitHub"
    }
};

// Function to set the language
function setLanguage(language) {
    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', language);
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    // Update all title attributes
    document.querySelectorAll('[data-translate-title]').forEach(element => {
        const key = element.getAttribute('data-translate-title');
        if (translations[language][key]) {
            element.title = translations[language][key];
        }
    });
}

// Function to get user's browser language
function getBrowserLanguage() {
    const language = navigator.language || navigator.userLanguage;
    return language.startsWith('fr') ? 'fr' : 'en';
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Get stored language or use browser language
    const storedLanguage = localStorage.getItem('selectedLanguage') || getBrowserLanguage();
    
    // Set initial language
    setLanguage(storedLanguage);

    // Set initial state of language select
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = storedLanguage;
    }
}); 