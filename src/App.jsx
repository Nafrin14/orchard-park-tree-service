import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <div
        style={{
          backgroundColor: '#f0956a',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          padding: '0 0 32px 0',
        }}
      >
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />

        <Footer
          onPrivacyClick={() => setShowPrivacy(true)}
          onTermsClick={() => setShowTerms(true)}
        />
      </div>

      <AnimatePresence>
        {showPrivacy && (
          <PrivacyPolicy
            onClose={() => setShowPrivacy(false)}
          />
        )}

        {showTerms && (
          <TermsConditions
            onClose={() => setShowTerms(false)}
          />
        )}
      </AnimatePresence>
    </>
  );```jsx
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';


import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';


import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';


function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);


  return (
    <>
      <div
        style={{
          backgroundColor: '#f0956a',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          padding: '0 0 32px 0',
        }}
      >
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />


        <Footer
          onPrivacyClick={() => setShowPrivacy(true)}
          onTermsClick={() => setShowTerms(true)}
        />
      </div>


      <AnimatePresence>
        {showPrivacy && (
          <PrivacyPolicy
            onClose={() => setShowPrivacy(false)}
          />
        )}


        {showTerms && (
          <TermsConditions
            onClose={() => setShowTerms(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}


export default App;
```

}

export default App;