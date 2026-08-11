import { motion } from 'framer-motion';
import treeTrimImg from '../assets/images/tree-trimming.webp';
import treeRemoveImg from '../assets/images/tree-removal.webp';
import stumpImg from '../assets/images/stump-grinding.webp';
import emergencyImg from '../assets/images/emergency-tree.webp';

const socialIcon = (type) => {
  if (type === 'fb') return (
    <svg width="17" height="17" fill="none" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="#7a5540" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
  if (type === 'tw') return (
    <svg width="17" height="17" fill="none" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" stroke="#7a5540" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
  return (
    <svg width="17" height="17" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#7a5540" strokeWidth="2"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="#7a5540" strokeWidth="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#7a5540" strokeWidth="2" strokeLinecap="round"/></svg>
  );
};

const services = [
  {
    id: 1,
    image: treeTrimImg,
    name: 'Tree Trimming',
    role: 'Precision Pruning',
    desc: 'Keeps your trees healthy and shaped with expert pruning techniques that promote strong growth and curb appeal.',
  },
  {
    id: 2,
    image: treeRemoveImg,
    name: 'Tree Removal',
    role: 'Safe & Clean Removal',
    desc: 'From small trees to large hazardous ones, we remove them safely with minimal disruption to your property.',
  },
  {
    id: 3,
    image: stumpImg,
    name: 'Stump Grinding',
    role: 'Complete Stump Removal',
    desc: 'Eliminate unsightly stumps quickly and efficiently, leaving your yard clean and ready for new landscaping.',
  },
  {
    id: 4,
    image: emergencyImg,
    name: 'Emergency Service',
    role: '24/7 Storm Response',
    desc: 'Rapid response to storm damage and fallen trees — protecting your home and family when it matters most.',
  },
];

const borderColors = ['#e8622a', '#c94e1a', '#f4845a', '#e8622a'];

// All 4 cards use the same asymmetric drop shape (card 4's shape)
const clipShapes = [null, null, null, null];

const blobRadius = [
  '70% 30% 60% 40% / 40% 60% 30% 70%',
  '70% 30% 60% 40% / 40% 60% 30% 70%',
  '70% 30% 60% 40% / 40% 60% 30% 70%',
  '70% 30% 60% 40% / 40% 60% 30% 70%',
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{ padding: '0 28px 0 28px' }}
    >
      {/* Inner cream card */}
      <div
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#fdf0e6', borderRadius: '24px', paddingBottom: '72px' }}
      >
        {/* Subtle bg shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div
            className="absolute"
            style={{
              width: 260, height: 260,
              top: '5%', left: '-80px',
              backgroundColor: '#f7d9c0',
              borderRadius: '50%',
              opacity: 0.45,
            }}
          />
          <div
            className="absolute"
            style={{
              width: 200, height: 200,
              bottom: '8%', right: '-60px',
              backgroundColor: '#fce9d8',
              borderRadius: '50%',
              opacity: 0.5,
            }}
          />
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
            Our Tree Care{' '}
            <span style={{ color: '#e8622a' }}>Services</span>
          </h2>
          <p
            className="text-[16px] max-w-[520px] mx-auto leading-relaxed"
            style={{ color: '#7a5540' }}
          >
            Professional, certified arborists delivering quality tree care
            to keep your property safe and beautiful year-round.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="max-w-[1160px] mx-auto px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col"
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  boxShadow: '0 4px 24px rgba(100,40,10,0.08)',
                  overflow: 'visible',
                  padding: '0 0 24px 0',
                }}
              >
                {/* Image with organic blob border */}
                <div className="flex justify-center pt-8 pb-4 relative">
                  {/* Decorative small flower accent */}
                  {i === 0 && (
                    <motion.div
                      className="absolute text-[#e8622a] text-2xl select-none"
                      style={{ top: 10, right: 28 }}
                      animate={{ rotate: [0, 180, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    >
                      ✳
                    </motion.div>
                  )}

                  {/* Unique shape per card */}
                  <div
                    style={{
                      width: 170,
                      height: 170,
                      flexShrink: 0,
                      position: 'relative',
                    }}
                  >
                    {/* Colored border layer behind */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: -5,
                        backgroundColor: borderColors[i],
                        clipPath: clipShapes[i] ?? undefined,
                        borderRadius: clipShapes[i] ? undefined : blobRadius[i],
                        opacity: 0.9,
                      }}
                    />
                    {/* Image on top */}
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        clipPath: clipShapes[i] ?? undefined,
                        borderRadius: clipShapes[i] ? undefined : blobRadius[i],
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <img
                        src={s.image}
                        alt={s.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="px-5 flex flex-col flex-1">
                  <h3
                    className="text-[18px] font-black mb-1"
                    style={{ color: '#2a1a0e' }}
                  >
                    {s.name}
                  </h3>
                  <p
                    className="text-[13px] font-semibold mb-3"
                    style={{ color: '#e8622a' }}
                  >
                    {s.role}
                  </p>
                  <p
                    className="text-[14px] leading-relaxed flex-1"
                    style={{ color: '#7a5540' }}
                  >
                    {s.desc}
                  </p>

                  {/* Social icons row */}
                  <div className="flex items-center gap-4 mt-5 pt-4" style={{ borderTop: '1px solid rgba(232,98,42,0.12)' }}>
                    <a href="#" aria-label="Facebook" className="transition-opacity hover:opacity-70">{socialIcon('fb')}</a>
                    <a href="#" aria-label="Twitter" className="transition-opacity hover:opacity-70">{socialIcon('tw')}</a>
                    <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-70">{socialIcon('ig')}</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
