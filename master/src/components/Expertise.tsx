import React, { useEffect, useRef, useMemo } from "react";
import '../assets/styles/Expertise.scss';

interface TechIcon {
    name: string;
    src: string;
    alt: string;
}

function Expertise() {
    const aboutContentRef = useRef<HTMLDivElement>(null);

    // Dynamically import all PNG files from TechIcons folder
    const techIcons = useMemo<TechIcon[]>(() => {
        const context = (require as any).context('../assets/images/TechIcons', false, /\.png$/);
        return context.keys().map((key: string) => {
            const fileName = key.replace('./', '').replace('.png', '');
            // Sanitize filename for use as CSS class (replace special characters)
            const sanitizedName = fileName.replace('#', 'sharp').replace(/\+/g, 'plus');
            return {
                name: sanitizedName,
                src: context(key),
                alt: fileName.replace(/_/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())
            };
        });
    }, []);

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
                    <div className="skills__belt-wrapper">
                        <div className="skills__belt">
                            {techIcons.map((icon: TechIcon) => (
                                <div key={icon.name} className={`skills__item skills__item--${icon.name}`}>
                                    <img src={icon.src} alt={icon.alt} />
                                </div>
                            ))}
                        </div>
                        {/* Duplicate for seamless loop */}
                        <div className="skills__belt" aria-hidden="true">
                            {techIcons.map((icon: TechIcon) => (
                                <div key={`${icon.name}-duplicate`} className={`skills__item skills__item--${icon.name}`}>
                                    <img src={icon.src} alt={icon.alt} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Expertise;