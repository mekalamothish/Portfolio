import { Code2, Database, ShieldCheck, Cloud } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: Code2,
      title: 'Backend & API Development',
      description: 'C#, ASP.NET Core, Entity Framework Core, and REST APIs with JWT authentication'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'SQL Server, EF Core ORM, and performance-optimized data access using LINQ and ADO.NET'
    },
    {
      icon: ShieldCheck,
      title: 'Architecture & Practices',
      description: 'SOLID principles, Dependency Injection, Unit Testing, and Clean Architecture'
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'CI/CD using GitHub Actions, AWS basics, and IIS deployment automation'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in-up mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="fade-in-left space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a dedicated Software Engineer with 2 years of experience in designing and developing scalable web applications using C#, ASP.NET Core, and JavaScript. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in implementing clean, maintainable, and high-performance backend systems following SOLID principles and Clean Architecture. My focus is on building secure APIs with JWT authentication and efficient database operations using Entity Framework Core.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I’m also exploring system design and DevOps practices—automating builds, deployments, and monitoring through CI/CD pipelines and AWS. Beyond work, I enjoy solving coding challenges and continuously improving my craft as a developer.
            </p>
          </div>

          <div className="fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl transform -rotate-2 opacity-10"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl border border-blue-100">
                <p className="text-sm text-gray-600 mb-4">Key Technologies</p>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Languages</p>
                    <p className="text-gray-600 text-sm">C#, JavaScript, SQL, Python (basic)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Frameworks & Tools</p>
                    <p className="text-gray-600 text-sm">ASP.NET Core, EF Core, LINQ, ADO.NET</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">DevOps & Cloud</p>
                    <p className="text-gray-600 text-sm">GitHub Actions, CI/CD, AWS, IIS</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Practices</p>
                    <p className="text-gray-600 text-sm">SOLID, Dependency Injection, Unit Testing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="fade-in-up p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
