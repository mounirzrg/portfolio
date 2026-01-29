import { useEffect, useRef, useState } from 'react';
import { 
  Layers, 
  BarChart3, 
  Code, 
  FileSpreadsheet
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Power Platform',
    icon: Layers,
    skills: [
      { name: 'Power Apps', level: 95 },
      { name: 'Power Automate', level: 90 },
      { name: 'Power BI', level: 88 },
      { name: 'Dataverse', level: 85 },
      { name: 'SharePoint', level: 80 },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Analyse de Données',
    icon: BarChart3,
    skills: [
      { name: 'Reporting', level: 90 },
      { name: 'Data Visualization', level: 88 },
      { name: 'SQL', level: 85 },
      { name: 'Bases de données', level: 82 },
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Développement',
    icon: Code,
    skills: [
      { name: 'Développement Desktop', level: 85 },
      { name: 'Développement Mobile', level: 80 },
      { name: 'Développement Web', level: 78 },
      { name: 'Low-Code', level: 95 },
      { name: 'Traitement d\'image', level: 70 },
      { name: 'IA appliquée', level: 65 },
    ],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Bureautique & IT',
    icon: FileSpreadsheet,
    skills: [
      { name: 'Microsoft Word', level: 90 },
      { name: 'Microsoft Excel', level: 92 },
      { name: 'Microsoft PowerPoint', level: 88 },
      { name: 'Support technique', level: 85 },
    ],
    color: 'from-green-500 to-emerald-500',
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills progressively
          setTimeout(() => {
            skillCategories.forEach((category, catIndex) => {
              category.skills.forEach((_, skillIndex) => {
                setTimeout(() => {
                  setAnimatedSkills(prev => new Set([...prev, `${catIndex}-${skillIndex}`]));
                }, (catIndex * 200) + (skillIndex * 100));
              });
            });
          }, 500);
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
      id="competences" 
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-secondary/30"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Compétences
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Mes <span className="gradient-text">expertises</span> techniques
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un ensemble de compétences variées couvrant le développement d'applications, 
            l'analyse de données et l'automatisation des processus.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.title}
              className={`p-8 rounded-2xl glass hover:bg-secondary/50 transition-all duration-500 hover:scale-[1.02] group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: animatedSkills.has(`${catIndex}-${skillIndex}`) ? `${skill.level}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div 
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-xl font-semibold mb-6">Autres compétences</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git', 'API REST', 'JSON', 'XML', 'Azure', 'Office 365',
              'Teams', 'OneDrive', 'Power Query', 'DAX', 'M Language',
              'JavaScript', 'HTML/CSS', 'Python', 'C#', 'React'
            ].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 rounded-full glass text-sm text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
