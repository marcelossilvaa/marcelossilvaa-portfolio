import Banner from '@/app/LandingPage/Banner';
import Header from '@/app/LandingPage/Header';
import AboutMe from '@/app/LandingPage/AboutMe';
import Skills from '@/app/LandingPage/Skills';
import AcademicEducation from '@/app/LandingPage/AcademicEducation';
import Professional from '@/app/LandingPage/Professional';
import Projects from '@/app/LandingPage/Projects';
import Footer from '@/app/LandingPage/Footer';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Header />
      <Banner />
      <AboutMe />
      <Skills />
      <AcademicEducation />
      <Professional />
      <Projects />
      <Footer />
    </main>
  );
}
