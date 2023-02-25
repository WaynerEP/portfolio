// import content
import { content } from "../data";

const Skills = () => {
  const { skills } = content;

  return (
    <section className="min-h-fit dark:bg-dark_primary px-20" id="skills">
      <div className="md:container px-5 py-14 border-t-2 border-slate-200 dark:border-border_color">
        <h2 className="title dark:text-white" data-aos="fade-down">
          {skills.title}
        </h2>
        <br />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center">
          {skills.content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 50}
              className="bg-white dark:bg-dark_secondary sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-3 max-w-sm rounded-md border border-slate-200 dark:border-slate-600"
            >
              <div>
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-6 group-hover:scale-125 duration-200"
                />
              </div>
              <p className="dark:text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
