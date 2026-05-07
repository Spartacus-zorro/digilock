'use client';

import { motion } from 'framer-motion';

const clients = [
  { id: 1, name: "TechStart", logo: "TS" },
  { id: 2, name: "EcomPro", logo: "EP" },
  { id: 3, name: "GrowthHub", logo: "GH" },
  { id: 4, name: "InnovateRO", logo: "IR" },
  { id: 5, name: "DigitalFirst", logo: "DF" },
  { id: 6, name: "CloudSync", logo: "CS" }
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white text-black border-y-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8"
        >
          Au Incredere in Noi
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center"
            >
              <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-lg border-2 border-gray-200 hover:border-black transition-colors">
                <span className="text-2xl font-bold text-gray-700">
                  {client.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
