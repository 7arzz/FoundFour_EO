'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef<HTMLElement>(null);
    const markRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const dividerRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(markRef.current, { opacity: 1, scale: 1, duration: 1.5, ease: "expo.out" })
          .to(titleRef.current, { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, "-=1")
          .to(subRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.8")
          .to(dividerRef.current, { opacity: 1, duration: 0.8 }, "-=0.5")
          .to(ctaRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.6");

        const mm = gsap.matchMedia();

        mm.add("(min-width: 769px)", () => {
            gsap.to(markRef.current, {
                y: 300,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                }
            });

            gsap.to(titleRef.current, {
                y: 120,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                }
            });
        });

        return () => {
            mm.revert();
        };
    }, []);

    return (
        <section className="hero" id="home" ref={heroRef}>
            <div className="hero-logo-mark" ref={markRef}>ƒ</div>
            <div className="hero-content">
                <h1 ref={titleRef}>Your Dream,<br />Our Mission.</h1>
                <p ref={subRef}>Premium Event Organizer &nbsp;·&nbsp; Wedding & Corporate &nbsp;·&nbsp; Surabaya</p>
                <div className="hero-divider" ref={dividerRef}>
                    <div className="hero-divider-diamond"></div>
                </div>
                <div className="hero-watermark">hanya sebagai contoh by 7arzz</div>
                <a href="https://wa.me/6287878385333?text=Halo%20Found%20Four%20EO!%20Saya%20ingin%20konsultasi%20sekarang." target="_blank" rel="noopener noreferrer" className="cta-btn" ref={ctaRef}>Konsultasi Sekarang</a>
            </div>
        </section>
    );
};

export default Hero;
