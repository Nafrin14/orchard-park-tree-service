import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const sections = [
  {
    title: '1. Business Identity',
    content:
      'These Terms and Conditions govern your use of the services provided by Orchard Park Tree Service, located at Orchard Park, NY 14127. Contact: 716-217-2500 | .',
  },
  {
    title: '2. Age Requirement (18+)',
    content:
      'By using this website or enrolling in our services, including SMS messaging, you confirm that you are at least 18 years of age. Our SMS program is not directed to individuals under 18.',
  },
  {
    title: '3. Terminology',
    content:
      '"Client," "You," and "Your" refers to the user of this website. "The Company," "We," "Our," and "Us" refers to Orchard Park Tree Service.',
  },
  {
    title: '4. SMS Messaging Terms of Service',
    subsections: [
      {
        sub: '4a. Program Description & Message Types',
        text:
          'By providing your phone number and checking the SMS consent checkbox on our contact forms, you agree to receive recurring automated text messages. Messages may include: free estimate confirmations and scheduling notifications, appointment reminders and project status updates, customer support and service follow-up communications, and promotional offers and seasonal announcements.',
      },
      {
        sub: '4b. Message Frequency',
        text:
          'Message frequency varies based on your service activity and interactions with us. You may receive up to 4–8 messages per month. Frequency may increase during active service periods.',
      },
      {
        sub: '4c. Message & Data Rates',
        text:
          'Message and data rates may apply for any messages sent to you from us and to us from you. Charges are determined by your mobile carrier and your individual service plan. Orchard Park Tree Service is not responsible for any carrier charges.',
      },
      {
        sub: '4d. How to Opt Out (STOP)',
        text:
          'You can opt out of receiving SMS messages at any time by replying STOP to any message we send. After opting out, you will receive a one-time confirmation message and will no longer receive SMS messages from us unless you re-enroll.',
      },
      {
        sub: '4e. How to Get Help (HELP)',
        text:
          'For help with our SMS program, reply HELP to any message or contact us at: Phone: 716-217-2500 | Email: ',
      },
      {
        sub: '4f. Carrier Liability Disclaimer',
        text:
          "Mobile carriers are not liable for delayed or undelivered messages. Orchard Park Tree Service cannot guarantee delivery of SMS messages. Delivery may be subject to your mobile carrier's capability and coverage area.",
      },
      {
        sub: '4g. Supported Carriers',
        text:
          'Our SMS program is supported by all major U.S. wireless carriers including AT&T, Verizon, T-Mobile, and Sprint. Not all carriers are supported for all messages.',
      },
    ],
  },
  {
    title: '5. Cookies',
    content:
      'We use cookies in accordance with our Privacy Policy to improve user experience and website functionality.',
  },
  {
    title: '6. Intellectual Property & License',
    content:
      'Unless otherwise stated, Orchard Park Tree Service owns the intellectual property rights for all content on this website. You may not copy, reproduce, republish, sell, or redistribute any material without prior written permission.',
  },
  {
    title: '7. Comments & User Content',
    content:
      'Orchard Park Tree Service reserves the right to monitor and remove any comments or user-generated content on our platforms that are inappropriate, offensive, or violate these terms.',
  },
  {
    title: '8. Content Liability',
    content:
      'We are not responsible for content that appears on external websites linking to us. You agree to defend and protect Orchard Park Tree Service against any claims arising from your website or digital properties.',
  },
  {
    title: '9. Disclaimer',
    content:
      'To the maximum extent permitted by applicable law, Orchard Park Tree Service excludes all warranties, representations, and conditions relating to our website and services. We are not liable for any loss or damage (including loss of business, profits, or revenue) arising from the use of our website or services.',
  },
  {
    title: '10. Changes to These Terms',
    content:
      'We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with a revised "Last Updated" date. Continued use of our website or services constitutes acceptance of the updated terms.',
  },
  {
    title: '11. Contact Information',
    intro:
      'For questions about these Terms and Conditions, please contact us:',
    list: [
      'Company: Orchard Park Tree Service',
      'Address: Orchard Park, NY 14127',
      'Phone: 716-217-2500',
      'Email: ',
    ],
  },
];

export default function TermsConditions({ onClose }) {

  // Prevent the main website from scrolling
  // while Terms modal is open.
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
        aria-label="Close Terms and Conditions"
      >
        <X size={21} strokeWidth={2.5} />
      </button>

      {/* SCROLLABLE TERMS AREA */}
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
              Terms &amp;{' '}
              <span style={{ color: '#e8622a' }}>
                Conditions
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
              Welcome to Orchard Park Tree Service. By
              accessing this website or using our services, you
              agree to be bound by these Terms and Conditions.
              If you do not agree with any part of these terms,
              please do not use our website or services.
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