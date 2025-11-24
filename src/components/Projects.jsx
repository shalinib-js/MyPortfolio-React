import foodImage from "../Images/FoodSite.png";
import TodoList from "../Images/ToDoList.png";
import ContactManager from "../Images/ContactManager.png";
import EcommerceSite from "../Images/EcommerceSite.png";
import JobaAppTracker from "../Images/JobAppTracker.jpeg";
import PortfolioWebsite from "../Images/MyPortfolio.png";


const Projects = () => {
  const projectList = [
    {
      title: "Food Delivery Website",
      desc:"Responsive food ordering UI with clean design and smooth interactions.",
      img: foodImage,
      demo: "https://shalinib-js.github.io/Food-Delivery-Service/",
      code: "https://github.com/shalinib-js/Food-Delivery-Service"
    },
    {
      title: "To-Do List App",
      desc: "Simple task manager with CRUD features and local storage.",
      img: TodoList,
      demo: "https://shalinib-js.github.io/ToDoList/",
      code: "https://github.com/shalinib-js/ToDoList"
    },
    {
      title: "Contact Manager (CRUD)",
      desc: "Manage contacts with add, edit, delete, and search features.",
      img: ContactManager,
      demo: "https://shalinib-js.github.io/Contact-Manager/",
      code: "https://github.com/shalinib-js/Contact-Manager"
    },
    {
      title: "E-commerce Site (React + Redux)",
      desc: "Full-featured shopping site with cart, filters, and global state.",
      img: EcommerceSite,
      demo: "https://multimart-ecommerce.onrender.com/",
      code: "https://github.com/shalinib-js/Ecommerce-Website-React"
    },
    {
      title: "Job Application Tracker (Kanban Board)",
      desc: "Track application progress using a draggable Kanban board.",
      img: JobaAppTracker,
      demo: "https://shalinib-js.github.io/JobTracker-App/",
      code: "https://github.com/shalinib-js/JobTracker-App"
    },
    {
      title: "MY Portfolio Website",
      desc: "A responsive and interactive portfolio built with React and Tailwind CSS, featuring smooth transitions, and hover effects for a modern user experience.",
      img: PortfolioWebsite,
      demo: "https://your-job-demo.com",
      code: "https://github.com/yourrepo/job-tracker"
    }
  ];

  return (
    <div id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="text-purple">Projects</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/40 border border-purple rounded-2xl p-6 shadow-lg hover:shadow-purple/40 transition duration-300"
            >
              {/* Project Image */}
              <div className="w-full h-40 mb-4 overflow-hidden rounded-xl border border-purple">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4">{project.desc}</p>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  className="px-4 py-2 bg-purple text-white rounded-xl font-medium border border-purple hover:bg-white hover:text-purple transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  className="px-4 py-2 bg-white text-purple rounded-xl font-medium border border-purple hover:bg-purple hover:text-white transition"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
