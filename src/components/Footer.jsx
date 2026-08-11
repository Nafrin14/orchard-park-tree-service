import logoImg from '../assets/images/logo.webp';

export default function Footer({ onPrivacyClick, onTermsClick }) {
  const handlePrivacyClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (onPrivacyClick) {
      onPrivacyClick();
    }
  };

  const handleTermsClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (onTermsClick) {
      onTermsClick();
    }
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ padding: '0 28px 0 28px' }}
    >
      {/* Inner dark card */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          backgroundColor: '#2a1a0e',
          borderRadius: '24px',
        }}
      >
        {/* Subtle background blobs */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="absolute"
            style={{
              width: 300,
              height: 300,
              top: '-80px',
              right: '-80px',
              backgroundColor: '#e8622a',
              borderRadius: '50%',
              opacity: 0.06,
            }}
          />

          <div
            className="absolute"
            style={{
              width: 200,
              height: 200,
              bottom: '-60px',
              left: '-60px',
              backgroundColor: '#e8622a',
              borderRadius: '50%',
              opacity: 0.07,
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1160px] mx-auto px-10 pt-14 pb-8">

          {/* Top row */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10"
            style={{
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >

            {/* Brand */}
            <div>
              <a
                href="#home"
                className="flex items-center gap-2.5 mb-4"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('home')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                <img
                  src={logoImg}
                  alt="OrchardPark Logo"
                  className="w-9 h-9 rounded-xl object-cover"
                />

                <span className="text-[17px] font-extrabold text-white tracking-tight">
                  OrchardPark
                </span>
              </a>

              <p
                className="text-[14px] leading-relaxed mb-5"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                Professional tree care services keeping your property safe
                and beautiful all year round.
              </p>

              {/* Social icons */}
              <div className="flex gap-3">

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#e8622a]"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  aria-label="Twitter"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#e8622a]"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#e8622a]"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line
                      x1="17.5"
                      y1="6.5"
                      x2="17.51"
                      y2="6.5"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[15px] font-bold mb-4 text-white">
                Quick Links
              </h4>

              <ul className="flex flex-col gap-2.5">
                {[
                  'Home',
                  'About',
                  'Services',
                  'Testimonials',
                  'Contact',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();

                        const target = document.getElementById(
                          item.toLowerCase()
                        );

                        if (target) {
                          target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                          });
                        }
                      }}
                      className="text-[14px] transition-colors duration-200 hover:text-[#e8622a]"
                      style={{
                        color: 'rgba(255,255,255,0.5)',
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[15px] font-bold mb-4 text-white">
                Our Services
              </h4>

              <ul className="flex flex-col gap-2.5">
                {[
                  'Tree Trimming',
                  'Tree Removal',
                  'Stump Grinding',
                  'Emergency Service',
                  'Free Estimates',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();

                        document.getElementById('services')?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        });
                      }}
                      className="text-[14px] transition-colors duration-200 hover:text-[#e8622a]"
                      style={{
                        color: 'rgba(255,255,255,0.5)',
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-[15px] font-bold mb-4 text-white">
                Contact Info
              </h4>

              <ul className="flex flex-col gap-3">
                {[
                  '123 Orchard Lane, Buffalo, NY 14201',
                  '+1 (716) 555-0192',
                  '',
                  'Mon–Sat: 7am – 6pm',
                ].map((label) => (
                  <li
                    key={label}
                    className="text-[14px]"
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">

            <p
              className="text-[13px]"
              style={{
                color: 'rgba(255,255,255,0.35)',
              }}
            >
              © {new Date().getFullYear()} OrchardPark Tree Service.
              All rights reserved.
            </p>

            <div className="flex items-center gap-5">

              {/* Privacy Policy */}
              <button
                type="button"
                onClick={handlePrivacyClick}
                className="text-[13px] transition-colors duration-200 hover:text-[#e8622a] bg-transparent border-none cursor-pointer"
                style={{
                  color: 'rgba(255,255,255,0.35)',
                }}
              >
                Privacy Policy
              </button>

              <span
                style={{
                  color: 'rgba(255,255,255,0.15)',
                }}
              >
                |
              </span>

              {/* Terms of Service */}
              <button
                type="button"
                onClick={handleTermsClick}
                className="text-[13px] transition-colors duration-200 hover:text-[#e8622a] bg-transparent border-none cursor-pointer"
                style={{
                  color: 'rgba(255,255,255,0.35)',
                }}
              >
                Terms of Service
              </button>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}