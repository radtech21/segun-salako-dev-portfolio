import { Trophy, Star, Target, Medal, Sparkles, Zap, Users,  Globe,  Award, Rocket, } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
  {
    icon: Users,
    title: "Scaled User-Focused Applications",
    description:
      "Designed and built production applications serving over 5,000 active users across Southern Africa, with a focus on reliability, performance, and user experience.",
    year: "—",
  },
  {
    icon: Rocket,
    title: "CTO & Co-Builder of e-Estates",
    description:
      "Co-built and led the technical development of e-Estates, a digital property management platform used by over 5,000+ residents across Nigeria.",
    year: "—",
  },
  {
    icon: Globe,
    title: "Multi-Country Product Delivery",
    description:
      "Built, deployed, and delivered production-grade applications across 6+ countries, collaborating with distributed teams and diverse stakeholders.",
    year: "—",
  },
  {
    icon: Award,
    title: "Recognition for Software Education Impact",
    description:
      "Awarded formal recognition for contributions to software education and technology capacity-building initiatives in Oyo State, Nigeria.",
    year: "—",
  },
  {
    icon: Sparkles,
    title: "JoyLabs Youth Initiative – Founder & Pioneer",
    description:
      "Featured as a pioneer and founder of the JoyLabs Youth Initiative, focused on empowering young people through technology, innovation, and mentorship.",
    year: "—",
  },
  {
    icon: Trophy,
    title: "Innovative & Impact-Driven Projects",
    description:
      "Consistently delivered innovative, high-impact software products across Nigeria and international markets, spanning public-sector and private-sector use cases.",
    year: "—",
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
