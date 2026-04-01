export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold text-white">
          Dev:Evenilson<span className="text-accent-blue">.</span>
        </div>

        <p className="text-gray-500 text-sm">
          © 2026 Evenilson. Todos os direitos reservados.
        </p>

        <div className="flex gap-6 text-gray-400 text-sm">
          <a
            href="https://www.linkedin.com/in/evenilson-da-silva-almeida/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-blue transition-colors"
          >
            LinkedIn
          </a>
          <a href="https://github.com/evenilsonguerreiro" target="_blank"
           rel="noreferrer"
           className="hover:text-accent-purple transition-colors">
          
            GitHub
          </a>
          <a href="#" className="hover:text-accent-blue transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};
