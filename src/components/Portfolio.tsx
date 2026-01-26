import { ExternalLink, Github, Building2, Heart, Landmark, Home, CreditCard, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Digital Banking Platform",
      category: "FinTech",
      description:
        "Led development of a comprehensive digital banking solution with real-time transactions, KYC integration, and multi-currency support.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      icon: CreditCard,
    },
    {
      title: "Healthcare Management System",
      category: "HealthTech",
      description:
        "Built an end-to-end healthcare platform connecting patients with providers, featuring appointment scheduling and telemedicine capabilities.",
      technologies: ["TypeScript", "Next.js", "MongoDB", "Docker"],
      icon: Heart,
    },
    {
      title: "Property Management Suite",
      category: "PropTech",
      description:
        "Developed a real estate platform for property listings, virtual tours, and automated tenant management workflows.",
      technologies: ["Vue.js", "Python", "Django", "Redis"],
      icon: Home,
    },
    {
      title: "Government Services Portal",
      category: "Public Sector",
      description:
        "Architected a citizen-facing portal for accessing government services, document verification, and digital identity management.",
      technologies: ["Angular", "Java", "Spring Boot", "Oracle"],
      icon: Landmark,
    },
    {
      title: "Enterprise Asset Tracker",
      category: "Enterprise",
      description:
        "Created an IoT-enabled asset tracking solution for large organizations with real-time location monitoring and maintenance scheduling.",
      technologies: ["React Native", "Go", "GraphQL", "TimescaleDB"],
      icon: Building2,
    },
    {
      title: "Logistics Management Platform",
      category: "Supply Chain",
      description:
        "Built a comprehensive logistics platform with route optimization, fleet management, and real-time delivery tracking.",
      technologies: ["React", "Rust", "Kafka", "Kubernetes"],
      icon: Truck,
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
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <Github size={16} className="mr-1" />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <ExternalLink size={16} className="mr-1" />
                    Demo
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
