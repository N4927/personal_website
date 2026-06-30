import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProfileSections } from "./components/ProfileSections";
import { ProjectShowcase } from "./components/ProjectShowcase";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectShowcase />
        <ProfileSections />
        <Contact />
      </main>
    </>
  );
}
