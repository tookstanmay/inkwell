import React, { useState, useEffect } from 'react';
import "../index.css";

export const Github = () => {
    const [projects, setProjects] = useState([]);
    const titles = ["snakeGame", "weather", "BudgetBook", "movie-database-app-netflix", "change-text", "alarmClock"];
    const formatted_titles = {
        "snakeGame": "Snake Game",
        "weather": "Weather App",
        "BudgetBook": "Budget Book",
        "movie-database-app-netflix": "Netflix Clone",
        "change-text": "Change Text",
        "alarmClock": "Alarm Clock"
    };
    const projects_links = {
        "snakeGame": "https://tookstanmay.github.io/snakeGame",
        "weather": "https://tookstanmay.github.io/weather",
        "BudgetBook": "https://budgetbook-amber.vercel.app/",
        "movie-database-app-netflix": "https://netflix-tookstanmay.web.app/",
        "change-text": "https://change-text-indol.vercel.app/",
        "alarmClock": "https://tookstanmay.github.io/alarmClock"
    }

    useEffect(() => {
        const username = 'tookstanmay'; // Replace with your username
        const url = `https://api.github.com/users/${username}/repos`;

        fetch(url)
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="project-container">
            <h1>My Projects on GitHub</h1>
            <ul className="project-list">
                {projects.filter((project) => titles.includes(project.name))
                    .map((project) => (
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
                            <li key={project.id} className="project-card">
                                <a href={project.html_url} target='__blank' >
                                    <img src='./images/github.png' className='logos' />
                                </a>
                                <span
                                    // href={project.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <h3 className="project-title">{formatted_titles[project.name]}</h3>
                                </span>
                                <a href={projects_links[project.name]} target='__blank'>
                                    <img src='./images/monster.png' className='logos' />
                                </a>
                            </li>
                        </div>
                    ))}
            </ul>
        </div>
    );
}