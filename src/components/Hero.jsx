import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import heroImg from '../assets/images/hero.webp';
import Navbar from './Navbar';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ padding: '28px 28px 0 28px' }}
    >
      {/* Top-left concave corner */}
      <div
        className="absolute z-20 pointer-events-none"
        style={{ width: 40, height: 40, top: 28, left: 28, backgroundColor: '#f0956a', borderBottomRightRadius: '50%' }}
      />
      {/* Top-right concave corner */}
      <div
        className="absolute z-20 pointer-events-none"
        style={{ width: 40, height: 40, top: 28, right: 28, backgroundColor: '#f0956a', borderBottomLeftRadius: '50%' }}
      />

      {/* INNER CREAM CARD */}
      <div
        className="relative w-full overflow-hidden flex flex-col"
        style={{ backgroundColor: '#fdf0e6', borderRadius: '24px', minHeight: '100vh' }}
      >
        {/* Right-side arc layers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div
            className="absolute"
            style={{ width: '44%', height: '105%', top: '-2%', right: '-5%', backgroundColor: '#f7d9c0', borderRadius: '60% 0 0 55% / 50% 0 0 45%' }}
          />
          <div
            className="absolute"
            style={{ width: '30%', height: '90%', top: '4%', right: '-2%', backgroundColor: '#fce9d8', borderRadius: '55% 0 0 50% / 45% 0 0 40%' }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{ width: 12, height: 12, top: '22%', right: '40%', backgroundColor: '#e8622a', opacity: 0.20 }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{ width: 8, height: 8, top: '58%', left: '10%', backgroundColor: '#e8622a', opacity: 0.15 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
          />
        </div>

        {/* NAVBAR */}
        <Navbar />
        <div className="h-[80px]" />

        {/* MAIN CONTENT */}
        <div
          className="relative z-10 max-w-[1160px] mx-auto w-full px-10 flex flex-col lg:flex-row items-center gap-6 flex-1"
          style={{ paddingBottom: '60px' }}
        >
          {/* LEFT */}
          <div className="flex-1 flex flex-col justify-center lg:pr-6">
            <motion.h1
              {...fadeUp(0.2)}
              className="font-black leading-[1.07] tracking-[-2px] mb-6"
              style={{ fontSize: 'clamp(40px, 5vw, 64px)', color: '#2a1a0e' }}
            >
              Expert Care for{' '}
              <span style={{ color: '#e8622a' }}>Healthy</span>
              <br />
              Trees &amp; a{' '}
              <span style={{ color: '#e8622a' }}>Beautiful</span>
              <br />
              Yard
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="text-[15px] leading-relaxed max-w-[360px] mb-8"
              style={{ color: '#7a5540' }}
            >
              From precision trimming to full removal, our certified arborists
              keep your property safe, stunning, and thriving all year round.
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="flex items-center gap-5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[15px] font-semibold px-7 py-3.5 rounded-full text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: '#e8622a', boxShadow: '0 6px 22px rgba(232,98,42,0.38)' }}
              >
                Get a Free Quote
                <ChevronRight size={17} strokeWidth={2.5} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT: IMAGE */}
          <motion.div
            className="flex-1 flex items-end justify-center relative"
            style={{ minHeight: 420 }}
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={heroImg}
              alt="Tree service professional"
              className="relative z-10 w-full max-w-[460px] object-cover"
              style={{ height: 420, objectPosition: 'center', borderRadius: '28px 28px 0 0', boxShadow: '0 20px 50px rgba(100,40,10,0.16)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
