import { motion } from 'framer-motion';
import { TreePine, Leaf, Scissors } from 'lucide-react';
import aboutImg from '../assets/images/about.webp';

const stats = [
  { icon: TreePine, value: '500+', label: 'Trees Trimmed' },
  { icon: Leaf,     value: '15+',  label: 'Years of Expertise' },
  { icon: Scissors, value: '50+',  label: 'Trusted by Locals' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden" style={{ padding: '0 28px 0 28px' }}>

      {/* Inner cream card */}
      <div
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#fdf0e6', borderRadius: '24px', paddingBottom: '64px' }}
      >

        {/* ── Stats row (same as hero bottom, repeated at top of about) ── */}
        <div className="max-w-[1160px] mx-auto px-10 pt-10 pb-2">
          <div
            className="flex flex-col sm:flex-row overflow-hidden"
            style={{
              backgroundColor: 'rgba(255,255,255,0.55)',
              backdropFilter: 'blur(8px)',
              borderRadius: 18,
              border: '1px solid rgba(232,98,42,0.12)',
              boxShadow: '0 8px 32px rgba(100,40,10,0.07)',
            }}
          >
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className="flex-1 flex items-center gap-4 px-8 py-5"
                style={{ borderRight: i < stats.length - 1 ? '1px solid rgba(232,98,42,0.12)' : 'none' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(232,98,42,0.10)' }}
                >
                  <Icon size={24} color="#e8622a" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[26px] font-black leading-none tracking-tight" style={{ color: '#2a1a0e' }}>{value}</p>
                  <p className="text-[13px] font-medium mt-0.5" style={{ color: '#7a5540' }}>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section heading ── */}
        <motion.div
          {...fadeUp(0.1)}
          className="text-center mt-14 mb-12 px-4"
        >
          <h2
            className="font-black tracking-[-1.5px] leading-tight"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', color: '#2a1a0e' }}
          >
            About{' '}
            <span style={{ color: '#e8622a' }}>OrchardPark</span>
          </h2>
        </motion.div>

        {/* ── Two-column: image left + text right ── */}
        <div className="max-w-[1160px] mx-auto px-10 flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT: image with peach background shape */}
          <motion.div
            className="flex-1 flex items-center justify-center relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Peach background shape behind image */}
            <div
              className="absolute"
              style={{
                width: '85%',
                height: '90%',
                backgroundColor: '#f7d0b0',
                borderRadius: '40% 50% 50% 40% / 45% 45% 55% 55%',
                top: '5%',
                left: '5%',
              }}
            />

            {/* Small star/asterisk accent */}
            <motion.div
              className="absolute z-10 text-[#e8622a] font-black text-[28px] select-none"
              style={{ top: '8%', right: '10%' }}
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              ✳
            </motion.div>

            {/* Image */}
            <img
              src={aboutImg}
              alt="Tree care professional working"
              className="relative z-10 object-cover"
              style={{
                width: '100%',
                maxWidth: 420,
                height: 360,
                borderRadius: 20,
                boxShadow: '0 16px 48px rgba(100,40,10,0.14)',
                objectPosition: 'center',
              }}
            />
          </motion.div>

          {/* RIGHT: description text */}
          <motion.div
            className="flex-1"
            {...fadeUp(0.2)}
          >
            <p
              className="text-[16px] leading-[1.85] mb-5"
              style={{ color: '#5a3a28' }}
            >
              OrchardPark Tree Service is a trusted local provider dedicated to keeping
              your trees healthy, safe, and beautiful. From routine trimming and pruning
              to hazardous tree removal, our certified arborists bring decades of
              hands-on expertise to every job.
            </p>
            <p
              className="text-[16px] leading-[1.85] mb-8"
              style={{ color: '#5a3a28' }}
            >
              We take pride in our eco-friendly approach — protecting your landscape
              while ensuring your property stays safe and stunning. Whether it's a
              single tree or an entire yard, OrchardPark delivers quality results
              you can count on, every season of the year.
            </p>

            {/* Mini feature chips */}
            <div className="flex flex-wrap gap-3">
              {['Certified Arborists', 'Free Estimates', 'Eco-Friendly', 'Fully Insured', 'Same-Day Service'].map((tag) => (
                <span
                  key={tag}
                  className="text-[13px] font-semibold px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: 'rgba(232,98,42,0.10)',
                    color: '#e8622a',
                    border: '1px solid rgba(232,98,42,0.20)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
