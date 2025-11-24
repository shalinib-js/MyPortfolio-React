

const About = () => {
  return (
    <div className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          About <span className="text-purple">Me</span>
        </h2>

        <div className="max-w-3xl mx-auto bg-gray-900/40 border border-purple rounded-2xl p-8 shadow-lg hover:shadow-purple/40">
          <p className="text-gray-300 leading-relaxed mb-4">
            <span className="font-semibold text-white">Passionate UI & Frontend Developer</span> skilled in creating clean, responsive, 
            and user-friendly interfaces using <span className="text-purple">HTML, CSS, Bootstrap, JavaScript, React, and Redux Toolkit</span>.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            Strong understanding of component-based architecture, state management, API integration, 
            and modern frontend workflows.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            Built multiple real-world projects including:
          </p>

          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>Food Delivery Website</li>
            <li>To-Do List App</li>
            <li>Contact Manager (CRUD)</li>
            <li>E-commerce Site (React + Redux)</li>
            <li>Job Application Tracker (Kanban Board)</li>
          </ul>

          <p className="text-gray-300 leading-relaxed mb-4">
            Focused on <span className="text-purple font-medium">clean code, reusable components, mobile-first design, accessibility, 
            and performance optimization</span> to deliver smooth experiences across devices.
          </p>

          <p className="text-gray-300 leading-relaxed">
            A fast learner and problem solver, continuously improving my skills in UI/UX, 
            JavaScript logic, and modern frontend best practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
