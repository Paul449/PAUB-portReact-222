import { useState } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        // Basic validation
        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus('Please fill in all fields.');
            setIsSubmitting(false);
            return;
        }

        // Prepare the email parameters
        const templateParams = {
            name: name,
            email: email,
            message: message,
        };

        try {
            // Sending the email using EmailJS
            const response = await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );
            
            console.log('Email successfully sent!', response.status, response.text);
            setStatus('✅ Message sent successfully! I\'ll get back to you soon.');
            setName('');
            setEmail('');
            setMessage('');
        } catch (err) {
            console.error('Failed to send email.', err);
            setStatus('❌ Failed to send message. Please try again or contact me directly.');
        } finally {
            setIsSubmitting(false);
        }
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
                                <p>paul_bilbatua@hotmail.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">💼</span>
                            <div>
                                <strong>LinkedIn</strong>
                                <p>
                                    <a href="https://www.linkedin.com/in/paul-bilbatua-software-developer/" target="_blank" rel="noopener noreferrer">
                                        linkedin/in/paul-bilbatua-software-developer
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">📱</span>
                            <div>
                                <strong>GitHub</strong>
                                <p>
                                    <a href="https://github.com/Paul449" target="_blank" rel="noopener noreferrer">
                                        github.com/paul449
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">📍</span>
                            <div>
                                <strong>Location</strong>
                                <p>San Antonio, Texas</p>
                                <p>Available for remote work</p>
                                <p>Open to relocation</p>
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
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="NameText">Your Name *</label>
                            <input
                                id="NameText"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your full name"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="EmailText">Your Email *</label>
                            <input
                                id="EmailText"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your.email@example.com"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="txtM">Your Message *</label>
                            <textarea
                                id="txtM"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
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

