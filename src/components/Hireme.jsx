import { TbHandClick } from "react-icons/tb";
import { content } from "../data";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary dark:bg-dark_primary px-4 md:px-20">
      <div className="px-5 py-14 border-t-2 border-slate-200 dark:border-border_color">
        <h2 className="title dark:text-white" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <br />
        <div className="flex items-center md:flex-row md:space-x-10">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <div
            data-aos="fade-up"
            className="border-2 border-slate-400 dark:border-slate-600 w-auto
           p-6 shadow-sm rounded-xl md:min-w-[40rem]"
          >
            <p className="leading-7 dark:text-dark_text_primary">{Hireme.description}</p>
            <br />
            <a href="#contact" className="btn w-44 bg-blue-600 hover:bg-blue-700 text-white flex space-x-3 items-center">
              {Hireme.btnText}
              <TbHandClick className="ml-2 text-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
