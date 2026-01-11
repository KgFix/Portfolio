import React, { useEffect, useRef } from "react";
import '../assets/styles/Expertise.scss';

function Expertise() {
    const aboutContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const aboutContent = aboutContentRef.current;
        if (!aboutContent) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && window.innerWidth > 1300) {
                        // Fade in profile
                        const profile = aboutContent.querySelector('.profile');
                        if (profile) profile.classList.add('profile__fade-in');
                    }
                });
            },
            { root: null, rootMargin: '0px', threshold: 0.5 }
        );

        observer.observe(aboutContent);

        return () => observer.disconnect();
    }, []);

    return (
    <section className="about" id="about">
        <h2 className="about__heading section-heading">About</h2>

        <div className="about__content" ref={aboutContentRef}>
            <div className="profile">
                <p className="profile__blurb">
                    Passionate about the art of creation in its various forms, with my chosen medium being code. Driven by a philosophy of lifelong learning, I am consistently refining my current skill set while seeking out new horizons. My experience in C++, Java, and Python extends across various languages and frameworks, all with a singular purpose: creating efficient, elegant, and effective solutions.
                </p>
            </div>
            
            <div className="skills">
                <div className="skills__belt-container">
                    <div className="skills__belt">
                        <div className="skills__item skills__item--python">
                            <img src={require('../assets/images/TechIcons/py.png')} alt="Python" />
                        </div>
                        <div className="skills__item skills__item--js">
                            <img src={require('../assets/images/TechIcons/js.png')} alt="JavaScript" />
                        </div>
                        <div className="skills__item skills__item--react">
                            <img src={require('../assets/images/TechIcons/react.png')} alt="React" />
                        </div>
                        <div className="skills__item skills__item--node">
                            <img src={require('../assets/images/TechIcons/node.png')} alt="Node.js" />
                        </div>
                        <div className="skills__item skills__item--git">
                            <img src={require('../assets/images/TechIcons/git.png')} alt="Git" />
                        </div>
                        <div className="skills__item skills__item--html">
                            <img src={require('../assets/images/TechIcons/html.png')} alt="HTML" />
                        </div>
                        <div className="skills__item skills__item--css">
                            <img src={require('../assets/images/TechIcons/css.png')} alt="CSS" />
                        </div>
                        <div className="skills__item skills__item--nextjs">
                            <img src={require('../assets/images/TechIcons/nextjs.png')} alt="Next.js" />
                        </div>
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="skills__belt" aria-hidden="true">
                        <div className="skills__item skills__item--python">
                            <img src={require('../assets/images/TechIcons/py.png')} alt="Python" />
                        </div>
                        <div className="skills__item skills__item--js">
                            <img src={require('../assets/images/TechIcons/js.png')} alt="JavaScript" />
                        </div>
                        <div className="skills__item skills__item--react">
                            <img src={require('../assets/images/TechIcons/react.png')} alt="React" />
                        </div>
                        <div className="skills__item skills__item--node">
                            <img src={require('../assets/images/TechIcons/node.png')} alt="Node.js" />
                        </div>
                        <div className="skills__item skills__item--git">
                            <img src={require('../assets/images/TechIcons/git.png')} alt="Git" />
                        </div>
                        <div className="skills__item skills__item--html">
                            <img src={require('../assets/images/TechIcons/html.png')} alt="HTML" />
                        </div>
                        <div className="skills__item skills__item--css">
                            <img src={require('../assets/images/TechIcons/css.png')} alt="CSS" />
                        </div>
                        <div className="skills__item skills__item--nextjs">
                            <img src={require('../assets/images/TechIcons/nextjs.png')} alt="Next.js" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Expertise;