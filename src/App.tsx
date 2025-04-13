import { InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react";
import SiF from "./SiF";
import { SiGithub, SiReddit } from "@icons-pack/react-simple-icons";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.setAttribute("target", "_blank");
    });
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-3 bg-background text-foreground font-raleway">
      <SiF />
      <div className="flex flex-col items-center gap-1 leading-none">
        <h1 className="text-4xl font-bold">SilicoFlare</h1>
        <div className="font-light">TypeScript Maniac</div>
      </div>

      <div className="flex items-center gap-3">
        <a href="https://blog.silicoflare.site" className="underline">
          Blog
        </a>
        <a href="/resume.pdf" className="underline">
          Resume
        </a>
      </div>

      <div className="flex items-center gap-10 mt-5">
        <a href="mailto:hi@silicoflare.site">
          <MailIcon size={30} />
        </a>
        <a href="https://github.com/silicoflare">
          <SiGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/suraj-b-m">
          <LinkedinIcon size={30} />
        </a>
        <a href="https://www.reddit.com/user/SilicoFlare">
          <SiReddit size={30} />
        </a>
        <a href="https://instagram.com/silicoflare">
          <InstagramIcon size={30} />
        </a>
      </div>
    </div>
  );
}
