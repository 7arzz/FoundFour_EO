import Image from 'next/image';

// Inline SVG brand icons (lucide-react v1.17.0 does not include brand icons)
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const Footer = () => {
    return (
        <footer>
            <div className="footer-grid">
                <div className="footer-col">
                    <div className="logo" style={{ marginBottom: '1.5rem' }}>
                        <Image 
                            src="/LogoFinal.jpg" 
                            alt="Logo Found Four EO" 
                            height={50} 
                            width={50} 
                            className="rounded-full bg-white p-1.5 shadow-xl border border-white/20"
                        />
                        <div className="flex flex-col">
                            <span className="font-serif italic leading-none text-2xl">Found <span className="text-brand-gold">Four</span></span>
                            <span className="logo-subtitle">Event Organizer</span>
                        </div>
                    </div>
                    <p style={{ color: '#666', maxWidth: '300px' }}>Mewujudkan momen istimewa Anda menjadi kenyataan melalui perencanaan yang presisi dan sentuhan mewah di setiap detail.</p>
                </div>
                <div className="footer-col">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>SERVICES</h4>
                    <ul>
                        <li><a href="#services">Wedding Planning</a></li>
                        <li><a href="#services">Corporate Events</a></li>
                        <li><a href="#services">Private Parties</a></li>
                        <li><a href="#services">Brand Activation</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>CONTACT</h4>
                    <ul>
                        <li>Surabaya, Indonesia</li>
                        <li><a href="https://wa.me/6287878385333" target="_blank" rel="noopener noreferrer">wa.me/6287878385333</a></li>
                        <li>ig: @foundfour_eo</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 FOUNDFOUR EO. All Rights Reserved.</p>
                <div className="social-links">
                    <a href="#"><InstagramIcon /></a>
                    <a href="#"><FacebookIcon /></a>
                    <a href="#"><TwitterIcon /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
