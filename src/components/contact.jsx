import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div
      id="contact"
      className="bg-zinc-800 min-h-screen flex flex-col py-20 px-6 sm:px-10"
    >
      {/* Section Header */}
      <div className="flex items-center mb-10">
        <h2 className="text-zinc-300 font-bold text-3xl">Contact Me</h2>
        <div className="flex-1 h-[2px] bg-zinc-600 ml-4"></div>
      </div>

      {/* Message */}
      <p className="text-zinc-400 text-lg mb-12 max-w-2xl text-center mx-auto leading-relaxed">
        I’d love to connect! You can reach me through GitHub, LinkedIn, or email.
      </p>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-8 text-4xl text-zinc-300">
        
        <a
          href="https://github.com/Ternguboss"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-300 transition-colors"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/terngu-favour-773217379/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-300 transition-colors"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:terngufavou35@gmail.com"
          className="hover:text-teal-300 transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}

export default Contact;
