import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-gray-300 leading-relaxed"
        >
          <p>
            We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to say hello, feel free to reach out.
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:contact@agxfactor.com" className="text-blue-500 hover:text-blue-400">contact@agxfactor.com</a>
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+918465834152" className="text-blue-500 hover:text-blue-400">+91 846 583 4152</a>
          </p>
          <p>
            <strong>Address:</strong> Manjeera Trinity Corporate, Hyderabad, Telangana 500072
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;