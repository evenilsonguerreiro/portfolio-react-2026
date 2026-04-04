import bg1 from "../assets/bg1.jpg";
export const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center text-center px-4 bg-dark-bg">
      <img src={bg1} alt="background" className="w-full h-full absolute inset-0 object-cover opacity-10" />
      <span className="px-4 py-1 rounded-full border border-accent-blue/30 text-accent-blue text-sm mb-6 bg-accent-blue/5 animate-pulse">
        Disponível para novos projetos
      </span>

      <h1 className="text-5xl md:text-7xl font-black mb-6 max-w-4xl leading-tight">
        Desenvolvedor <br />
        <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
          Web FullStack.
        </span>
      </h1>

      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
        Olá, eu sou o <span className="text-white font-semibold">Evenilson</span>. Estudante de Tecnologia na EBAC e Desenvolvedor Full Stack certificado pelo Geração Tech 3.0. Focado em transformar aprendizado em soluções digitais de alto impacto, com interfaces otimizadas e foco total na experiência do usuário.
      </p>

      <div className="flex gap-4">
        <button className="bg-accent-blue hover:bg-accent-blue/80 text-black px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105">
          <a href="#projects">Ver Projetos</a>
        </button>
       
          <a className=" relative z-10 border border-white/10 hover:bg-white/5 text-white px-8 py-4 rounded-xl font-bold transition-all" href="#contact">
            Entre em contato
          </a>
  
      </div>
    </section>
  );
};