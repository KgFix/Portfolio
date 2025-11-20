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
                <a href="https://trading-analysis-ai.onrender.com/" target="_blank" rel="noreferrer"><h2>AI Financial Intelligence Platform</h2></a>
                <p>Engineered a full-stack financial analysis platform using Plotly Dash and Flask for predicting future stock prices and providing weighted investment suggestions. The system is powered by an optimized, cache-first, agent-based backend integrating web search and a multi-LLM system, which reduced external API data latency by over 70%. This resilient multi-LLM architecture delivers real-time news summarization, sentiment analysis, and probabilistic stock price forecasts. Deployment is streamlined via an automated, production-ready CI/CD pipeline utilizing Docker, Ruff, and Mypy to ensure code quality and type safety.</p>
            </div>
            <div className="project">
                <img src={MarbleGame} className="zoom" alt="Marble Game thumbnail" width="100%"/>
                <h2>Marble Game</h2>
                <p>Unity/C# 3D physics platformer featuring a third-person marble roller, a procedurally generated side-scroller, and a custom-animated boss fight. Engineered complex graphics, AI, and system features, including a predictive AI using negative delta algorithms, custom HLSL shaders for vertex extrusion rendering, and an efficient procedural generation system with queue-based memory management.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;