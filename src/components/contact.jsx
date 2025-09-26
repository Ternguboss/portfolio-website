import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const icons = [
    {
      href: "https://github.com/Ternguboss",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/terngu-favour-773217379/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "mailto:terngufavou35@gmail.com",
      icon: <FaEnvelope />,
      label: "Email",
    },
  ];

  return (
    <div
      id="contact"
      className="bg-zinc-800 min-h-screen flex flex-col py-20 px-6 sm:px-10"
    >
      {/* Section Header */}
      <motion.div
        className="flex items-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-zinc-300 font-bold text-3xl">Contact Me</h2>
        <div className="flex-1 h-[2px] bg-zinc-600 ml-4"></div>
      </motion.div>

      {/* Message */}
      <motion.p
        className="text-zinc-400 text-lg mb-12 max-w-2xl text-center mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        I’d love to connect! You can reach me through GitHub, LinkedIn, or email.
      </motion.p>

      {/* Social Icons */}
      <motion.div
        className="flex flex-wrap justify-center gap-8 text-4xl text-zinc-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {icons.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition-colors"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.2, color: "#14b8a6", textShadow: "0px 0px 8px #14b8a6" }}
            transition={{ duration: 0.3 }}
            aria-label={item.label}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

export default Contact;
