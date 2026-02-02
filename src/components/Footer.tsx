const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gradient font-bold text-lg">SS</span>
            <span className="text-muted-foreground font-mono text-sm">dev</span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} Segun Salako. Built with passion.
          </p>

          <p className="text-muted-foreground text-sm font-mono">
            Lagos, Nigeria 🇳🇬
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
