import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSc56-yh_91V8HnXMiGBlBPhhFj1JIlSgvEsLea0vpCWoUkChA/formResponse";
    
    const formDataToSend = new FormData();
    formDataToSend.append('entry.839337160', formData.name);
    formDataToSend.append('entry.1045781291', formData.email);
    formDataToSend.append('entry.2005620554', formData.message);

    try {
      await fetch(googleFormURL, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors"
      });
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <article className="contact article">
      <header>
        <h2 className="h2 article-title text-white-2 text-2xl font-semibold">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure className="h-60 w-full rounded-2xl mb-6 border border-jet overflow-hidden md:h-80">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7974.827376945863!2d30.06881834335015!3d-1.9893316127403649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1745315777914!5m2!1sen!2srw" 
            width="600" 
            height="450" 
            style={{ border: 0, filter: 'grayscale(1) invert(1)' }}
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title text-white-2 text-lg mb-5">Contact Form</h3>

        {!isSubmitted ? (
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="input-wrapper grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input text-white-2 text-sm font-normal p-4 border border-jet rounded-xl outline-none placeholder:font-medium"
                placeholder="Full name" 
                required 
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input text-white-2 text-sm font-normal p-4 border border-jet rounded-xl outline-none placeholder:font-medium"
                placeholder="Email address" 
                required 
              />
            </div>
            
            {/* Textarea that spans full width like both inputs combined */}
            <div className="mb-6">
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input text-white-2 text-sm font-normal p-4 border border-jet rounded-xl outline-none placeholder:font-medium w-full min-h-32 h-36 max-h-64 resize-vertical"
                placeholder="Your Message" 
                required
              ></textarea>
            </div>
            
            <button className="form-btn" type="submit">
              <span>Send Message</span>
            </button>
          </form>
        ) : (
          <p className="text-green-500 text-center py-4">
            ✅ Thank you for reaching out I will get back to you as soon as possible 
          </p>
        )}
      </section>
    </article>
  );
};

export default Contact;