import { Heart, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'Accueil', href: 'accueil' },
  { label: 'À propos', href: 'a-propos' },
  { label: 'Compétences', href: 'competences' },
  { label: 'Expérience', href: 'experience' },
  { label: 'Formation', href: 'formation' },
  { label: 'Contact', href: 'contact' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Email', href: 'mailto:mounir.zerrougui34@gmail.com' },
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-secondary/30 border-t border-border">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-2xl font-bold gradient-text"
            >
              Mounir Zerrougui
            </button>
            <p className="text-muted-foreground">
              Développeur Power Platform & Data Analyst passionné par la création 
              de solutions digitales innovantes et l'optimisation des processus métier.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <span className="block text-sm text-foreground">Email</span>
                <a 
                  href="mailto:mounir.zerrougui34@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  mounir.zerrougui34@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-sm text-foreground">Téléphone</span>
                <a 
                  href="tel:+2130540144773"
                  className="hover:text-primary transition-colors"
                >
                  +213 0540 14 47 73
                </a>
              </li>
              <li>
                <span className="block text-sm text-foreground">Localisation</span>
                <span>Bordj Bou Arréridj, Algérie</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Fait avec <Heart className="w-4 h-4 text-red-500 fill-red-500" /> par Mounir Zerrougui
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tous droits réservés.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            title="Retour en haut"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
