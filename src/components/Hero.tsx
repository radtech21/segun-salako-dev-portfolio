import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="section-fade">
          <span className="inline-block font-mono text-primary text-sm mb-4 tracking-wider">
            SENIOR SOFTWARE DEVELOPER
          </span>
        </div>
        
        <h1 className="section-fade section-fade-delay-1 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="text-gradient">Segun Salako</span>
        </h1>
        
        <p className="section-fade section-fade-delay-2 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          A Senior Software Developer who has led and contributed to multiple technology projects across fintech, real estate, and public-sector systems, while actively mentoring and supporting young developers through training programs, seminars, and community initiatives.
        </p>
        
        <div className="section-fade section-fade-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="hero" size="lg" asChild>
            <a href="#portfolio">View My Work</a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        
        <div className="section-fade section-fade-delay-3 flex items-center justify-center gap-6">
          <a
            href="https://github.com/radtech21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/segun-salako-a26922121/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
