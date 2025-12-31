import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faLaptopCode, faTools } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const developmentSkills = [
    "Python",
    "C++",
    "C#",
    "Java",
    "Delphi",
    "TypeScript",
    "SQL",
    "React",
    "Node.js",
    "FastAPI",
    "Flask",
    "Pandas",
];

const devOpsSkills = [
    "AWS (EC2, DynamoDB)",
    "Oracle Cloud",
    "Docker",
    "CI/CD (GitHub Actions)",
    "Git",
    "Ruff",
    "Mypy",
];

const gameDevSkills = [
    "Unity",
    "C++",
    "C#",
    "SFML",
    "HLSL/GLSL",
    "Blender",
    "LLM APIs",
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
                    <p>Strong engineering foundation in architecting scalable, high-performance solutions across the full Software Development Lifecycle. Experience building production-ready applications with React frontends and Python backends (FastAPI/Flask), including cloud-native deployments on AWS and Oracle Cloud.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {developmentSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faTools} size="3x"/>
                    <h3>Cloud & DevOps</h3>
                    <p>Practical experience with cloud technologies including AWS (EC2, DynamoDB) and Oracle Cloud Infrastructure. Expertise in implementing CI/CD pipelines with Docker and GitHub Actions for reliable, automated deployments. Code quality is ensured through static analysis tools including Ruff and Mypy.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {devOpsSkills.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGears} size="3x"/>
                    <h3>Systems & Game Engineering</h3>
                    <p>Deep expertise in designing efficient, complex systems with a focus on performance optimization. Experience includes developing high-performance game engines in C++ with SFML, implementing predictive AI algorithms, procedural generation systems, and building multi-LLM agent pipelines for real-time data analysis.</p>
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