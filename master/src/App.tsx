import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import BgCanvas from './components/BgCanvas';
import './index.scss';
import './assets/styles/BgCanvas.scss';

function App() {
    const accentColor = '#5a9bff'; // Fixed blue accent color

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        
        // Ensure body doesn't overflow
        document.body.style.overflowX = 'hidden';
        document.documentElement.style.overflowX = 'hidden';
      }, []);

    useEffect(() => {
        document.documentElement.style.setProperty('--accent-color', accentColor);
        
        // Convert hex to RGB for the glow effects
        const hex = accentColor.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        document.documentElement.style.setProperty('--accent-color-rgb', `${r}, ${g}, ${b}`);
    }, [accentColor]);

    return (
    <div className={`main-container`}>
        <div className="main-bg">
            <div className="canvas">
                <BgCanvas />
            </div>
        </div>
        <Navigation/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Timeline/>
            <Project/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;