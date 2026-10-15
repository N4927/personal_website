import { useEffect } from "react";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProfileSections } from "./components/ProfileSections";
import { ProjectShowcase } from "./components/ProjectShowcase";

export default function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -4% 0px" });

    revealElements.forEach((element) => observer.observe(element));
    document.documentElement.classList.add("motion-ready");
    const target = document.getElementById(window.location.hash.slice(1));
    target?.scrollIntoView({ behavior: "instant" });
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <ProjectShowcase />
        <ProfileSections />
      </main>
      <Contact />
    </>
  );
}
