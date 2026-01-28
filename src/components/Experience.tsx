import { Users, Code, Briefcase, CheckCircle } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Experience = () => {
  const expertise = [
    "Technical Leadership & Team Management",
    "Full-Stack Architecture & Development",
    "Cross-Sector Experience (HealthTech, PropTech, FinTech, Government)",
    "Global Project Delivery & Visibility",
    "Developer Mentorship & Community Building",
    "Agile Methodologies & Best Practices",
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

        {/* Profile + Expertise */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Picture Placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                <Avatar className="w-full h-full rounded-2xl">
                  <AvatarImage 
                    src="/placeholder.svg" 
                    alt="Segun Salako"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-6xl font-bold bg-secondary text-primary rounded-2xl w-full h-full">
                    SS
                  </AvatarFallback>
                </Avatar>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Expertise Pointers */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-6">Core Expertise</h3>
            {expertise.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <CheckCircle className="text-primary" size={20} />
                </div>
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
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

        {/* Mentorship Note */}
        <div className="text-center p-8 rounded-xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
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
