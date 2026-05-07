'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Gata sa Transformi Afacerea Ta?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Hai sa discutam despre cum putem automatiza procesele tale, sa cream un design care converteste si sa atragem atentia prin video marketing strategic.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all shadow-soft text-lg"
          >
            Hai sa Vorbim
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
