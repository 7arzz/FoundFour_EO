'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
    { id: 1, title: 'Artisan Coffee', category: 'F&B Styling', img: '/images/product.jpg' },
    { id: 2, title: 'Luxury Timepiece', category: 'Commercial Product', img: '/images/product.jpg' },
    { id: 3, title: 'Botanical Skincare', category: 'Minimalist Shoot', img: '/images/product.jpg' },
    { id: 4, title: 'Premium Leather', category: 'Fashion Accessory', img: '/images/product.jpg' },
    { id: 5, title: 'Crafted Cocktails', category: 'Nightlife Branding', img: '/images/product.jpg' },
    { id: 6, title: 'Modern Footwear', category: 'Lifestyle Product', img: '/images/product.jpg' },
    { id: 7, title: 'Gourmet Pastry', category: 'Culinary Campaign', img: '/images/product.jpg' },
    { id: 8, title: 'Pure Fragrance', category: 'Beauty Commercial', img: '/images/product.jpg' },
    { id: 9, title: 'Tech Lifestyle', category: 'Digital Campaign', img: '/images/product.jpg' },
    { id: 10, title: 'Velvet Jewelry', category: 'High-End Detail', img: '/images/product.jpg' },
];

type PortfolioItem = typeof portfolioItems[0];

const Portfolio = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [modalData, setModalData] = useState<PortfolioItem | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const rotation = useRef({ x: -10, y: 0 });
    const speed = useRef({ target: 0.2, current: 0 });
    const dragStart = useRef({ x: 0, y: 0, lastX: 0, lastY: 0 });
    const requestRef = useRef<number>(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    speed.current.current = 10;
                    setTimeout(() => { speed.current.target = 0.2; }, 1000);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        gsap.to(".portfolio-bg", {
            y: 200,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        return () => observer.disconnect();
    }, []);

    const animate = () => {
        if (!isDragging) {
            speed.current.current += (speed.current.target - speed.current.current) * 0.05;
            rotation.current.y += speed.current.current;
        }

        if (sliderRef.current) {
            sliderRef.current.style.transform = `rotateX(${rotation.current.x}deg) rotateY(${rotation.current.y}deg)`;
        }

        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [isDragging]);

    const onStart = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        const x = 'pageX' in e ? e.pageX : e.touches[0].pageX;
        const y = 'pageY' in e ? e.pageY : e.touches[0].pageY;
        dragStart.current = { x, y, lastX: rotation.current.y, lastY: rotation.current.x };
    };

    useEffect(() => {
        const onMove = (e: MouseEvent | TouchEvent) => {
            if (!isDragging) return;
            const x = 'pageX' in e ? e.pageX : (e as TouchEvent).touches[0].pageX;
            const y = 'pageY' in e ? e.pageY : (e as TouchEvent).touches[0].pageY;
            const deltaX = x - dragStart.current.x;
            const deltaY = y - dragStart.current.y;
            rotation.current.y = dragStart.current.lastX + deltaX * 0.3;
            rotation.current.x = Math.max(-40, Math.min(40, dragStart.current.lastY - deltaY * 0.3));
        };

        const onEnd = () => setIsDragging(false);

        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onEnd);
        window.addEventListener('touchmove', onMove);
        window.addEventListener('touchend', onEnd);
        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onEnd);
            window.removeEventListener('touchmove', onMove);
            window.removeEventListener('touchend', onEnd);
        };
    }, [isDragging]);

    return (
        <section
            className="portfolio"
            id="portfolio"
            ref={sectionRef}
            onMouseDown={onStart}
            onTouchStart={onStart}
        >
            <div className="portfolio-bg"></div>
            <div className={`section-header reveal ${isVisible ? 'active' : ''}`}>
                <p>Curated Works</p>
                <h2>Editorial Showcase</h2>
            </div>

            <div className="portfolio-container">
                <div
                    className="slider-3d"
                    ref={sliderRef}
                    style={{ '--total': portfolioItems.length } as React.CSSProperties}
                >
                    {portfolioItems.map((item, idx) => (
                        <div
                            key={`${item.id}-${idx}`}
                            className={`slider-item-3d ${isVisible ? 'animate-in' : 'animate-out'}`}
                            style={{
                                '--i': idx + 1,
                                transitionDelay: isVisible ? `${idx * 0.1}s` : `${(portfolioItems.length - idx) * 0.05}s`
                            } as React.CSSProperties}
                            onClick={() => setModalData(item)}
                        >
                            <Image src={item.img} alt={item.title} fill style={{ objectFit: 'cover', borderRadius: '8px' }} />
                            <div className="slider-info-3d">
                                <h3>{item.title}</h3>
                                <p>{item.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="instructions" style={{ opacity: isVisible ? 0.6 : 0 }}>
                Swipe to Rotate • Click to Expand
            </div>

            {/* Modal */}
            <div className={`modal-3d ${modalData ? 'active' : ''}`}>
                {modalData && (
                    <>
                        <div className="close-modal-3d" onClick={() => setModalData(null)}>&times;</div>
                        <div className="modal-content-3d">
                            <Image src={modalData.img} alt={modalData.title} width={600} height={600} className="modal-img-3d" style={{ objectFit: 'cover' }} />
                            <div className="modal-info-3d">
                                <h2>{modalData.title}</h2>
                                <p>This project represents our commitment to excellence in visual storytelling. By combining high-end styling with technical precision, we create imagery that resonates with audiences and elevates brand identity.</p>
                                <div className="price-range">Category: {modalData.category}</div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
