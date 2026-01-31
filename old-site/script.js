// Mock Data (Replace with API calls or real data later)
// Mock Data (Replace with API calls or real data later)
const projects = [
    {
        title: "Data Analyst @ Xu Lab",
        description: "Take a look at what I've been working on as a Data Analyst at the UW Xu Lab.",
        link: "/xulab.html",
        tags: ["Python", "Flask", "SQL"]
    },
    {
        title: "Happy Trails",
        description: "Web Application written in JavaScript that compiles information on different national park hiking trails.",
        link: "https://info340-wi21.github.io/project-1-embascom/",
        tags: ["JavaScript", "HTML", "CSS"]
    },
    {
        title: "Meal Planner",
        description: "A work in progress Python Flask web app to meal plan for the week.",
        link: "/mealplan.html",
        tags: ["Python", "Flask", "HTML", "CSS"]
    },
    {
        title: "Safety in Dating App Wireframe",
        description: "Designing for 'The Home of the Future'.",
        link: "/design.html",
        tags: ["Figma", "Wireframe", "UX/UI"]
    },
    {
        title: "U.S. GDP vs Dow Jones Interactive Analysis",
        description: "Shiny App built in R used to analyze the U.S. Economy with interactive data visualizations.",
        link: "https://allykrinsky-info201.shinyapps.io/finalproject/",
        tags: ["R", "Shiny", "Data Visualization"]
    },
    {
        title: "Senior Tech",
        description: "High fidelity wireframe built in Figma to connect senior citizens with tech-savvy individuals.",
        link: "https://www.figma.com/proto/W0vE0YkygmvoGyWuvV9u89/Info-200-Prototype?node-id=1%3A3&scaling=scale-down",
        tags: ["Figma", "Wireframe", "UI/UX Design"]
    }
];

const container = document.getElementById("projects-container");

// Function to Load All Projects
function loadProjects() {
    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "card";
        
        // Generate tags HTML
        const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');

        card.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Learn More</a>
            <div class="tags">${tagsHTML}</div>
        `;
        container.appendChild(card);
    });
}

// Initial Load
loadProjects();

