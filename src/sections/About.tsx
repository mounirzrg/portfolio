import { useEffect, useRef, useState } from 'react';
import { Code2, Database, LineChart, Workflow } from 'lucide-react';

const stats = [
  { icon: Code2, value: '10+', label: 'Applications Power Apps' },
  { icon: Database, value: '5+', label: 'Années d\'expérience' },
  { icon: LineChart, value: '50+', label: 'Rapports Power BI' },
  { icon: Workflow, value: '20+', label: 'Flux automatisés' },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="a-propos" 
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            À propos de moi
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Passionné par la <span className="gradient-text">technologie</span> et l'<span className="gradient-text">innovation</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div 
            className={`space-y-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Je suis un développeur Power Platform et Data Analyst avec une solide expérience 
              dans la création de solutions digitales innovantes. Mon parcours chez 
              <span className="text-primary font-semibold"> Condor Electronics</span> m'a permis 
              de développer plus de 10 applications métiers utilisées quotidiennement par 
              différentes directions et Business Units.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mon expertise couvre l'ensemble de l'écosystème Microsoft Power Platform : 
              Power Apps pour le développement d'applications, Power Automate pour 
              l'automatisation des processus, Power BI pour l'analyse et la visualisation 
              des données, ainsi que Dataverse et SharePoint pour la gestion des données.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Je combine compétences techniques rigoureuses et vision stratégique pour 
              accompagner les entreprises dans leur transformation digitale et optimiser 
              leurs processus décisionnels.
            </p>

            {/* Personal Qualities */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Qualités personnelles</h3>
              <div className="flex flex-wrap gap-2">
                {['Rigueur', 'Esprit analytique', 'Autonomie', 'Collaboration', 'Pédagogie', 'Adaptation'].map((quality) => (
                  <span 
                    key={quality}
                    className="px-4 py-2 rounded-full glass text-sm text-foreground hover:bg-primary/20 transition-colors duration-300"
                  >
                    {quality}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div 
            className={`grid grid-cols-2 gap-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="p-6 rounded-2xl glass hover:bg-primary/10 transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
