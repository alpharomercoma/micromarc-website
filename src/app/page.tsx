import Hero from '@/components/Hero';
import About from '@/components/About';
import ResearchFocus from '@/components/ResearchFocus';
import TeamMembers from '@/components/TeamMembers';
import Collaborators from '@/components/Collaborators';
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ResearchFocus />
      <TeamMembers />
      <Collaborators />
      <ContactForm />
    </>
  );
}
