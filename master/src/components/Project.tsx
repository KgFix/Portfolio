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
                <a href="https://trading-analysis-ai.onrender.com/" target="_blank" rel="noreferrer"><h2>AI Stock Price Predictor</h2></a>
                <p>Developed a financial intelligence dashboard using Python and its frameworks for stock price analysis and visualization. The application integrates an AI-powered search and natural language processing (NLP) to analyze and summarize public news feeds for actionable market insights.</p>
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