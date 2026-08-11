import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const sections = [
  {
    title: '1. Information We Collect',
    content: null,
    list: [
      'Full name',
      'Mailing or service address',
      'Email address',
      'Mobile phone number',
      'Service request details and project descriptions',
      'Communication history and preferences',
    ],
    intro:
      'We may collect the following categories of personal information when you contact us, request a quote, submit a web form, or use our services:',
  },
  {
    title: '2. SMS / Text Message Communications',
    subsections: [
      {
        sub: '2a. How We Collect Your Mobile Number',
        text: 'We collect your mobile phone number when you voluntarily provide it through our website contact forms, phone calls, or other direct communication channels. By providing your mobile number and checking the SMS consent checkbox on our forms, you expressly consent to receive SMS (text message) communications from Orchard Park Tree Service.',
      },
      {
        sub: '2b. Types of Messages We Send',
        text: 'By opting in, you may receive recurring automated text messages, including: free estimate confirmations and appointment reminders, project status updates and scheduling notifications, customer support and follow-up communications, and promotional offers and seasonal service announcements.',
      },
      {
        sub: '2c. Message Frequency',
        text: 'Message frequency varies based on your interactions with us, ongoing service needs, and active promotions. You may receive up to 4–8 messages per month depending on your service activity.',
      },
      {
        sub: '2d. Message & Data Rates',
        text: 'Message and data rates may apply. Charges are determined by your mobile carrier and your individual service plan. Orchard Park Tree Service is not responsible for any charges incurred from your mobile carrier.',
      },
      {
        sub: '2e. How to Opt Out (STOP)',
        text: 'You may cancel SMS messages at any time by replying STOP to any text message you receive from us. After opting out, you will receive one final confirmation message and will no longer receive SMS communications unless you re-enroll.',
      },
      {
        sub: '2f. How to Get Help (HELP)',
        text: 'For help with our SMS program, reply HELP to any message, or contact us at: Phone: 716-217-2500 | Email: ',
      },
    ],
  },
  {
    title: '3. Mobile Information & SMS Consent — No Third-Party Sharing',
    content:
      'No mobile information (including your mobile phone number and SMS opt-in consent data) will be shared with third parties or affiliates for marketing or promotional purposes. All other categories of personal data exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties under any circumstances.',
  },
  {
    title: '4. How We Use Your Information',
    intro: 'We use the personal information we collect to:',
    list: [
      'Provide and manage tree care services',
      'Respond to inquiries and service requests',
      'Schedule appointments and send reminders',
      'Send promotional communications (with your consent)',
      'Improve our website and service quality',
      'Comply with applicable laws and regulations',
    ],
  },
  {
    title: '5. Cookies and Tracking Technologies',
    content:
      'We use cookies and similar technologies to improve website functionality, analyze traffic, and enhance user experience. Cookies do not store sensitive personal information. By continuing to use this website, you consent to our use of cookies in accordance with this policy.',
  },
  {
    title: '6. Data Security',
    content:
      'We implement reasonable administrative, technical, and physical security measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is 100% secure.',
  },
  {
    title: '7. Data Retention',
    content:
      'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law. When your data is no longer needed, we securely delete or anonymize it.',
  },
  {
    title: '8. Your Privacy Rights',
    intro:
      'Depending on your location, you may have the following rights regarding your personal data:',
    list: [
      'Access: Request a copy of the personal data we hold about you',
      'Correction: Request correction of inaccurate personal data',
      'Deletion: Request deletion of your personal data (including your mobile number and SMS consent record)',
      'Opt-Out of SMS: Reply STOP to any text message at any time',
      'Opt-Out of Marketing: Contact us directly to be removed from marketing lists',
    ],
    outro:
      'To exercise any of these rights, contact us at  or call 716-217-2500.',
  },
  {
    title: '9. Changes to This Privacy Policy',
    content:
      'We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised "Last Updated" date. Continued use of our website or services after any changes constitutes your acceptance of the updated policy.',
  },
  {
    title: '10. Contact Information',
    intro:
      'If you have questions or concerns about this Privacy Policy, please contact us:',
    list: [
      'Company: Orchard Park Tree Service',
      'Address: Orchard Park, NY 14127',
      'Phone: 716-217-2500',
      'Email: ',
    ],
  },
];

