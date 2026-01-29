import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Mail, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 container-custom text-center px-4">
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-muted-foreground">Disponible pour de nouvelles opportunités</span>
        </div>

        {/* Name */}
        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="gradient-text">Mounir Zerrougui</span>
        </h1>

        {/* Title */}
        <h2 
          className={`text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/90 mb-4 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Développeur Power Platform & Data Analyst
        </h2>

        {/* Description */}
        <p 
          className={`text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Spécialisé dans la création d'applications métiers, l'automatisation de processus, 
          l'analyse de données et le reporting avec Power Apps, Power Automate, Power BI, 
          Dataverse et SharePoint.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl animate-pulse-glow"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="w-5 h-5 mr-2" />
            Me contacter
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-border hover:bg-secondary px-8 py-6 text-lg rounded-xl"
            onClick={() => scrollToSection('experience')}
          >
            <Download className="w-5 h-5 mr-2" />
            Voir mon CV
          </Button>
        </div>

        {/* Social Links */}
        <div 
          className={`flex items-center justify-center gap-4 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-foreground" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6 text-foreground" />
          </a>
          <a 
            href="mailto:mounir.zerrougui34@gmail.com"
            className="p-3 rounded-xl glass hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6 text-foreground" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button 
          onClick={() => scrollToSection('a-propos')}
          className="p-2 rounded-full glass hover:bg-primary/20 transition-all duration-300 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-foreground" />
        </button>
      </div>
    </section>
  );
}
