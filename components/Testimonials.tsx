'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Am reusit sa automatizam toate procesele de follow-up si am crescut conversiile cu 250%. Echipa DigiLock a fost exceptionala!",
    author: "Maria Popescu",
    role: "CEO, TechStart Romania",
    company: "TechStart"
  },
  {
    id: 2,
    quote: "Designul creat de DigiLock este exact ceea ce aveam nevoie - modern, rapid si optimizat pentru conversii. Rezultatele vorbesc de la sine.",
    author: "Alexandru Ionescu",
    role: "Marketing Director, EcomPro",
    company: "EcomPro"
  },
  {
    id: 3,
    quote: "Strategia video a transformat complet prezenta noastra online. Am generat peste 50,000 de leaduri in 6 luni.",
    author: "Elena Dumitrescu",
    role: "Founder, GrowthHub",
    company: "GrowthHub"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 text-black" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Ce Spun Clientii Nostri
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rezultate reale de la companii care au ales sa colaboreze cu noi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl border-2 border-gray-200 shadow-soft"
            >
              {/* Quote icon */}
              <div className="text-6xl text-gray-300 mb-4 leading-none">"</div>
              
              {/* Quote text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              
              {/* Author info */}
              <div className="border-t-2 border-gray-200 pt-4">
                <p className="font-semibold text-black">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-gray-500 mt-1">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
