import SiF from "./SiF";
import { useEffect } from "react";
import { CgMail } from "react-icons/cg";
import { FaGithub, FaInstagram, FaLinkedin, FaReddit } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.setAttribute("target", "_blank");
    });
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-3 bg-background text-foreground font-raleway overflow-hidden">
      <SiF />
      <div className="flex flex-col items-center gap-1 leading-none">
        <h1 className="text-4xl font-bold">SilicoFlare</h1>
        <div className="font-light">TypeScript Maniac</div>
      </div>

      <div className="flex items-center gap-3">
        {/* <a href="https://blog.silicoflare.site" className="underline">
          Blog
        </a> */}
        <a href="/resume.pdf" className="underline">
          Resume
        </a>
      </div>

      <div className="flex items-center gap-5 md:gap-10 mt-5">
        <a href="mailto:hi@silicoflare.site">
          <CgMail size={40} />
        </a>
        <a href="https://github.com/silicoflare">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/suraj-b-m">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.reddit.com/user/SilicoFlare">
          <FaReddit size={30} />
        </a>
        <a href="https://instagram.com/silicoflare">
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
}
