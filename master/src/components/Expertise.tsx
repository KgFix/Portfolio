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
                        fadeInSkill('.skills__item--nextjs', 1700);
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
                <div className="skills__grid">
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
    </section>
    );
}

export default Expertise;