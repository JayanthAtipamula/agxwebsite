import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-gray-300 leading-relaxed"
        >
          <p>
            AGX Factor is a leading digital marketing and business strategy firm dedicated to helping businesses grow and thrive in the digital age. Our team of experts specializes in creating innovative solutions tailored to your unique needs.
          </p>
          <p>
            <strong>Our Mission:</strong> To empower businesses through cutting-edge digital solutions and strategic growth strategies.
          </p>
          <p>
            <strong>Our Vision:</strong> To be the go-to partner for businesses seeking to transform and dominate their markets.
          </p>
          <p>
            <strong>Our Values:</strong> Innovation, integrity, and excellence are at the core of everything we do.
          </p>
          <p>
            If you'd like to learn more about how we can help your business, please <a href="/contact" className="text-blue-500 hover:text-blue-400">contact us</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;