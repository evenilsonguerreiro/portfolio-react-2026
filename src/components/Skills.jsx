export const Skills = () => {
  const skills = ["Html", "Css3", "React", "JavaScript", "Tailwind CSS","Bootstrap", "Node.js", "Git", "Vite"];

  return (
    <section id="skills" className="py-20 bg-dark-bg px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-black mb-12 text-white">
          Minhas <span className="text-accent-purple">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-300 font-medium hover:border-accent-blue transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};