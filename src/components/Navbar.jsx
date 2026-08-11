import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/images/logo.webp';

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  // Scroll-spy
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 180;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);

        if (el && el.offsetTop <= scrollY) {
          setActive(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Smooth scroll function
  const handleNavigation = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;
    setActive(id);
    setMenuOpen(false);

    // Wait for mobile menu to close before scrolling
    setTimeout(() => {
      const navbar = document.querySelector('header');
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 100;
      const navbarTop = 28; // top offset
      const totalOffset = navbarHeight + navbarTop + 24;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementTop - totalOffset, behavior: 'smooth' });
    }, 300);
  };

  return (
    <motion.header
      className="fixed z-50 transition-all duration-300"
      style={{
        top: 28,
        left: 28,
        right: 28,
        borderRadius: 16,
        backgroundColor: 'rgb(253,240,230)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 4px 24px rgba(232,98,42,0.10)',
        border: '1px solid rgba(232,98,42,0.10)',
      }}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="max-w-[1160px] mx-auto px-8 py-4 flex items-center gap-6">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavigation(e, 'home')}
          className="flex items-center gap-2.5 shrink-0"
        >
          <img
            src={logoImg}
            alt="OrchardPark Logo"
            className="w-9 h-9 rounded-xl object-cover"
          />

          <span className="text-[17px] font-extrabold text-[#2a1a0e] tracking-tight">
            OrchardPark
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.id)}
              className="relative flex flex-col items-center px-4 py-1.5 rounded-full text-[15px] font-medium transition-colors duration-200"
              style={{
                color:
                  active === link.id
                    ? '#2a1a0e'
                    : '#7a5540',
              }}
            >
              <span
                style={{
                  fontWeight:
                    active === link.id ? 700 : 500,
                }}
              >
                {link.label}
              </span>

              {active === link.id && (
                <motion.span
                  layoutId="nav-dot"
                  className="block w-1.5 h-1.5 rounded-full mt-0.5"
                  style={{
                    backgroundColor: '#e8622a',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href="#contact"
            onClick={(e) => handleNavigation(e, 'contact')}
            className="text-[14px] font-semibold px-5 py-2.5 rounded-full text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#e8622a',
              boxShadow:
                '0 4px 16px rgba(232,98,42,0.30)',
            }}
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden ml-auto p-1 text-[#2a1a0e]"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden flex flex-col px-5 pb-5 gap-1 overflow-hidden"
            style={{
              borderTop:
                '1px solid rgba(232,98,42,0.12)',
              backgroundColor:
                'rgba(253,240,230,0.98)',
              borderRadius: '0 0 16px 16px',
            }}
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >

            {navLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={(e) =>
                  handleNavigation(e, link.id)
                }
                className="text-[16px] font-medium py-3 px-4 rounded-lg transition-all duration-200"
                style={{
                  color:
                    active === link.id
                      ? '#e8622a'
                      : '#7a5540',

                  backgroundColor:
                    active === link.id
                      ? 'rgba(232,98,42,0.08)'
                      : 'transparent',
                }}
                initial={{
                  opacity: 0,
                  x: -16,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: i * 0.06,
                }}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Mobile CTA */}
            <div
              className="mt-3 pt-3"
              style={{
                borderTop:
                  '1px solid rgba(232,98,42,0.12)',
              }}
            >
              <a
                href="#contact"
                onClick={(e) =>
                  handleNavigation(e, 'contact')
                }
                className="block text-center text-[14px] font-semibold py-2.5 rounded-full text-white"
                style={{
                  backgroundColor: '#e8622a',
                }}
              >
                Get a Quote
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}