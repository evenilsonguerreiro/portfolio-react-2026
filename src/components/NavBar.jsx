import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 border-b border-white/10 bg-dark-bg/80 backdrop-blur-md z-50 flex items-center justify-between px-8">
      <div className="text-2xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
        EV.
      </div>

      <ul className="flex gap-8 text-sm font-medium">
        <li className="hover:text-accent-blue cursor-pointer transition-colors">
          <a href="/">Início</a>
        </li>
        <li className="hover:text-accent-blue cursor-pointer transition-colors">
          <a href="#projects">Projetos</a>
        </li>
        <li className="hover:text-accent-blue cursor-pointer transition-colors">
          <a href="#about">Sobre</a>
        </li>
        <li className="hover:text-accent-blue cursor-pointer transition-colors">
          <a href="#contact">Contato</a>
        </li>
      </ul>

      <button className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-accent-blue hover:text-white transition-all">
        Currículo
      </button>
    </nav>
  );
};
