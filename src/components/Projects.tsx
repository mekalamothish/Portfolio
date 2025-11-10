import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management and payment integration.',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'fullstack',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'frontend',
      image: 'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      github: '#'
    },
    {
      title: 'AI Content Generator',
      description: 'SaaS platform for AI-powered content generation with subscription management.',
      tags: ['Next.js', 'OpenAI API', 'Supabase', 'Stripe'],
      category: 'fullstack',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      github: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization dashboard with custom charts and reporting.',
      tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      category: 'frontend',
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      github: '#'
    },
    {
      title: 'Blog Engine',
      description: 'Fast, scalable blog platform with markdown support and SEO optimization.',
      tags: ['Next.js', 'PostgreSQL', 'Vercel'],
      category: 'backend',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      github: '#'
    },
    {
      title: 'Social Network',
      description: 'Real-time social platform with messaging and notification system.',
      tags: ['React', 'WebSocket', 'Express', 'PostgreSQL'],
      category: 'fullstack',
      image: 'https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      github: '#'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in-up mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
        </div>

        <div className="fade-in-up flex gap-4 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:border-blue-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="fade-in-up group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48 bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    View
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-gray-400 transition-colors text-sm font-medium"
                  >
                    Code
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
