"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Express.js", "Next.js", "Spring Boot", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "Docker", "AWS", "Linux", "RESTful APIs", "Postman", "VS Code"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
 {
    category: "AI & Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Multi-Agent Systems", "TensorFlow", "PyTorch", "LangChain"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg">
            Technical expertise and tools I work with
          </p>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-base py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
