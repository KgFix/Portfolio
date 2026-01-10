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

                        // Fade in skills one at a time
                        const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

                        const fadeInSkill = async (className: string, delay: number) => {
                            await sleep(delay);
                            const skill = aboutContent.querySelector(className);
                            if (skill) skill.classList.add('skills__item-fade-in');
                        };

                        fadeInSkill('.skills__item--python', 1000);
                        fadeInSkill('.skills__item--js', 1100);
                        fadeInSkill('.skills__item--react', 1200);
                        fadeInSkill('.skills__item--node', 1300);
                        fadeInSkill('.skills__item--git', 1400);
                        fadeInSkill('.skills__item--html', 1500);
                        fadeInSkill('.skills__item--css', 1600);
                        fadeInSkill('.skills__item--sass', 1700);
                        fadeInSkill('.skills__item--nextjs', 1800);
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
                    Final-year Computer Science student focused on creating high-quality, meaningful solutions. Strong engineering foundation in C++, Java, Python, SQL, Delphi and C# with a focus on learning architecting for scalability and performance optimization. With growing experience across the full Software Development Lifecycle (SDLC), including CI/CD and cloud technologies like AWS/Docker, I am eager to contribute to translating complex requirements into well-engineered code. I am seeking an immersive opportunity to expand my technical horizons and apply this drive for innovation in a collaborative environment.
                </p>
            </div>
            
            <div className="skills">
                <div className="skills__grid">
                    <div className="skills__item skills__item--python">
                        <img src={require('../assets/images/py.png')} alt="Python" />
                    </div>
                    <div className="skills__item skills__item--js">
                        <img src={require('../assets/images/js.png')} alt="JavaScript" />
                    </div>
                    <div className="skills__item skills__item--react">
                        <img src={require('../assets/images/react.png')} alt="React" />
                    </div>
                    <div className="skills__item skills__item--node">
                        <img src={require('../assets/images/node.png')} alt="Node.js" />
                    </div>
                    <div className="skills__item skills__item--git">
                        <img src={require('../assets/images/git.png')} alt="Git" />
                    </div>
                    <div className="skills__item skills__item--html">
                        <img src={require('../assets/images/html.png')} alt="HTML" />
                    </div>
                    <div className="skills__item skills__item--css">
                        <img src={require('../assets/images/css.png')} alt="CSS" />
                    </div>
                    <div className="skills__item skills__item--sass">
                        <img src={require('../assets/images/sass.png')} alt="Sass" />
                    </div>
                    <div className="skills__item skills__item--nextjs">
                        <img src={require('../assets/images/nextjs.png')} alt="Next.js" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Expertise;