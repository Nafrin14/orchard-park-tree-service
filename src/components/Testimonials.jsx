import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    title: 'Outstanding Work on Our Oak Tree',
    text: 'OrchardPark did an incredible job trimming our massive oak tree. The crew was professional, efficient, and left our yard spotless. We have seen a huge improvement in the tree\'s health and our yard looks amazing. Highly recommend their services to anyone!',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    name: 'James Carter',
    role: 'Property Manager',
    title: 'Reliable & Fast Emergency Response',
    text: 'After the storm, a large tree fell dangerously close to our building. OrchardPark responded within hours, safely removed the tree, and cleaned everything up. Their 24/7 emergency service is truly a lifesaver. We now use them for all our tree care needs.',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden"
      style={{ padding: '0 28px 0 28px' }}
    >
      {/* Inner cream card */}
      <div
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#fdf0e6', borderRadius: '24px', paddingBottom: '72px' }}
      >
        {/* Subtle bg blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute" style={{ width: 220, height: 220, top: '10%', right: '-60px', backgroundColor: '#f7d9c0', borderRadius: '50%', opacity: 0.4 }} />
          <div className="absolute" style={{ width: 160, height: 160, bottom: '10%', left: '-50px', backgroundColor: '#fce9d8', borderRadius: '50%', opacity: 0.45 }} />
        </div>

        {/* Heading */}
        <motion.div
          className="text-center pt-16 pb-12 px-4"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="font-black tracking-[-1.5px] leading-tight mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 50px)', color: '#2a1a0e' }}
          >
            What Our{' '}
            <span style={{ color: '#e8622a' }}>Clients Say</span>
          </h2>
          <p
            className="text-[16px] max-w-[560px] mx-auto leading-relaxed"
            style={{ color: '#7a5540' }}
          >
            Discover how OrchardPark has helped homeowners and property managers
            keep their trees healthy, safe, and beautiful all year round.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="max-w-[1160px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  backgroundColor: 'rgba(232,98,42,0.10)',
                  borderRadius: 24,
                  padding: '28px 28px 32px 28px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Big quote mark — top right */}
                <div
                  className="absolute top-4 right-6 font-black leading-none select-none"
                  style={{ fontSize: 80, color: '#e8622a', opacity: 0.22, lineHeight: 1 }}
                >
                  "
                </div>

                {/* Small accent star — top left area */}
                <motion.div
                  className="absolute text-[#e8622a] font-black select-none"
                  style={{ fontSize: 22, top: 14, left: '38%', opacity: 0.5 }}
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  ✳
                </motion.div>

                {/* Top row: avatar + name/role + play icon */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  {/* Avatar circle */}
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '3px solid #e8622a',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Name + role */}
                  <div>
                    <p className="text-[16px] font-black" style={{ color: '#2a1a0e' }}>{t.name}</p>
                    <p className="text-[13px] font-semibold" style={{ color: '#7a5540' }}>{t.role}</p>
                  </div>

                  {/* Play button — like the design */}
                  <div
                    className="ml-auto flex items-center justify-center"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      backgroundColor: '#e8622a',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(232,98,42,0.35)',
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                </div>

                {/* Bold title */}
                <h3
                  className="text-[18px] font-black mb-3 relative z-10"
                  style={{ color: '#2a1a0e' }}
                >
                  {t.title}
                </h3>

                {/* Review text */}
                <p
                  className="text-[14px] leading-relaxed relative z-10"
                  style={{ color: '#5a3a28' }}
                >
                  {t.text}
                </p>

                {/* Star rating */}
                <div className="flex gap-1 mt-5 relative z-10">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill="#e8622a">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
