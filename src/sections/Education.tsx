import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educations = [
  {
    degree: 'Master en Informatique',
    field: 'Technologie d\'Information et Communication',
    institution: 'Université El Bachir El Ibrahimi',
    location: 'Bordj Bou Arreridj, Algérie',
    period: '2019 - 2021',
    description: 'Formation approfondie en technologies de l\'information, communication et développement de systèmes d\'information.',
    skills: ['Architecture des SI', 'Gestion de projets IT', 'Développement avancé', 'Réseaux et sécurité'],
  },
  {
    degree: 'Licence en Informatique',
    field: 'Ingénierie des Systèmes d\'Information et du Logiciel',
    institution: 'Université El Bachir El Ibrahimi',
    location: 'Bordj Bou Arreridj, Algérie',
    period: '2016 - 2019',
    description: 'Formation en ingénierie logicielle, conception et développement de systèmes d\'information.',
    skills: ['Programmation', 'Bases de données', 'Analyse et conception', 'Génie logiciel'],
  },
  {
    degree: 'CAP',
    field: 'Réparation des Téléphones Portables',
    institution: 'CFPA Bordj Bou Arreridj',
    location: 'Bordj Bou Arreridj, Algérie',
    period: '2016',
    description: 'Certification professionnelle en réparation et maintenance de smartphones.',
    skills: ['Hardware', 'Software', 'Diagnostic', 'Soudure'],
  },
];

const certifications = [
  {
    name: 'PL-900: Microsoft Power Platform Fundamentals',
    issuer: 'Microsoft',
    icon: 'M',
  },
  {
    name: 'PL-100: Microsoft Power Platform App Maker',
    issuer: 'Microsoft',
    icon: 'M',
  },
  {
    name: 'PL-200: Microsoft Power Platform Functional Consultant',
    issuer: 'Microsoft',
    icon: 'M',
  },
  {
    name: 'PL-400: Microsoft Power Platform Developer',
    issuer: 'Microsoft',
    icon: 'M',
  },
  {
    name: 'DA-100: Analyzing Data with Power BI',
    issuer: 'Microsoft',
    icon: 'M',
  },
];

export default function Education() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="formation" 
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-secondary/30"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Formation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Mon <span className="gradient-text">parcours</span> académique
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une formation solide en informatique complétée par des certifications professionnelles.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {educations.map((edu, index) => (
            <div 
              key={index}
              className={`p-6 rounded-2xl glass hover:bg-secondary/50 transition-all duration-500 hover:scale-[1.02] group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>

              {/* Degree */}
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-primary font-medium mb-4">{edu.field}</p>

              {/* Institution */}
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{edu.institution}</span>
              </div>

              {/* Period */}
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{edu.period}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">{edu.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {edu.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div 
          className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Certifications</span> Microsoft
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-primary/10 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{cert.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {cert.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div 
          className={`mt-16 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Langues</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { lang: 'Arabe', level: 'Langue maternelle', flag: '🇩🇿' },
              { lang: 'Français', level: 'Niveau professionnel', flag: '🇫🇷' },
              { lang: 'Anglais', level: 'Niveau professionnel', flag: '🇬🇧' },
            ].map((item) => (
              <div 
                key={item.lang}
                className="flex items-center gap-3 px-6 py-4 rounded-xl glass hover:bg-primary/10 transition-all duration-300"
              >
                <span className="text-2xl">{item.flag}</span>
                <div>
                  <p className="font-semibold text-foreground">{item.lang}</p>
                  <p className="text-sm text-muted-foreground">{item.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
