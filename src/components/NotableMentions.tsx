import { Newspaper, Mic, BookOpen, Radio, Video, Quote, Building2,  Landmark,  ShieldCheck,  Users,} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const NotableMentions = () => {
  const mentions = [
  {
    icon: Newspaper,
    type: "Press",
    title: "Disrupt Africa – e-Estates Fundraising",
    source: "Disrupt Africa",
    description:
      "Coverage of E-Estates’ fundraising and growth, highlighting the platform’s mission to simplify estate management, with Segun Salako serving as CTO.",
    link: "https://disruptafrica.com/2018/05/25/nigerias-e-estates-put-convenience-at-residents-fingertips/",
  },
  {
    icon: Building2,
    type: "Press",
    title: "Honeywell Group / Itanna Investment",
    source: "Honeywell Group (Itanna)",
    description:
      "Official announcement of Itanna’s $30,000 investment in e-Estates, supporting the company’s expansion and technology roadmap.",
    link: "https://www.honeywellgroup.com/updates/press-releases/54",
  },
  {
    icon: Landmark,
    type: "Press",
    title: "CcHUB Venture Support – e-Estates",
    source: "Co-Creation Hub (CcHUB)",
    description:
      "Recognition of e-Estates’ $100,000 funding and venture support from CcHUB, backing its role in modernising property management in Nigeria.",
    link: "https://cchub.africa/venture/e-estate/",
  },
  {
    icon: ShieldCheck,
    type: "Government / Public Sector",
    title: "Oyo State Digital Ticketing System",
    source: "THISDAY Newspaper (Nigeria)",
    description:
      "Coverage of the digital transport ticketing system developed for Oyo State, enhancing safety, transparency, and accountability during COVID-era operations.",
    link: "https://www.thisdaylive.com/2021/03/18/digital-ticketing-system-enhances-safety-and-transparency-in-oyo-states-covid-era-transport-operations/",
  },
  {
    icon: Users,
    type: "Community Impact",
    title: "JoyLabs Youth Initiative",
    source: "JoyLabs / RadiiTech",
    description:
      "Recognition of contributions to youth development and technology empowerment through the JoyLabs Youth Initiative.",
    link: "https://joylabs.radiitech.tech",
  },
];

  const typeColors: Record<string, string> = {
    Press: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    Speaking: "bg-green-500/10 text-green-400 border-green-500/30",
    Publication: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    Podcast: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    Conference: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    Interview: "bg-pink-500/10 text-pink-400 border-pink-500/30",
  };

  return (
    <section id="mentions" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider">
            IN THE SPOTLIGHT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Notable Mentions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Featured appearances, publications, and media coverage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {mentions.map((mention, index) => (
            <Card
              key={index}
              className="card-hover bg-card border-border group"
            >
                <CardContent className="p-6">
                  <a
                    href={mention.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                        <mention.icon className="text-primary" size={24} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <Badge
                            variant="outline"
                            className={`text-xs ${typeColors[mention.type]}`}
                          >
                            {mention.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {mention.source}
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {mention.title}
                          <span className="ml-1 text-xs opacity-60">↗</span>
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {mention.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </CardContent>

            </Card>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20 text-center">
          <Quote className="text-primary mx-auto mb-4" size={32} />
          <blockquote className="text-lg md:text-xl text-foreground max-w-3xl mx-auto italic">
            "Technology is only as powerful as the people who wield it. My mission is to build great products while empowering the next generation of African developers."
          </blockquote>
          <p className="text-primary font-semibold mt-4">— Segun Salako</p>
        </div>
      </div>
    </section>
  );
};

export default NotableMentions;
