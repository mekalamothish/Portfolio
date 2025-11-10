import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../images/profile.jpeg';

export default function Hero() {
  return (
    <section
      className="min-h-screen pt-24 px-6 flex items-center relative"
      style={{
        backgroundImage: 'url(https://kamra.invisi-dir.com/images/loading.png)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up space-y-6">
            <div>
              <p className="text-blue-600 font-semibold mb-2">Hi, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Mekala Mothish
              </h1>
              <p className="text-2xl text-gray-700 font-medium mb-2">
                Software Engineer | Full Stack Developer
              </p>
              <p className="text-xl text-gray-600">
                Building scalable web applications with ASP.NET Core, Entity Framework, and JavaScript.
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Passionate about creating clean, maintainable, and high-performance code. Experienced in backend
              development, REST APIs, authentication, and DevOps pipelines. Constantly learning new technologies
              and contributing to innovative software solutions.
            </p>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get in Touch
                <ArrowRight size={20} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors font-semibold"
              >
                View My Work
              </a>
            </div>

            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/"
                className="text-gray-600 hover:text-blue-600 transition-colors p-2"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mekala-mothish-9b03981a6/"
                className="text-gray-600 hover:text-blue-600 transition-colors p-2"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:mekalamothish1205@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors p-2"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="fade-in-down relative h-96 md:h-[500px] hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl transform rotate-3 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-blue-300 rounded-2xl transform -rotate-3 opacity-10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl shadow-2xl overflow-hidden">
                <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={profileImage}
                    alt="Mekala Mothish portrait"
                  />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
