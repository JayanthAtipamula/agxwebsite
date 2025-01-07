import { motion } from 'framer-motion';

const TermsAndConditions = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Terms and Conditions
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-gray-300 leading-relaxed"
        >
          <p>
            By using this website, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our website.
          </p>
          <p>
            <strong>Use of Website:</strong> The content on this website is for your general information and use only. It is subject to change without notice.
          </p>
          <p>
            <strong>Intellectual Property:</strong> All content on this website, including text, graphics, logos, and images, is the property of AGX Factor and is protected by intellectual property laws.
          </p>
          <p>
            <strong>User Conduct:</strong> You agree not to use this website for any unlawful purpose or in a way that could damage the website or impair its functionality.
          </p>
          <p>
            <strong>Limitation of Liability:</strong> AGX Factor will not be liable for any damages arising from the use of this website.
          </p>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:contact@agxfactor.com" className="text-blue-500 hover:text-blue-400">contact@agxfactor.com</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsAndConditions;