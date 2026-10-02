import { Header } from './components/Header';
import { useReveal } from './components/useReveal';
import { SECTION_IDS } from './config/sections';
import { useI18n } from './i18n/context';
import { Contact } from './sections/Contact';
import { Faq } from './sections/Faq';
import { Footer } from './sections/Footer';
import { Gallery } from './sections/Gallery';
import { Hero } from './sections/Hero';
import { Philosophy } from './sections/Philosophy';
import { Pricing } from './sections/Pricing';
import { Process } from './sections/Process';
import { Services } from './sections/Services';
import { Trust } from './sections/Trust';

export function App() {
  const { t } = useI18n();
  useReveal();

  return (
    <div id="top">
      <a className="skip-link" href={`#${SECTION_IDS.main}`}>
        {t.skipLink}
      </a>
      <Header />
      <main id={SECTION_IDS.main} tabIndex={-1}>
        <Hero />
        <Gallery />
        <Services />
        <Pricing />
        <Process />
        <Philosophy />
        <Trust />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
