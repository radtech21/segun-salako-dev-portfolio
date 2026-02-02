import { ExternalLink, Github, Building2, Heart, Landmark, DiamondPercent, HeartHandshake, GraduationCap, BriefcaseMedical,CreditCard, Truck, Tractor, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "RadiiMed Health Platform (Botswana)",
      category: "HealthTech",
      description: "AI-Powered Patient Management. RadiiMed is an AI-powered health platform that helps Doctors and health professionals manage their daily operations, track patient, manage consultations and streamline data management and prescription history.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      icon: BriefcaseMedical,
      link: "https://med.radiitech.tech"
    },
    {
      title: "Farm4Trade (Italy)",
      category: "Agrotech",
      description:"Farm4trade develops Computer Vision solutions based on AI tools for the zootechnical industry, Farm4Trade uses AI technological tools to improve Animal Health, Animal Welfare and Food Traceability across the full livestock value chain.",
      technologies: ["Java", "Vue.js", "MongoDB", "Docker"],
      icon: Heart,
      link: "https://farm4trade.com/"
    },
    {
      title: "Loop Learn (Canada)",
      category: "EdTech",
      description: "Smart spaced repetition learning: We help you master any subject with looplearn's intelligent spaced repetition system. Import Anki decks or create new ones with our beautiful, user-friendly interface designed specifically for medical education.",
      technologies: ["React", "Typescript", "TensorFlow", "OpenAI API"],
      icon: GraduationCap,
      link: "https://looplearn.ca/"

    },
    {
      title: "LoomAgency AI (Canada)",
      category: "SocialTech",
      description: "Smart AI assisted Ad management solution. Setup your brand profile and paste your campaigns and let LoomAgency map you with the right creators and influencers to amplify your campaign live to their followers..",
      technologies: ["Next.js", "Supabase", "PostgreSQL"],
      icon: DiamondPercent,
      link: "https://loomagency.ai/"

    },
    {
      title: "Slide-Out AI (USA)",
      category: "P2P Marketplace",
      description: "SlideoutJS is a student-focused marketplace that makes buying and selling secondhand items easy, helping university students move out smoothly and trade essentials within their campus community.",
      technologies: ["TypeScript", "Express.js", "MySQL", "Perplexity AI", "Open AI"],
      icon: HeartHandshake,
      link: "https://slideout.ai/"

    },
    {
      title: "PiggyAlpha (Canada)",
      category: "Fintech",
      description:"Built a comprehensive logistics platform with route optimization, fleet management, and real-time delivery tracking.",
      technologies: ["Next.js", "Node.js", "AWS", "Redis"],
      icon: CreditCard,
      link: "https://piggyalpha.com/"

    },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider">
            PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A selection of projects I've led or contributed to across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-hover bg-card border-border group overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="text-primary" size={24} />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </Link>
                </Button>
              </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
