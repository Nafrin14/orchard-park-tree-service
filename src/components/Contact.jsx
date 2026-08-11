import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useEffect } from 'react';

const contactInfo = [
  { icon: MapPin, label: 'Our Location',  value: '123 Orchard Lane, Buffalo, NY 14201' },
  { icon: Phone,  label: 'Call Us',       value: '+1 (716) 555-0192' },
  { icon: Mail,   label: 'Email Us',      value: '' },
  { icon: Clock,  label: 'Working Hours', value: 'Mon–Sat: 7am – 6pm' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Contact() {
  // Load the kdlead form embed script once
  useEffect(() => {
    if (document.querySelector('script[src="https://link.kdlead.com/js/form_embed.js"]')) return;
    const script = document.createElement('script');
    script.src = 'https://link.kdlead.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ padding: '0 28px 0 28px' }}
    >
      {/* Inner cream card */}
      <div
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#fdf0e6', borderRadius: '24px', paddingBottom: '72px' }}
      >
        {/* Bg blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute" style={{ width: 260, height: 260, top: '5%', right: '-70px', backgroundColor: '#f7d9c0', borderRadius: '50%', opacity: 0.4 }} />
          <div className="absolute" style={{ width: 180, height: 180, bottom: '8%', left: '-50px', backgroundColor: '#fce9d8', borderRadius: '50%', opacity: 0.45 }} />
        </div>

        {/* Heading */}
        <motion.div className="text-center pt-16 pb-12 px-4" {...fadeUp(0)}>
          <h2
            className="font-black tracking-[-1.5px] leading-tight mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 50px)', color: '#2a1a0e' }}
          >
            Get In{' '}
            <span style={{ color: '#e8622a' }}>Touch</span>
          </h2>
          <p className="text-[16px] max-w-[520px] mx-auto leading-relaxed" style={{ color: '#7a5540' }}>
            Ready for a free estimate? Have a question? We'd love to hear from you.
            Reach out and our team will get back to you promptly.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="max-w-[1160px] mx-auto px-10 flex flex-col lg:flex-row gap-10">

          {/* LEFT — contact info + map */}
          <motion.div className="flex flex-col gap-5" style={{ flex: '0 0 340px' }} {...fadeUp(0.1)}>
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 rounded-2xl"
                style={{ backgroundColor: 'rgba(232,98,42,0.08)', border: '1px solid rgba(232,98,42,0.14)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#e8622a', boxShadow: '0 4px 12px rgba(232,98,42,0.30)' }}
                >
                  <Icon size={18} color="#fff" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#e8622a' }}>{label}</p>
                  <p className="text-[14px] font-medium" style={{ color: '#2a1a0e' }}>{value}</p>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden" style={{ minHeight: 180 }}>
              <iframe
                title="OrchardPark Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23453.4!2d-78.8784!3d42.8864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3120e4a7cf32b%3A0x10880dc7b!2sBuffalo%2C%20NY!5e0!3m2!1sen!2sus!4v1690000000000"
                width="100%"
                height="180"
                style={{ border: 0, borderRadius: 16, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* RIGHT — KDLead iframe form */}
          <motion.div className="flex-1" {...fadeUp(0.2)}>
            <div
              className="w-full rounded-2xl overflow-hidden"
              style={{
                backgroundColor: '#fff',
                boxShadow: '0 8px 40px rgba(100,40,10,0.08)',
                border: '1px solid rgba(232,98,42,0.10)',
                minHeight: 877,
              }}
            >
              <iframe
                src="https://link.kdlead.com/widget/form/SqPotoCTEqsj20r8vscw"
                style={{ width: '100%', height: '877px', border: 'none', borderRadius: '16px', display: 'block' }}
                id="inline-SqPotoCTEqsj20r8vscw"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 0"
                data-height="877"
                data-layout-iframe-id="inline-SqPotoCTEqsj20r8vscw"
                data-form-id="SqPotoCTEqsj20r8vscw"
                title="Form 0"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
