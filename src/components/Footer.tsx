import { Shield } from "lucide-react";

const footerLinks = {
  Solutions: ["Threat Detection", "SOC Services", "Incident Response", "Cloud Security"],
  Company: ["About Us", "Careers", "Press", "Contact"],
  Resources: ["Blog", "Case Studies", "Documentation", "API"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "Compliance"],
};

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-7 h-7 text-primary" />
              <span className="text-lg font-bold">
                <span className="text-gradient-primary">GEM</span>
                <span className="text-foreground/80 ml-1">Cybersecurity</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Enterprise cyber defense and digital trust engineering for high-risk environments.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4 text-sm">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GEM Cybersecurity Assist. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["SOC 2", "ISO 27001", "GDPR"].map((cert) => (
              <span
                key={cert}
                className="text-xs font-mono text-muted-foreground/60"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
