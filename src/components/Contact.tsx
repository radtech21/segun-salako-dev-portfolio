import { Github, Linkedin, Twitter } from "lucide-react";
import ContactDialog from "./ContactDialog";

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <span className="font-mono text-primary text-sm tracking-wider">
          CONTACT
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
          Let's Work Together
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Whether you have a project in mind, need technical consultation, or
          want to discuss opportunities, I'd love to hear from you.
        </p>

        <div className="mb-12">
          <ContactDialog />
        </div>

        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label={link.label}
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
