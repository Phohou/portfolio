"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "GuessTify",
    description: "Interactive Spotify-based music guessing game where players identify songs from audio clips. Built with modern web technologies and integrated with Spotify API.",
    type: "Web App",
    technologies: [ "Next.js", "Spotify API", "TypeScript"],
    github: "https://github.com/Phohou/spotify_guessing_game",
    demo: "https://guesstify.vercel.app/",
  },
  {
    title: "Flourish",
    description: "Social gardening app developed for SASE 2025 Hackathon. Track your plants with photo recognition, manage your garden, connect with fellow plant enthusiasts, and earn achievements as you grow.",
    type: "Hackathon, Mobile App",
    technologies: ["Flutter", "Dart", "Firebase", "Mobile Development"],
    github: "https://github.com/ahmxdhijazi/WeCooked-SASE2025",
  },
  {
    title: "NestCents",
    description: "Financial management application developed at WICS Hackathon. Helps users track expenses, manage budgets, and achieve financial goals through intuitive interface.",
    type: "Hackathon, Web App",
    technologies: ["Next.js", "VapiAI", "Finance"],
    github: "https://github.com/Phohou/WICShackathon",
  },
  {
    title: "Agentic LLM Research",
    description: "Research project exploring multi-agent AI systems and their development patterns. Analysis of large-scale AI system architectures and implementation strategies.",
    type: "Research",
    technologies: ["Python", "AI/ML", "Multi-Agent Systems"],
    github: "https://github.com/Phohou/agentic-llm-research",
    stars: 2,
  },
  {
    title: "Hackathon Project",
    description: "Web application developed during a hackathon event, showcasing rapid prototyping and full-stack development skills.",
    type: "Hackathon, Web App",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Phohou/Hackathon-Project",
  },
  {
    title: "Pokedex",
    description: "Interactive Pokémon database application with search functionality and detailed information display using external APIs.",
    type: "Python Project",
    technologies: ["Python", "API Integration", "Web Development"],
    github: "https://github.com/Phohou/Pokedex",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg">
            A showcase of my work in software development and research
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg hover:border-primary transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Code2 className="h-8 w-8 text-primary flex-shrink-0" />
                    <Badge variant="secondary">{project.type}</Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.demo && (
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </Link>
                    )}
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    </Link>
                    {project.stars && (
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        ⭐ {project.stars}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
