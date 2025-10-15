import '../styles.css';
import '../styles/academy.css';
import Navigation from '../components/Navigation';
import AcademyHero from '../components/Academy/AcademyHero';
import AcademyProblem from '../components/Academy/AcademyProblem';
import AcademySolution from '../components/Academy/AcademySolution';
import BigQuote from '../components/BigQuote';
import BentoInfo from '../components/BentoInfo';
import AcademyExperts from '../components/Academy/AcademyExperts';
import YouTubeVideo from '../components/YouTubeVideo';
import Projects from '../components/Projects';
import ProjectsCTA from '../components/ProjectsCTA';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import AcademyPricing from '../components/Academy/AcademyPricing';
import AcademyCTA from '../components/Academy/AcademyCTA';
import YouTubeCarousel from '../components/YouTubeCarousel';
import Footer from '../components/Footer';

const AcademyPage = () => {
  return (
    <div className="academy-page">
      <div className="grid-pattern-global"></div>
      <Navigation />
      <AcademyHero />
      <AcademyProblem />
      <AcademySolution />
      <BigQuote />
      <BentoInfo />
      <AcademyExperts />
      <YouTubeVideo />
      <Projects />
      <ProjectsCTA />
      <Testimonials />
      <Partners />
      <AcademyPricing />
      <AcademyCTA />
      <YouTubeCarousel />
      <Footer />
    </div>
  );
};

export default AcademyPage;
