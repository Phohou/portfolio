import { HeroSection } from "@/components/sections/hero-section";
import { PublicationsSection } from "@/components/sections/publications-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PublicationsSection />
      <ProjectsSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
