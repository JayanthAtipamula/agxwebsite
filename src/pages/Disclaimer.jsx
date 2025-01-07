import { motion } from 'framer-motion';

const Disclaimer = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Disclaimer
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-gray-300 leading-relaxed"
        >
          <p>
            The information provided on this website is for general informational purposes only. AGX Factor makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on the website.
          </p>
          <p>
            <strong>No Professional Advice:</strong> The content on this website is not intended to be a substitute for professional advice. Always seek the advice of qualified professionals regarding any questions you may have.
          </p>
          <p>
            <strong>External Links:</strong> This website may contain links to external websites. We are not responsible for the content or practices of these external sites.
          </p>
          <p>
            <strong>Limitation of Liability:</strong> AGX Factor will not be liable for any loss or damage arising from the use of this website or reliance on the information provided.
          </p>
          <p>
            If you have any questions about this Disclaimer, please contact us at <a href="mailto:contact@agxfactor.com" className="text-blue-500 hover:text-blue-400">contact@agxfactor.com</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Disclaimer;