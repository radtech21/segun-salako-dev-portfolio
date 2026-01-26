import { Newspaper, Mic, BookOpen, Radio, Video, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NotableMentions = () => {
  const mentions = [
    {
      icon: Newspaper,
      type: "Press",
      title: "TechCabal Feature",
      source: "TechCabal",
      description: "Featured in 'Top 50 African Tech Leaders Shaping the Future' annual list.",
      link: "#",
    },
    {
      icon: Mic,
      type: "Speaking",
      title: "DevFest Africa Keynote",
      source: "Google Developer Groups",
      description: "Delivered keynote on 'Scaling Engineering Teams in Emerging Markets' to 2,000+ attendees.",
      link: "#",
    },
    {
      icon: BookOpen,
      type: "Publication",
      title: "Technical Architecture Guide",
      source: "Medium",
      description: "Published comprehensive guide on microservices architecture with 50K+ reads.",
      link: "#",
    },
    {
      icon: Radio,
      type: "Podcast",
      title: "The African Tech Podcast",
      source: "Spotify",
      description: "Guest episode discussing fintech innovation and the future of digital banking in Africa.",
      link: "#",
    },
    {
      icon: Video,
      type: "Conference",
      title: "AWS re:Invent Speaker",
      source: "Amazon Web Services",
      description: "Presented case study on cloud migration strategies for enterprise applications.",
      link: "#",
    },
    {
      icon: Quote,
      type: "Interview",
      title: "Leadership Insights",
      source: "The Guardian Nigeria",
      description: "In-depth interview on building tech talent pipelines and mentorship programs.",
      link: "#",
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
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {mention.description}
                    </p>
                  </div>
                </div>
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
