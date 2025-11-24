import { FiPhone } from "react-icons/fi";
import { CiMail, CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="py-6 px-6 bg-gray-900 mt-20">
      <div className="container mx-auto text-center">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 mt-4">
          {/* Phone */}
          <div className="flex items-center justify-center gap-2 text-white">
            <FiPhone className="text-purple-500 text-xl hover:text-white" />
            <a
              href="tel:+919952424929"
              className="text-white hover:text-purple transition font-medium"
            >
              +91 9952424929
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center gap-2 text-white">
            <CiMail className="text-purple-500 text-xl hover:text-white" />
            <a
              href="mailto:shalinib.js@gmail.com"
              className="text-white hover:text-purple transition font-medium"
            >
              shalinib.js@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-white">
            <CiLocationOn className="text-purple-500 text-xl hover:text-white" />
            <span className="font-medium text-white hover:text-purple">
              Chennai
            </span>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Shalini. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
