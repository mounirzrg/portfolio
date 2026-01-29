import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: 'Condor Electronics',
    location: 'Bordj Bou Arreridj, Algérie',
    position: 'Développeur Power Platform',
    period: '2019 - 2021',
    description: 'Développement de plus de 10 applications Power Apps actuellement utilisées par différentes directions et Business Units.',
    achievements: [
      'Développement de l\'application POS Check pour la gestion des points de vente',
      'Création de TaskHub pour la gestion des tâches et projets',
      'Développement de CondorAssist pour le support interne',
      'Mise en place de MarketLens pour l\'analyse de marché',
      'Création de PortailSIM pour la gestion des SIM',
      'Développement de PerfectWorker pour la gestion des ressources humaines',
      'Création de Fikrati pour la collecte d\'idées et innovations',
      'Intégration de rapports Power BI pour analyser et exploiter les données collectées',
      'Automatisation des processus métier avec Power Automate',
    ],
    technologies: ['Power Apps', 'Power Automate', 'Power BI', 'Dataverse', 'SharePoint'],
  },
  {
    company: 'Armée Nationale Populaire Algérienne',
    location: 'Caisse Régionale du Retraites Militaires/2RM, Oran',
    position: 'Officier',
    period: '2018 - 2019',
    description: 'Service militaire en tant qu\'officier avec responsabilités administratives et opérationnelles.',
    achievements: [
      'Gestion administrative de personnel',
      'Coordination inter-services',
      'Planification et organisation d\'opérations',
      'Développement du leadership et de la discipline',
    ],
    technologies: ['Gestion de projet', 'Leadership', 'Administration'],
  },
  {
    company: 'GHANO Mobile',
    location: 'Bordj Bou Arreridj, Algérie',
    position: 'Technicien Software & Hardware',
    period: '2016 - 2019',
    description: 'Réparation et maintenance de smartphones, diagnostic et résolution de problèmes logiciels et matériels.',
    achievements: [
      'Diagnostic et réparation de smartphones (iOS et Android)',
      'Résolution de problèmes logiciels et matériels',
      'Service client et conseil technique',
      'Gestion des stocks de pièces détachées',
    ],
    technologies: ['iOS', 'Android', 'Hardware', 'Software'],
  },
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Expérience professionnelle
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Mon <span className="gradient-text">parcours</span> professionnel
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une expérience diversifiée allant le développement d'applications à la gestion de projets.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />
              )}

              <div className="flex gap-6 mb-8">
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-lg shadow-primary/30">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div 
                    className="p-6 rounded-2xl glass hover:bg-secondary/50 transition-all duration-300 cursor-pointer"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <span className="font-semibold text-foreground">{exp.company}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expandable achievements */}
                    <div 
                      className={`overflow-hidden transition-all duration-500 ${
                        expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-4 border-t border-border">
                        <h4 className="text-sm font-semibold mb-3 text-foreground">Réalisations principales :</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Expand button */}
                    <button 
                      className="mt-4 text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedIndex(expandedIndex === index ? null : index);
                      }}
                    >
                      <span>{expandedIndex === index ? 'Voir moins' : 'Voir plus'}</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
