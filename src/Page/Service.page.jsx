import React from 'react';
import { LuDot } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { Card, CardHeader, CardTitle, CardContent } from '@components';

export const Service= () => {
  const iconUrls = ['https://cdn-icons-png.flaticon.com/128/1197/1197511.png', 'https://cdn-icons-png.flaticon.com/128/8606/8606660.png', 'https://cdn-icons-png.flaticon.com/128/9672/9672242.png'];

  return (
    <section id="service" data-aos="fade-left" className="py-20 ">
      <div className="mx-auto  px-4">
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <span className="inline-flex w-fit items-center rounded-full border border-primary/40  px-3 py-1 text-sm font-semibold text-gray-700">Services</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">What I can do for you</h2>
        </div>

        {/* Services  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((serviceItem, index) => (
            <motion.div key={index} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 8 }} transition={{ duration: 0.4, ease: 'easeOut' }} whileHover={{ scale: 1.02 }} className="h-full">
              <Card className="group h-full border-gray-200 hover:border-primary/40 transition-colors duration-300 shadow-sm">
                <CardHeader className="items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center ring-1 ring-primary/20">
                    <img className="w-12 h-12 object-contain" src={iconUrls[index] || iconUrls[0]} alt={serviceItem.title} loading="lazy" />
                  </div>
                  <CardTitle className="text-lg md:text-xl text-black mt-2">{serviceItem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-2 mt-2">
                    {serviceItem.service.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <LuDot className="text-primary text-3xl leading-none shrink-0" />
                        <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

