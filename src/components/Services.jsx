import { content } from "../data";
import Service from "./Service";

const Services = () => {
  const { services } = content;
  return (
    <section id="services" className="px-4 md:px-20 dark:bg-dark_primary">
      <div className="md:container py-14 border-t-2 border-slate-200 dark:border-border_color">
        <h2 className="title dark:text-white" data-aos="fade-down">
          {services.title}
        </h2>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.content.map((s, i) => (
            <Service key={s.id} data={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
