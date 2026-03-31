export const Projects = () => {
  const meusProjetos = [
    {
      title: "Portfolio Tech",
      desc: "Este site que você está vendo agora, feito com React e Tailwind.",
      tech: ["React", "Tailwind", "Vite"],
      link: "#"
    },
    {
      title: "Sistema de Delivery",
      desc: "Interface moderna para pedidos online com foco em UX.",
      tech: ["React", "Context API", "CSS"],
      link: "#"
    },
    {
      title: "Dashboard de Finanças",
      desc: "Painel administrativo com gráficos e controle de gastos.",
      tech: ["JavaScript", "Tailwind", "Chart.js"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-bg px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black mb-12 text-white">
          Meus <span className="text-accent-blue">Projetos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meusProjetos.map((proj, index) => (
            <div 
              key={index} 
              className="group bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-accent-purple/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-white/20 font-bold">Preview do Projeto</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">
                {proj.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4">
                {proj.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-widest bg-white/5 px-2 py-1 rounded text-accent-purple font-bold">
                    {t}
                  </span>
                ))}
              </div>

              <a 
                href={proj.link} 
                className="text-white text-sm font-bold border-b-2 border-accent-blue pb-1 hover:text-accent-blue transition-all"
              >
                Ver Detalhes →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};