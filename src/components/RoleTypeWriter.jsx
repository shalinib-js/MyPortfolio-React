import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function RoleTypeWriter() {
  const roles = ["Frontend Developer", "Web Designer", "React Developer"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // change role every 3s

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.h2
      key={roles[index]} // re-render for animation
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="typewriter"
    >
      {roles[index]}
    </motion.h2>
  );
}
