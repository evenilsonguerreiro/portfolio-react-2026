import bg1 from "../assets/bg1.jpg";


export const Projects = () => {

 
  const meusProjetos = [
    {
      title: "Digital Story",
      image: bg1,
      desc: "Esta é uma Home Page de E-commerce moderna desenvolvida com React e Styled Components, garantindo um design exclusivo e componentes altamente reutilizáveis. O foco do projeto foi criar uma interface de compras fluida, com navegação intuitiva e total responsividade para diferentes dispositivos.",
      tech: ["React", "Javascript", "Node.js"],
      link: "https://projeto-frontend-mocha.vercel.app/"
    },
    {
      title: "Sistema de Cadastro de Usuários",
      image: bg1,
      desc: "Sistema completo de Cadastro de Usuários com integração entre Front-end (React) e Back-end (Node.js/PostgreSQL). O projeto utiliza o banco de dados Neon para persistência de dados em nuvem, focando em uma arquitetura moderna, segura e com gerenciamento de perfis em tempo real através de uma API REST.",
      tech: ["React", "Context API", "CSS"],
      link: "https://github.com/evenilsonguerreiro/sistema-autenticacao-backend"
    },
    {
      title: "Sistema de UBS",
      image: bg1,
      desc: "Sistema de gestão de UBS com integração entre Front-end (React) e Back-end (Node.js/PostgreSQL). O projeto utiliza o banco de dados Neon para persistência de dados em nuvem, focando em uma arquitetura moderna, segura e com gerenciamento de perfis em tempo real através de uma API REST.",
      tech: ["JavaScript", "Html5", "Css3"],
      link: "https://ubs-maracanau.vercel.app/"
    }, 

    {
      title: "App para Hamburgueria",
      image: bg1,
      desc: "Aplicação para gerenciamento de hamburguerias, usando as tecnologias javascript, tailwind, e node.js.",
      tech: ["JavaScript", "Tailwind", ],
      link: "https://cardapio-burger-navy.vercel.app/"
    },
    {
      title:"Sistema de pet shop",
      image: bg1,
      desc: "sistema de pet shop,feito para agendamento de pets dando mais agilidade e com mais facilidade de uso.",
      tech:["Html5", "Javascrip", "CSS"],
      link: "https://hiper-pet-shop.vercel.app/"
    }, 

    {
      title: "Banco de dados de produtos",
      image: bg1,
      desc: "banco de dados de produtos, feito para armazenar informações de produtos e seus detalhes, em nuven no banco de dados neon.", 
      tech: ["Javascript", "express", "node.js", "sql", "neon"],
      link: "https://github.com/evenilsonguerreiro/banco-de-dados-produtos/blob/main/server.js",
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
              <div className="flex items-center justify-center">
                <span className="text-white/20 font-bold">
                 <div className="h-49  rounded-xl mb-6 flex items-center justify-center">
                  <img 
                  src={proj.image}
                   />
                 </div> 
                </span>
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
                <a href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                >Link do repositorio</a> →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};