"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Louisiana State University",
    location: "Baton Rouge, LA",
    period: "Expected 2027",
    description: "Concentration on Software Engineering",
    courses: [
      "Advanced Data Structures",
      "Discrete Structures",
      "Computer Organization & Design",
      "Numerical Methods",
      "Systems Programming",
      "Programming Languages",
      "Database Management Systems",
      "Software Quality & Testing",
      "Compiler Construction",
    ],
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg">
            Academic background and coursework
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{edu.degree}</CardTitle>
                      <CardDescription className="text-base mb-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-foreground">
                            {edu.institution}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </span>
                        </div>
                      </CardDescription>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                    <GraduationCap className="h-10 w-10 text-primary flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{edu.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <Badge key={i} variant="secondary">
                          {course}
                        </Badge>
                      ))}
                    </div>
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
