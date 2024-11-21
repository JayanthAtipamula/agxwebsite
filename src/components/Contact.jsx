import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=+918465834152&text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+918465834152';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:contact@agxfactor.com';
  };

  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/place/Manjeera+Trinity+Corporate/@17.4893763,78.3900814,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb918dab342375:0x180a04af0c47f594!8m2!3d17.4893763!4d78.3926563!16s%2Fg%2F11gbx8t856?entry=ttu', '_blank');
  };

  return (
    <section className="min-h-screen bg-black flex items-center py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {/* Email Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
              >
                <h3 className="text-white text-lg font-semibold mb-2">Email Us</h3>
                <button
                  onClick={handleEmail}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  contact@agxfactor.com
                </button>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
              >
                <h3 className="text-white text-lg font-semibold mb-2">Call Us</h3>
                <button
                  onClick={handleCall}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  +91 846 583 4152
                </button>
              </motion.div>

              {/* Address Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
              >
                <h3 className="text-white text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">
                  Manjeera Trinity Corporate, Hyderabad, Telangana 500072
                </p>
                <motion.button
                  onClick={handleGetDirections}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Directions
                </motion.button>
              </motion.div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden h-[300px] border border-gray-700/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.9721507606477!2d78.39008141487657!3d17.489376288016397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918dab342375%3A0x180a04af0c47f594!2sManjeera%20Trinity%20Corporate!5e0!3m2!1sen!2sin!4v1624972891000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;