export default function PrivacyPolicy({ onClose }) {

  // Lock background page scroll while Privacy Policy is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[200]"
      style={{
        backgroundColor: 'rgba(42,26,14,0.6)',
        backdropFilter: 'blur(6px)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >

      {/* FIXED CLOSE BUTTON */}
      <button
        type="button"
        onClick={onClose}
        className="fixed z-[9999] w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 hover:bg-[#e8622a] hover:text-white"
        style={{
          top: '20px',
          right: '20px',
          backgroundColor: '#fdf0e6',
          boxShadow: '0 4px 16px rgba(42,26,14,0.25)',
          color: '#7a5540',
        }}
        aria-label="Close Privacy Policy"
      >
        <X size={21} strokeWidth={2.5} />
      </button>

      {/* SCROLLABLE MODAL AREA */}
      <div
        className="h-screen overflow-y-auto px-5 py-12"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <motion.div
          className="w-full max-w-[820px] mx-auto"
          style={{
            backgroundColor: '#fdf0e6',
            borderRadius: 24,
            padding: '48px 48px 56px',
            boxShadow: '0 24px 80px rgba(42,26,14,0.25)',
          }}
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 20,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={(e) => e.stopPropagation()}
        >

          {/* Header */}
          <div
            className="mb-8 pb-6"
            style={{
              borderBottom:
                '1px solid rgba(232,98,42,0.15)',
            }}
          >
            <h1
              className="text-[30px] font-black tracking-tight mb-3"
              style={{ color: '#2a1a0e' }}
            >
              Privacy{' '}
              <span style={{ color: '#e8622a' }}>
                Policy
              </span>
            </h1>

            <p
              className="text-[13px] font-medium"
              style={{ color: '#7a5540' }}
            >
              Effective Date: January 19, 2025
              &nbsp;|&nbsp;
              Last Updated: July 9, 2026
            </p>

            <p
              className="text-[14px] leading-relaxed mt-3"
              style={{ color: '#5a3a28' }}
            >
              Orchard Park Tree Service ("we," "our," or "us")
              is committed to protecting your privacy and
              personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your
              data in compliance with applicable U.S. data
              protection laws, including the CCPA and GDPR where
              applicable.
            </p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-7">

            {sections.map((sec) => (
              <div key={sec.title}>

                <h2
                  className="text-[17px] font-black mb-3"
                  style={{ color: '#2a1a0e' }}
                >
                  {sec.title}
                </h2>

                {sec.intro && (
                  <p
                    className="text-[14px] leading-relaxed mb-2"
                    style={{ color: '#5a3a28' }}
                  >
                    {sec.intro}
                  </p>
                )}

                {sec.content && (
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: '#5a3a28' }}
                  >
                    {sec.content}
                  </p>
                )}

                {sec.list && (
                  <ul className="flex flex-col gap-1.5 mt-2 ml-1">
                    {sec.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[14px]"
                        style={{ color: '#5a3a28' }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{
                            backgroundColor: '#e8622a',
                          }}
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.outro && (
                  <p
                    className="text-[14px] leading-relaxed mt-3"
                    style={{ color: '#5a3a28' }}
                  >
                    {sec.outro}
                  </p>
                )}

                {sec.subsections && (
                  <div className="flex flex-col gap-4 mt-2">

                    {sec.subsections.map((sub) => (
                      <div
                        key={sub.sub}
                        className="pl-4"
                        style={{
                          borderLeft:
                            '3px solid rgba(232,98,42,0.25)',
                        }}
                      >
                        <p
                          className="text-[14px] font-bold mb-1"
                          style={{ color: '#2a1a0e' }}
                        >
                          {sub.sub}
                        </p>

                        <p
                          className="text-[14px] leading-relaxed"
                          style={{ color: '#5a3a28' }}
                        >
                          {sub.text}
                        </p>
                      </div>
                    ))}

                  </div>
                )}

              </div>
            ))}

          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}