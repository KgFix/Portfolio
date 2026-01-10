import React, { useState } from "react";
import '../assets/styles/Project.scss';

// Import images for TradingAI project
import TradingAI1 from '../assets/images/TradingAI/1.png';
import TradingAI2 from '../assets/images/TradingAI/2.png';
import TradingAI3 from '../assets/images/TradingAI/3.png';
import TradingAI4 from '../assets/images/TradingAI/4.png';
import TradingAI5 from '../assets/images/TradingAI/5.png';

// Import images for MarbleGame project
import MarbleGame1 from '../assets/images/MarbleGame/as.png';
import MarbleGame2 from '../assets/images/MarbleGame/asd.png';
import MarbleGame3 from '../assets/images/MarbleGame/dasasd.png';
import MarbleGame4 from '../assets/images/MarbleGame/dasd.png';
import MarbleGame5 from '../assets/images/MarbleGame/dasdasd.png';
import MarbleGame6 from '../assets/images/MarbleGame/dsa.png';
import MarbleGame7 from '../assets/images/MarbleGame/fas.png';
import MarbleGame8 from '../assets/images/MarbleGame/MarbleGame.gif';

// Import images for VisualNovelEngine project
import VisualNovel1 from '../assets/images/VisualNovelEngine/MainMenu.jpg';
import VisualNovel2 from '../assets/images/VisualNovelEngine/BossFight.jpg';
import VisualNovel3 from '../assets/images/VisualNovelEngine/QuizMechanic.jpg';
import VisualNovel4 from '../assets/images/VisualNovelEngine/RhythmMinigame.jpg';

interface ProjectData {
    title: string;
    description: string;
    images: string[];
    link?: string;
    githubLink?: string;
}

const projectsData: ProjectData[] = [
    {
        title: "Agentic Stock Intelligence Platform",
        description: "Full-stack financial analysis platform for predicting future stock prices and providing weighted investment suggestions.",
        images: [TradingAI1, TradingAI2, TradingAI3, TradingAI4, TradingAI5],
        link: "https://trading-analysis-ai.onrender.com/",
        githubLink: "https://github.com/KgFix/AgenticStockIntelligencePlatform"
    },
    {
        title: "Marble Game",
        description: "Unity/C# 3D physics platformer featuring a third-person marble roller, a procedurally generated side-scroller, and a custom-animated boss fight.",
        images: [MarbleGame1, MarbleGame2, MarbleGame3, MarbleGame4, MarbleGame5, MarbleGame6, MarbleGame7, MarbleGame8],
        githubLink: "https://github.com/KgFix/Marble"
    },
    {
        title: "Visual Novel Game Engine",
        description: "Made from scratch using C++ and SFML for a 2D story-based quiz game, including various minigames, decision-based storylines and a final boss fight.",
        images: [VisualNovel1, VisualNovel2, VisualNovel3, VisualNovel4],
        githubLink: "https://github.com/leshenn/VisualNovelGame"
    }
];

function ProjectCard({ project, alignLeft }: { project: ProjectData; alignLeft: boolean }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % project.images.length
        );
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
        );
    };

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    const handleModalClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const ImageSection = () => (
        <a href={project.link || project.githubLink || "#"} target={project.link || project.githubLink ? "_blank" : "_self"} rel="noreferrer">
            <div className="project__image-container">
                <div className="project__image-image">
                    <img 
                        src={project.images[currentImageIndex]} 
                        alt={`${project.title} screenshot`}
                        onClick={(e) => {
                            if (project.images.length > 1) {
                                e.preventDefault();
                                openModal();
                            }
                        }}
                    />
                </div>
            </div>
        </a>
    );

    const InfoSection = () => (
        <div className="project__info">
            <h3 className="project__title">{project.title}</h3>
            <p className="project__description">{project.description}</p>
            {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                    <div className="project__live-2">Live app</div>
                </a>
            )}
            {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <div className="project__live-2">Learn more</div>
                </a>
            )}
        </div>
    );

    return (
        <>
            <div className={`project ${alignLeft ? 'project-left' : 'project-right'}`}>
                {alignLeft ? (
                    <>
                        <ImageSection />
                        <InfoSection />
                    </>
                ) : (
                    <>
                        <InfoSection />
                        <ImageSection />
                    </>
                )}
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={handleModalClick}>
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                            ×
                        </button>
                        <img 
                            src={project.images[currentImageIndex]} 
                            alt={`${project.title} ${currentImageIndex + 1}`}
                            className="modal-image"
                        />
                        {project.images.length > 1 && (
                            <>
                                <button className="modal-arrow-btn modal-prev-btn" onClick={prevImage} aria-label="Previous image">
                                    ‹
                                </button>
                                <button className="modal-arrow-btn modal-next-btn" onClick={nextImage} aria-label="Next image">
                                    ›
                                </button>
                                <div className="modal-image-indicator">
                                    {currentImageIndex + 1} / {project.images.length}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

function Project() {
    return (
        <section className="projects" id="projects">
            <h2 className="projects__heading section-heading">Projects</h2>
            
            {projectsData.map((project, index) => (
                <ProjectCard 
                    key={index} 
                    project={project} 
                    alignLeft={index % 2 === 0}
                />
            ))}
        </section>
    );
}

export default Project;