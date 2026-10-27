import NavigationCard from "../components/NavigationCard";
import DeveloperSkillsCard from "../components/DeveloperSkillsCard";
import TecnologyIconsCard from "../components/TechnologyIconsCard";
import { ABOUT_ME_DATA } from "../data/portafolioData";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <NavigationCard title="Sobre mi">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          <article className="flex-[1.5] space-y-6">
            {ABOUT_ME_DATA.paragraphs.map((text, index) => (
              <p
                key={index}
                className={`text-left leading-relaxed transition-colors duration-300 ${
                  index === 0
                    ? "text-lg md:text-lg text-white/95 font-medium"
                    : "text-base text-white/70 hover:text-white/90"
                }`}
              >
                {index === 0 ? (
                  <>
                    Hola, soy{" "}
                    <span className="text-blue-400 font-bold decoration-blue-400/30 underline decoration-2 underline-offset-4">
                      {ABOUT_ME_DATA.name}
                    </span>
                    . {text}
                  </>
                ) : (
                  text
                )}
              </p>
            ))}
          </article>

          <div className="flex-1 w-full lg:max-w-xs group">
            <div className="relative">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative">
                <DeveloperSkillsCard />
              </div>
            </div>
          </div>
        </div>
      </NavigationCard>

      <section className="space-y-8 px-2 md:px-0">
        <div className="flex items-center gap-4">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-20" />
            <div
              aria-hidden="true"
              className="relative w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)]"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Stack tecnológico
          </h2>
          <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent ml-4" />
        </div>

        <div className="relative group">
          <div className="absolute -inset-2 bg-linear-to-b from-blue-600/5 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
          <div className="relative">
            <TecnologyIconsCard />
          </div>
        </div>
      </section>
    </div>
  );
}
