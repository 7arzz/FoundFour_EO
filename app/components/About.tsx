'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const statsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        statsRef.current.forEach((el, i) => {
            if (!el) return;
            gsap.to(el, {
                y: -100 * (i + 1),
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5
                }
            });
        });

        return () => {
            observer.disconnect();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const statItems = [
        { label: 'Successful Events', value: '250+' },
        { label: 'Happy Clients', value: '180+' }
    ];

    return (
        <section className="about" id="about" ref={sectionRef}>
            <div className="stats">
                {statItems.map((item, i) => (
                    <div
                        key={i}
                        className="stat-item reveal"
                        ref={el => { statsRef.current[i] = el; }}
                    >
                        <h3>{item.value}</h3>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
            <div className="about-story reveal">
                <h2>Turning Your <span className="highlight-red">Vision</span> Into Reality.</h2>
                <p>Berdiri di pusat kota Surabaya, FOUNDFOUR EO adalah tim kreatif yang berdedikasi untuk mewujudkan momen-momen istimewa Anda. Kami bukan sekadar perencana acara; kami adalah mitra strategis Anda dalam menciptakan pengalaman yang tak terlupakan.</p>
                <p>Metodologi kami menggabungkan estetika desain yang elegan dengan manajemen logistik yang presisi, memastikan setiap detail acara Anda—mulai dari pernikahan hingga event korporat—berjalan dengan sempurna dan penuh kemewahan.</p>
            </div>
        </section>
    );
};

export default About;
