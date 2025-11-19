import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faLaptopCode, faTools } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const developmentSkills = [
    "Python",
    "C#",
    "Java",
    "C++",
    "SQL",
    "JavaScript",
    "HTML/CSS",
    "Flask",
    "Plotly Dash",
    "React",
    "Node.js",
];

const devOpsSkills = [
    "Git",
    "Docker",
    "CI/CD",
    "Ruff",
    "Mypy",
    "VS Code",
    "Visual Studio",
    "IntelliJ",
    "Eclipse"
];

const gameDevSkills = [
    "Unity",
    "C#",
    "HLSL/GLSL",
    "Blender",
    "LLM APIs",
    "Pandas",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faLaptopCode} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>Building complete web applications from start to finish (SDLC). Solutions are functionalized by bridging the frontend (React) and the backend (Python/Flask) logic, including relational database management.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {developmentSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faTools} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Focus on reliability, quality assurance, and efficient deployment. Implementation of production-ready CI/CD pipelines using Docker streamlines operations. Code integrity is enforced through static analysis and automated tools like Ruff and Mypy.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {devOpsSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGears} size="3x"/>
                    <h3>Algorithm Engineering</h3>
                    <p>Deep expertise in designing and implementing efficient, complex systems. This capability includes developing predictive AI using specialized algorithms in C#, engineering systems for procedural generation, and integrating LLM APIs for data summarization and analysis.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {gameDevSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;