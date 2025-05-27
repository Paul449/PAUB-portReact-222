import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        // Basic validation
        const formData = new FormData(form.current);
        const name = formData.get('user_name');
        const email = formData.get('user_email');
        const message = formData.get('message');

        if (!name?.trim() || !email?.trim() || !message?.trim()) {
            setStatus('Please fill in all fields.');
            setIsSubmitting(false);
            return;
        }

        emailjs
            .sendForm(
                service_mbpuseu,
                template_94c1u0d,
                form.current,
                {
                    publicKey: vHk_RjMhUMhkuSNR9,
                }
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                    setStatus('✅ Message sent successfully! I\'ll get back to you soon.');
                    form.current.reset(); // Reset the form
                    setIsSubmitting(false);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setStatus('❌ Failed to send message. Please try again or contact me directly.');
                    setIsSubmitting(false);
                }
            );
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h2>Get In Touch</h2>
                <p className="contact-subtitle">
                    Have a project in mind or want to collaborate? I'd love to hear from you!
                </p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-methods">
                        <h3>Let's Connect</h3>
                        <div className="contact-item">
                            <span className="contact-icon">📧</span>
                            <div>
                                <strong>Email</strong>
                                <p>paul.bilbatua@example.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">💼</span>
                            <div>
                                <strong>LinkedIn</strong>
                                <p>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        linkedin.com/in/paulbilbatua
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">📱</span>
                            <div>
                                <strong>GitHub</strong>
                                <p>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        github.com/paul449
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">📍</span>
                            <div>
                                <strong>Location</strong>
                                <p>Available for remote work</p>
                            </div>
                        </div>
                    </div>

                    <div className="availability">
                        <h4>🟢 Currently Available</h4>
                        <p>Open to full-time opportunities, freelance projects, and collaborations.</p>
                    </div>
                </div>

                <div className="contact-form-section">
                    <h3>Send Me a Message</h3>
                    <form ref={form} className="contact-form" onSubmit={sendEmail}>
                        <div className="form-group">
                            <label htmlFor="user_name">Your Name *</label>
                            <input
                                id="user_name"
                                type="text"
                                name="user_name"
                                placeholder="Enter your full name"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="user_email">Your Email *</label>
                            <input
                                id="user_email"
                                type="email"
                                name="user_email"
                                placeholder="your.email@example.com"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project, questions, or just say hello!"
                                rows="6"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="form-actions">
                            <button 
                                type="submit" 
                                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? '📤 Sending...' : '🚀 Send Message'}
                            </button>
                        </div>

                        {status && (
                            <div className={`status-message ${status.includes('✅') ? 'success' : 'error'}`}>
                                {status}
                            </div>
                        )}
                    </form>
                </div>
            </div>

            <div className="contact-footer">
                <p>
                    <strong>Response Time:</strong> I typically respond within 24 hours. 
                    Looking forward to connecting with you! 🎉
                </p>
            </div>
        </div>
    );
}
