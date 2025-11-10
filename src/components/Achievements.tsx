import { Award, Target, CheckCircle, Zap } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Award,
      title: 'Software Engineer – SOTI',
      subtitle: 'Jul 2023 – Present',
      description:
        'Developed and maintained enterprise-grade web applications using ASP.NET Core and EF Core, implementing SOLID principles and CI/CD workflows.'
    },
    {
      icon: Target,
      title: 'System Design & DevOps Learner',
      subtitle: 'Ongoing',
      description:
        'Actively exploring scalable architecture design patterns, CI/CD pipelines, and AWS deployments to strengthen end-to-end development skills.'
    },
    {
      icon: CheckCircle,
      title: 'LeetCode Problem Solver',
      subtitle: 'Coding Challenges',
      description:
        'Consistently solving algorithmic and data structure problems to enhance problem-solving and coding efficiency.'
    },
    {
      icon: Zap,
      title: 'Personal .NET Projects',
      subtitle: 'Practice & Innovation',
      description:
        'Built multiple personal projects using ASP.NET Core, Entity Framework, and IIS hosting to reinforce backend and deployment knowledge.'
    }
  ];

  const certifications = [
    'DevOps Fundamentals with CI/CD & AWS – Udemy',
    'B.Tech, Electronics & Communication Engineering – Sree Vidyanikethan Engineering College'
  ];

  return (
    <section id="achievements" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in-up mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Highlights</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.title}
                className="fade-in-up p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{achievement.title}</h3>
                <p className="text-sm text-blue-600 font-semibold mb-2">{achievement.subtitle}</p>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            );
          })}
        </div>

        <div className="fade-in-up grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience by Numbers</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900">.NET & Backend Development</span>
                  <span className="text-blue-600 font-semibold">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full"
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900">Frontend Technologies</span>
                  <span className="text-blue-600 font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full"
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900">Database Management</span>
                  <span className="text-blue-600 font-semibold">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full"
                    style={{ width: '88%' }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900">DevOps & Cloud</span>
                  <span className="text-blue-600 font-semibold">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full"
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
