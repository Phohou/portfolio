"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";

const publications = [
  {
    title: "A Large-Scale Study on the Development and Issues of Multi-Agent AI Systems",
    authors: ["Daniel Liu", "Krishna Upadhyay", "Vinaik Chhetri", "Dr. A.B. Siddique", "Dr. Umar Farooq"],
    venue: "2025 IEEE International Conference on Big Data",
    year: "2025",
    type: "Workshop",
    status: "To Appear",
    award: null,
    doi: null,
  },
];

export function PublicationsSection() {
  return (
    <section id="publications" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Publications</h2>
          <p className="text-muted-foreground text-lg">
            Research contributions in AI systems and software engineering
          </p>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg hover:border-primary transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {pub.doi ? (
                          <a
                            href={pub.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            {pub.title}
                          </a>
                        ) : (
                          pub.title
                        )}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {pub.authors.map((author, i) => (
                          <span key={i}>
                            {author === "Daniel Liu" ? (
                              <strong>{author}</strong>
                            ) : (
                              author
                            )}
                            {i < pub.authors.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </CardDescription>
                    </div>
                    <BookOpen className="h-8 w-8 text-primary flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{pub.venue}</Badge>
                    <Badge variant="outline">{pub.type}</Badge>
                    <Badge variant="outline">{pub.year}</Badge>
                    <Badge variant="outline">{pub.status}</Badge>
                    {pub.award && (
                      <Badge className="bg-yellow-500 hover:bg-yellow-600">
                        <Award className="h-3 w-3 mr-1" />
                        {pub.award}
                      </Badge>
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
