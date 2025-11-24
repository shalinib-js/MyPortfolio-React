import RoleTypeWriter from "../components/RoleTypeWriter.jsx";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <div id="home">
      <div className="min-h-screen flex items-center justify-center pt-15 pb-5">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <div className="md:w-3/4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-purple">Shalini</span>
            </h1>

            <div className="mb-4 text-xl md:text-2xl font-semibold flex justify-center items-center text-center">
              <RoleTypeWriter />
            </div>

            <p className="text-gray-300 max-w-xl mx-auto mb-8">
              A passionate frontend developer learning and building modern web
              interfaces with real-world projects.
            </p>

            <div className="flex gap-4 justify-center items-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-purple rounded-xl font-semibold border border-purple hover:bg-purple hover:text-white transition"
              >
                Hire Me
              </a>
              <a
                href="/shalini-resume.pdf" 
                download
          
                className="px-6 py-3 bg-purple text-white rounded-xl font-semibold border border-purple hover:bg-white hover:text-purple transition"
              >
                Download Resume
              </a>
            </div>
            <div className="flex gap-10 justify-center items-center  py-10">
              <a
                href="https://github.com/shalinib-js"
                target="_blank"
                className="text-4xl text-white hover:text-purple transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/shalinib-js/"
                target="_blank"
                className="text-4xl text-white hover:text-purple transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
