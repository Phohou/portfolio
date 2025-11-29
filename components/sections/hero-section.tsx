"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 mx-auto">
              <Image 
                src="/portfolio/profile_picture.jpg" 
                alt="Daniel Liu" 
                width={128}
                height={128}
                className="rounded-full object-cover border-4 border-primary/20"
                priority
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Daniel Liu
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            Software Engineer | Full Stack Developer | Researcher
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Passionate about building innovative software solutions and advancing the field of computer science through research in AI-powered systems and software engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <Link href="#contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
            <Link href="/resume.pdf" target="_blank">
              <Button size="lg" variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </Button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-4"
          >
            <Link
              href="https://github.com/Phohou"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent rounded-full"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/danielliu2005/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:danliu031505@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent rounded-full"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
