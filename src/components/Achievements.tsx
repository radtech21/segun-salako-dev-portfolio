import { Trophy, Star, Target, Medal, Sparkles, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Tech Leadership Excellence Award",
      description: "Recognized for outstanding technical leadership and team development across multiple high-impact projects.",
      year: "2023",
    },
    {
      icon: Star,
      title: "Innovation in FinTech",
      description: "Awarded for pioneering digital banking solutions that transformed customer experience for 500K+ users.",
      year: "2022",
    },
    {
      icon: Target,
      title: "Project Delivery Champion",
      description: "Successfully delivered 15+ enterprise projects on time and within budget across 3 continents.",
      year: "2022",
    },
    {
      icon: Medal,
      title: "AWS Community Builder",
      description: "Selected as an AWS Community Builder for contributions to cloud computing education and advocacy.",
      year: "2021",
    },
    {
      icon: Sparkles,
      title: "Top Mentor Award",
      description: "Honored for mentoring 100+ junior developers through bootcamps and community programs.",
      year: "2021",
    },
    {
      icon: Zap,
      title: "Hackathon Grand Prize",
      description: "Led winning team at Pan-African Tech Summit hackathon with an innovative healthcare solution.",
      year: "2020",
    },
  ];

  return (
    <section id="achievements" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider">
            ACHIEVEMENTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Milestones & Awards
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Recognition and accomplishments earned throughout my career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="card-hover bg-card border-border group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="text-primary" size={24} />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {achievement.year}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
