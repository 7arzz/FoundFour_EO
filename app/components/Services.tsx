import { Heart, Briefcase, PartyPopper, Rocket } from 'lucide-react';

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="section-header reveal">
                <p>What We Offer</p>
                <h2>Our Specialized Expertise</h2>
            </div>
            <div className="services-grid">
                {[
                    { icon: <Heart size={40} />, title: 'Wedding Planning', text: 'Mewujudkan pernikahan impian Anda dengan koordinasi penuh, vendor terbaik, dan manajemen hari-H yang tanpa cela.', price: 'Start from 15jt' },
                    { icon: <Briefcase size={40} />, title: 'Corporate Events', text: 'Dari peluncuran produk hingga pertemuan tahunan, kami memastikan citra profesional perusahaan Anda bersinar.', price: 'Custom Quote' },
                    { icon: <PartyPopper size={40} />, title: 'Private Parties', text: 'Ulang tahun, anniversary, atau perayaan spesial lainnya yang dirancang secara unik dan penuh kegembiraan.', price: 'Start from 5jt' },
                    { icon: <Rocket size={40} />, title: 'Brand Activation', text: 'Strategi event yang dirancang khusus untuk meningkatkan engagement audiens dan memperkenalkan brand Anda.', price: 'Custom Quote' }
                ].map((s, i) => (
                    <div className="service-card reveal" key={i}>
                        <div className="service-icon">{s.icon}</div>
                        <h3>{s.title}</h3>
                        <p>{s.text}</p>
                        <div className="price-range">Range: {s.price}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
