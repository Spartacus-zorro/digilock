'use client';

import { servicesData } from '@/data/data';

export default function Services() {
  return (
    <section className="py-20 bg-gray-900 text-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {servicesData.sectionTitle}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {servicesData.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-all transform hover:scale-105 hover:shadow-2xl border border-gray-700"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
