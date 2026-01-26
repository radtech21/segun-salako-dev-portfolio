import { GraduationCap, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const education = [
    {
      degree: "M.Sc. Computer Science",
      school: "Coventry University",
      year: "2020",
    },
    {
      degree: "B.Sc. Computer Science",
      school: "Coventry University",
      year: "2018",
    },
  ];

  const certifications = [
    "AWS Solutions Architect",
    "AWS Developer Associate",
    "AWS Cloud Practitioner",
    "CompTIA Security+",
    "CompTIA Network+",
    "CompTIA A+",
  ];

  const industries = [
    "HealthTech",
    "PropTech",
    "FinTech",
    "Government",
    "Real Estate",
    "Public Sector",
  ];

  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider">ABOUT ME</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Background & Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education Card */}
          <Card className="card-hover bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4">
                    <p className="font-medium">{edu.degree}</p>
                    <p className="text-muted-foreground text-sm">{edu.school}</p>
                    <p className="text-muted-foreground text-xs font-mono">{edu.year}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications Card */}
          <Card className="card-hover bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Industries Card */}
          <Card className="card-hover bg-card border-border md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Globe className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Industries</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {industry}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                Global visibility across multiple countries and regions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
