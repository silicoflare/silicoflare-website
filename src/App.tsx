import { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import { links, projects } from "./data";
import JSConfetti from "js-confetti";
import dayjs from "dayjs";
import { ChevronDownIcon } from "lucide-react";

export default function App() {
  const [bday, setBday] = useState(false);
  const [hideChevron, setHideChevron] = useState(false);

  useEffect(() => {
    const today = dayjs();
    if (today.month() === 8 && today.date() === 23) {
      setBday(true);
      const confetti = new JSConfetti();
      confetti.addConfetti();
    }

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHideChevron(true);
      } else {
        setHideChevron(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col gap-3 bg-base-100 text-base-content md:text-lg md:p-10 font-space-grotesk">
      {!hideChevron && (
        <ChevronDownIcon
          size={30}
          className="text-primary absolute bottom-3 left-1/2 animate-bounce block md:hidden"
        />
      )}
      <div className="header md:mt-20 w-screen md:w-full h-screen md:h-full flex flex-col justify-center gap-2 text-center md:text-left px-10 md:px-20 flex-shrink-0 md:flex-shrink">
        {bday && (
          <div className="text-2xl md:text-3xl font-semibold text-primary">
            Level {dayjs().diff("2003-09-23", "years")}!
          </div>
        )}
        <h1 className="text-5xl md:text-6xl font-bold text-primary">
          Suraj “SilicoFlare”
        </h1>
        <p>TypeScript maniac, student, gamer and an avid Linux user.</p>
        <div className="w-full flex items-center gap-3 justify-center md:justify-start">
          <a
            href="/resume.pdf"
            target="_blank"
            className="badge badge-accent badge-outline px-5 py-3 rounded-md hover:bg-accent hover:text-base-100"
          >
            Resume
          </a>
          {Object.entries(links).map(([title, link]) => (
            <a
              href={link}
              key={title}
              target="_blank"
              className="text-accent hover:scale-110 transition ease-in-out duration-200"
            >
              <img
                height="20"
                width="20"
                src={`https://unpkg.com/simple-icons@v11/icons/${title}.svg`}
                className="text-accent hover:scale-110 transition ease-in-out duration-200"
                style={{
                  filter:
                    "invert(67%) sepia(85%) saturate(350%) hue-rotate(1deg)",
                }}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="my-10 flex flex-col px-10 md:px-20 w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-primary font-space-grotesk">
          Projects
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
          {projects.map((pro) => (
            <ProjectCard
              key={pro.name}
              name={pro.name}
              tech={pro.tech}
              description={pro.description}
              repo={pro.repo}
            />
          ))}
        </div>
      </div>
      <div className="md:p-20 md:py-10 p-5"></div>
    </div>
  );
}
