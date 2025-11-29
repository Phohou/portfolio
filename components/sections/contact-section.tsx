"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always interested in discussing research opportunities, collaboration, or exciting projects. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Email */}
                <Link
                  href="mailto:danliu031505@gmail.com"
                  className="flex flex-col items-center p-6 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    danliu031505@gmail.com
                  </p>
                </Link>

                {/* GitHub */}
                <Link
                  href="https://github.com/Phohou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Github className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    @Phohou
                  </p>
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/in/danielliu2005/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Linkedin className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Connect with me
                  </p>
                </Link>
              </div>

              <div className="mt-8 text-center">
                <Link href="mailto:danliu031505@gmail.com">
                  <Button size="lg" className="gap-2">
                    <Send className="h-4 w-4" />
                    Send Me a Message
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
