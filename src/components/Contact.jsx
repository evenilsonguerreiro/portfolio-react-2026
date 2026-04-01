export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-6 text-white">Vamos Conversar?</h2>
        <p className="text-gray-400 mb-10">
          Estou disponível para novos projetos e oportunidades. Entre em contato por qualquer um dos canais abaixo:
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a 
            href="evenilsonguerreiro@gmail.com" 
            className="bg-accent-blue text-black font-bold py-4 px-8 rounded-xl hover:scale-105 transition-transform"
          >
            Enviar E-mail
          </a>
          <a 
            href="8598854-0568" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-white/20 text-white font-bold py-4 px-8 rounded-xl hover:bg-white/5 transition-all"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};