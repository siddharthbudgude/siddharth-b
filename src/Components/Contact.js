import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_agp49um", // Replace with your EmailJS service ID
                "template_9pd2mfe", // Replace with your EmailJS template ID
                {
                    to_name: "Siddharth", // This is for the recipient (if needed)
                    from_name: formData.name, // Sender's Name
                    from_email: formData.email, // Sender's Email
                    message: formData.message, // Message Content
                },
                "2twOywgjjhrYykFY0" // Replace with your EmailJS public key
            )
            .then(
                (response) => {
                    console.log("Email sent successfully!", response);
                    setSuccess(true);
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.error("Email failed to send:", error);
                    alert("Something went wrong!");
                }
            )
            .finally(() => setLoading(false));
    };
    return (
        <div className="container contact-page py-5">
            {/* Show success message at the top without replacing the form */}
            {success && <div className="alert alert-success success-message">Message sent successfully!</div>}
            <div className="row">
                {/* Left Side - Contact Info & Social Media */}
                <div className="col-md-5 contact-info p-4">
                    <h3 className="p-3 fw-bold mb-3 bg-white rounded w-100">Connect With Me</h3>
                    <p className="p-3 mb-3 bg-white rounded w-100"><strong><i class="fa-solid fa-envelope"></i></strong>siddharthbudgude5@gmail.com</p>
                    <p className="p-3 mb-3 bg-white rounded w-100"><strong><i class="fa-solid fa-phone"></i></strong> +91 7507151652</p>
                    <div className="social-icons">
                        <a href="#" target='_blank' className="btn btn-outline-light btn-floating m-1">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" target='_blank' className="btn btn-outline-light btn-floating m-1">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="#" target='_blank' className="btn btn-outline-light btn-floating m-1">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" target='_blank' className="btn btn-outline-light btn-floating m-1">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                {/* Right Side - Contact Form */}
                <div className="col-md-7 contact-form p-4">
                    <h3>Get in Touch</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" name="name" placeholder="Enter Your Full Name" className="form-control" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" placeholder="Enter Your Email" className="form-control" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea name="message" placeholder="Message" className="form-control" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" className="btn" disabled={loading}>
                            {loading ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
