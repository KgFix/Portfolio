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
    const [accentColor, setAccentColor] = useState<string>('#5a9bff'); // Default blue

    const handleAccentColorChange = () => {
        const colors = ['#5a9bff', '#5aff7d', '#ff4d5a', '#ffde5a', '#ff9c5a']; // blue, green, red, yellow, orange
        const currentIndex = colors.indexOf(accentColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        setAccentColor(colors[nextIndex]);
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        
        // Prevent zoom and maintain fixed sizes
        const preventZoom = (e: WheelEvent | KeyboardEvent) => {
            if (e instanceof WheelEvent && e.ctrlKey) {
                e.preventDefault();
            } else if (e instanceof KeyboardEvent) {
                if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')) {
                    e.preventDefault();
                }
            }
        };

        // Detect and counteract zoom
        const maintainZoom = () => {
            const zoom = Math.round(window.devicePixelRatio * 100);
            if (zoom !== 100) {
                const scale = 100 / zoom;
                document.body.style.transform = `scale(${scale})`;
                document.body.style.transformOrigin = 'top left';
                document.body.style.width = `${zoom}%`;
                document.body.style.height = `${zoom}%`;
            } else {
                document.body.style.transform = 'none';
                document.body.style.width = '100%';
                document.body.style.height = '100%';
            }
        };

        window.addEventListener('wheel', preventZoom, { passive: false });
        window.addEventListener('keydown', preventZoom);
        window.addEventListener('resize', maintainZoom);
        maintainZoom();

        return () => {
            window.removeEventListener('wheel', preventZoom);
            window.removeEventListener('keydown', preventZoom);
            window.removeEventListener('resize', maintainZoom);
        };
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
        <Navigation parentToChild={{accentColor}} colorChange={handleAccentColorChange}/>
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