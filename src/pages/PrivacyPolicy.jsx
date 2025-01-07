import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Privacy Policy
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-gray-300 leading-relaxed"
        >
          <p>
            At AGX Factor, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or use our services.
          </p>
          <p>
            <strong>Information We Collect:</strong> We may collect personal information such as your name, email address, phone number, and other details when you fill out forms on our website or contact us directly.
          </p>
          <p>
            <strong>How We Use Your Information:</strong> We use your information to provide and improve our services, communicate with you, and personalize your experience. We do not share your information with third parties without your consent.
          </p>
          <p>
            <strong>Data Security:</strong> We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
          </p>
          <p>
            <strong>Changes to This Policy :</strong> We may update this Privacy Policy from time to time. Any changes will be posted on this page.
          </p>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@agxfactor.com" className="text-blue-500 hover:text-blue-400">contact@agxfactor.com</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;