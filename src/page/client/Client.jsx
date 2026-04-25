import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaQuoteLeft } from 'react-icons/fa';
import { clients } from '../../data/clients';
import Carousel from '../../components/Carousel';

const TestimonialCard = ({ client }) => {

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="group relative h-full shadow-sm rounded-2xl bg-gradient-to-br from-primary/25 via-primary/10 to-transparent"
    >
      <div className="relative h-full bg-white/90 backdrop-blur rounded-2xl p-6 shadow-sm border border-gray-200 transition-all duration-300 group-hover:shadow-lg group-hover:border-primary/40">
        <div className="absolute right-5 top-5 text-primary/20">
          <FaQuoteLeft className="h-7 w-7" aria-hidden="true" />
        </div>

        <div className="flex items-center gap-4 ">
          <img
            src={client?.img}
            alt={client?.name ? `Photo of ${client.name}` : 'Client photo'}
            className="h-14 w-14 sm:h-16 sm:w-16 rounded-full ring-1 ring-gray-200 object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="min-w-0 flex-1">
            <h3 className="text-black font-semibold leading-tight truncate">{client?.name}</h3>
            <p className="text-sm text-gray-600 truncate">{client?.position}</p>
          </div>
        </div>

        <p className={`mt-4  text-gray-700 leading-7 text-sm`}>{client?.text}</p>
      </div>
    </motion.div>
  );
};

export default function Client() {
  return (
    <section data-aos="fade-right" id="review" className="py-20">
      <div className="mx-auto px-4">
        <h2 className="text-3xl text-center mb-10 md:text-4xl font-bold tracking-tight text-black">What Clients Say</h2>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((c, i) => (
            <TestimonialCard key={c?.media || c?.name || i} client={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
