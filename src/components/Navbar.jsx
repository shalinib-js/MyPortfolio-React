import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed w-full bg-dark-100 py-4 px-8 shadow-md z-50">
      <div className="container flex justify-between items-center mx-auto">
        {/* Logo */}
        <div>
          <div className="text-white font-bold text-2xl">
            My <span className="text-purple">Portfolio</span>
          </div>
          <div className="w-4 h-4 bg-purple rounded-full"></div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative inline-flex text-white transition duration-300 hover:text-purple group"
            >
              <span className="capitalize">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-dark-100 transition-all duration-500 overflow-hidden ${
          open ? "max-h-80 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-white text-lg relative overflow-hidden
    transition
    after:content-['']
    after:absolute after:left-0 after:bottom-0
    after:h-[2px] after:w-0
    after:bg-purple
    after:transition-all after:duration-300
    hover:after:w-full
    active:after:w-full 
    hover:text-purple group"
              onClick={() => setOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
