const Skills = () => {
    const skills = [
      "JavaScript",
      "React.js",
      "Node.js",
      "CSS",
      "Tailwind CSS",
      "MongoDB",
      "Git & GitHub",
      "Bootstrap",
      "mysql",
      "Redux toolkit",
      "Express.js",
      "HTML5",
      "Framer Motion"
      
    ];
  
    return (
      <section id="skills" className="py-10 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 px-4 py-2 rounded-full text-lg shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;
  