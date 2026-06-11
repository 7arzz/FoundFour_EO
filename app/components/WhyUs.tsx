import { Search, Users, ShieldCheck } from 'lucide-react';

const WhyUs = () => {
    return (
        <section className="why-us">
            <div className="section-header reveal">
                <p>The FOUNDFOUR EO Difference</p>
                <h2>Why Choose Us?</h2>
            </div>
            <div className="why-grid">
                <div className="why-card reveal">
                    <div className="service-icon"><Search size={48} /></div>
                    <h3>Detail Oriented</h3>
                    <p>Kami sangat teliti dalam merencanakan setiap aspek acara, memastikan tidak ada detail kecil pun yang terlewatkan.</p>
                </div>
                <div className="why-card reveal">
                    <div className="service-icon"><Users size={48} /></div>
                    <h3>Solid Network</h3>
                    <p>Memiliki jaringan luas dengan vendor-vendor premium terbaik untuk menjamin kualitas layanan di acara Anda.</p>
                </div>
                <div className="why-card reveal">
                    <div className="service-icon"><ShieldCheck size={48} /></div>
                    <h3>Seamless Execution</h3>
                    <p>Manajemen hari-H yang tenang dan profesional untuk memastikan acara berjalan lancar dari awal hingga akhir.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
