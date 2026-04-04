export const About = () => {
  return (
    <section id="about" className="py-20 bg-black px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Lado Esquerdo: Uma moldura legal ou uma frase de impacto */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-2xl blur opacity-25"></div>
          <div className="relative bg-dark-bg p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Quem é o Evenilson?
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Desenvolvedor web Fullstack em formação focado em criar experiências digitais
              impecáveis e funcionais. Atualmente, busco ingressar no mercado de
              trabalho para demonstrar minha capacidade técnica em React e
              lógica de programação. Sou um entusiasta da tecnologia pronto para
              encarar desafios reais e evoluir junto a uma equipe de
              desenvolvimento profissional.
             
            </p>
          </div>
        </div>

        {/* Lado Direito: Texto Informativo */}
        <div>
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">
            Sobre <span className="text-accent-blue">Mim</span>
          </h2>
          <p className="text-gray-400 mb-6 text-lg">
            Minha jornada no desenvolvimento começou com o desejo de entender
            como as coisas funcionam por trás das cortinas. Hoje, foco em
            construir aplicações web modernas utilizando{" "}
            <span className="text-white font-medium">React</span> e
            <span className="text-white font-medium"> javascript</span>.
            <span className="text-white font-medium"> Tailwind CSS</span>.
          </p>
          <p className="text-gray-400 mb-8">
            Acredito que o aprendizado contínuo é a única constante na
            tecnologia. Por isso, estou sempre explorando novas ferramentas e
            metodologias para melhorar meu fluxo de trabalho e a qualidade do
            código que entrego.
          </p>

          {/* Estatísticas rápidas ou diferenciais */}
          <div className="flex gap-8"></div>
        </div>
      </div>
    </section>
  );
};
