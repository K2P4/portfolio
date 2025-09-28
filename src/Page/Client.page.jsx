import { motion } from 'framer-motion';
import { clients } from '../data/clients';

const TestimonialCard = ({ client }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="p-[1px] shadow-sm   rounded-2xl bg-gradient-to-br from-primary/30  to-primary/40 "
    >
      <div className="h-full bg-white rounded-2xl p-6 shadow-sm border ">
        <div className="flex items-start gap-4">
          <div className="flex flex-col  items-center gap-2">
            <img src={client?.img} alt={client?.position} className="h-24 w-24 rounded-full ring-2 ring-gray-200 object-cover" />
            <a href={client?.media} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary text-sm mt-3">
              View profile
            </a>
          </div>
          <div className="flex-1">
            <h2 className="text-black font-semibold">{client?.position}</h2>
            <p className="mt-3 text-gray-600 leading-6 text-sm">{client?.text}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Client = () => {
  return (
    <section data-aos="fade-right" id="review" className="py-20">
      <div className="flex flex-col items-center text-center gap-3 mb-10">
        <span className="inline-flex items-center rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold text-gray-700">Clients</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">What Clients Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {clients.map((c, i) => (
          <TestimonialCard key={i} client={c} />
        ))}
      </div>
    </section>
  );
};

