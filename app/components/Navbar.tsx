'use client';

import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className={`${isSticky ? 'sticky' : ''} ${isMenuOpen ? 'menu-active' : ''}`}>
            <div className="logo" onClick={() => scrollTo('home')}>
                <Image 
                    src="/LogoFinal.jpg" 
                    alt="Logo Found Four EO" 
                    height={40} 
                    width={40} 
                    className="rounded-full bg-white p-1 shadow-lg border border-white/20"
                />
                <div className="flex flex-col">
                    <span className="font-serif italic leading-none">Found <span className="text-brand-gold">Four</span></span>
                    <span className="logo-subtitle">Event Organizer</span>
                </div>
            </div>
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <a onClick={() => scrollTo('about')}>About</a>
                <a onClick={() => scrollTo('services')}>Services</a>
                <a onClick={() => scrollTo('portfolio')}>Portfolio</a>
                <a onClick={() => scrollTo('booking')} className="mobile-cta">Book Now</a>
            </div>
            <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu size={28} />
            </div>
        </nav>
    );
};

export default Navbar;
