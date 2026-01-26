import { Users, Code, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const highlights = [
    {
      icon: Users,
      title: "Technical Leadership",
      description:
        "Led and managed cross-functional technical teams, driving project delivery and maintaining high code quality standards across multiple projects.",
    },
    {
      icon: Code,
      title: "Hands-On Development",
      description:
        "Actively involved in architecture decisions, code reviews, and hands-on development across the full stack, from backend APIs to frontend interfaces.",
    },
    {
      icon: Briefcase,
      title: "Multi-Sector Experience",
      description:
        "Delivered impactful solutions across HealthTech, PropTech, FinTech, and Government sectors with visibility in multiple countries.",
    },
  ];

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "6+", label: "Countries" },
    { value: "100+", label: "Developers Mentored" },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider">
            EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            What I Bring to the Table
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-secondary/50 border border-border"
            >
              <p className="text-3xl md:text-4xl font-bold text-gradient">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card key={index} className="card-hover bg-card border-border">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mentorship Note */}
        <div className="mt-16 text-center p-8 rounded-xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond technical work, I'm passionate about{" "}
            <span className="text-foreground font-medium">
              mentoring young developers
            </span>{" "}
            through training programs, seminars, and community initiatives, helping
            shape the next generation of tech talent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
