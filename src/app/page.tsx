import Banner from '@/app/LandingPage/Banner';
import Header from '@/app/LandingPage/Header';
import ClientLogos from '@/app/LandingPage/ClientLogos';
import AboutMe from '@/app/LandingPage/AboutMe';
import Skills from '@/app/LandingPage/Skills';
import AcademicEducation from '@/app/LandingPage/AcademicEducation';
import Professional from '@/app/LandingPage/Professional';
import Process from '@/app/LandingPage/Process';
import Projects from '@/app/LandingPage/Projects';
import Footer from '@/app/LandingPage/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <ScrollProgress />
      <Header />
      <Banner />
      <ClientLogos />
      <AboutMe />
      <Skills />
      <Professional />
      <AcademicEducation />
      <Process />
      <Projects />
      <Footer />
    </main>
  );
}
