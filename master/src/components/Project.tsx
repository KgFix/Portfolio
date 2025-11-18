import React from "react";
import TradingAI from '../assets/images/TradingAI.png';
import MarbleGame from '../assets/images/MarbleGame.gif';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://trading-analysis-ai.onrender.com/" target="_blank" rel="noreferrer"><img src={TradingAI} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://trading-analysis-ai.onrender.com/" target="_blank" rel="noreferrer"><h2>Trading AI</h2></a>
                <p>Developed Stock Price Analysis Dashboard powered by AI powered search and analysis of public news feeds.</p>
            </div>
            <div className="project">
                <a href={MarbleGame} target="_blank" rel="noreferrer"><img src={MarbleGame} className="zoom" alt="Marble Game thumbnail" width="100%"/></a>
                <a href="projectpresentation(1).html" target="_blank" rel="noreferrer"><h2>Marble Game</h2></a>
                <p>Designed, developed, and launched a 3D Physics Based Platformer with C#, HLSL, Blender and Unity</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;