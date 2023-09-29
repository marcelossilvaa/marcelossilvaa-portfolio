import Banner from '@/components/Banner';
import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import AcademicEducation from '@/components/AcademicEducation';
import Professional from '@/components/Professional';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

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
