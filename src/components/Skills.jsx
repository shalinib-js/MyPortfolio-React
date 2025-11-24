import React from 'react'

    const Skills = () => {
  return (
    <div id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="text-purple">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {/* Skill Item */}
          {[
            "HTML5",
            "CSS3",
            "Bootstrap",
            "JavaScript",
            "React JS",
            "Redux Toolkit",
            "API Integration",
            "Responsive Design",
           
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900/40 border border-purple rounded-xl p-4 text-center shadow-lg hover:shadow-purple/40 transition-shadow duration-300"
            >
              <p className="text-gray-200 font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



 

export default Skills