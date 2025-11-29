"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Research Assistant",
    company: "Louisiana State University",
    location: "Baton Rouge, LA",
    period: "2024 - Present",
    type: "Research",
    description: "Contributing to research on multi-agent AI systems and software engineering, focusing on large-scale analysis of AI-powered applications and their development patterns.",
    responsibilities: [
      "Conducted large-scale analysis of multi-agent AI systems",
      "Co-authored research papers for IEEE conferences",
      "Collaborated with faculty on AI and software engineering research",
      "Analyzed user feedback patterns in AI-powered mobile applications",
    ],
  },
  {
    title: "Software Developer",
    company: "Independent Projects",
    location: "Remote",
    period: "2022 - Present",
    type: "Development",
    description: "Developed various software projects including games, web applications, and research tools using Java, Python, and web technologies.",
    responsibilities: [
      "Designed and implemented full-stack applications",
      "Built game projects using object-oriented principles",
      "Created data structure implementations and algorithms",
      "Participated in hackathons and collaborative projects",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg">
            Professional experience and contributions
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-2xl">{exp.title}</CardTitle>
                        <Badge variant="secondary">{exp.type}</Badge>
                      </div>
                      <CardDescription className="text-base mb-2">
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-foreground">
                            {exp.company}
                          </span>
                          <div className="flex items-center gap-3 text-sm">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </CardDescription>
                    </div>
                    <Briefcase className="h-10 w-10 text-primary flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{exp.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
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
