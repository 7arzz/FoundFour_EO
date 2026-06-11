'use client';

import { useState } from 'react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, date, message } = formData;
        const phoneNumber = "6287878385333";
        const text = `Halo FOUNDFOUR EO! Saya ingin konsultasi reservasi:%0A%0ANama: ${name}%0ATanggal: ${date}%0APesan: ${message}`;
        window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    };

    return (
        <section className="booking" id="booking">
            <div className="booking-info reveal">
                <h2>Siap Mewujudkan Event Impian Anda?</h2>
                <p>Mari ciptakan momen luar biasa bersama. Isi formulir ini, dan tim kami akan segera menghubungi Anda melalui WhatsApp untuk mendiskusikan detail acara.</p>
                <p><strong>Lokasi:</strong> Surabaya, Indonesia</p>
                <p><strong>Waktu Respon:</strong> Dalam 2 jam</p>
            </div>
            <form className="booking-form reveal" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nama Lengkap</label>
                    <input type="text" id="name" placeholder="Nama Anda" value={formData.name} onChange={handleChange} required suppressHydrationWarning />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Tanggal Acara</label>
                    <input type="date" id="date" value={formData.date} onChange={handleChange} required suppressHydrationWarning />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Pesan / Detail Acara</label>
                    <textarea id="message" rows={3} placeholder="Ceritakan sedikit tentang rencana acara Anda..." value={formData.message} onChange={handleChange} suppressHydrationWarning></textarea>
                </div>
                <button type="submit" className="booking-submit" suppressHydrationWarning>Kirim ke WhatsApp</button>
            </form>
        </section>
    );
};

export default BookingForm;
