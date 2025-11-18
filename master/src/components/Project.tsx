import React from "react";
import TradingAI from '../assets/images/TradingAI.png';
import MarbleGame from '../assets/images/MarbleGame.png';
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
                <img src={MarbleGame} className="zoom" alt="Marble Game thumbnail" width="100%"/>
                <h2>Marble Game</h2>
                <p>Unity/C# 3D physics platformer featuring a third-person marble roller, a procedurally generated side-scroller, and a custom-animated boss fight. The project utilizes HLSL shaders and procedural animations for distinct visual and gameplay enhancements.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;