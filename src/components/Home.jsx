import { content } from "../data";
import { FiDownload, FiGithub, FiInstagram, FiLinkedin, FiSend } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const Home = () => {
  const { hero } = content;
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadFile = () => {
    setIsDownloading(true);
    fetch('/portfolio/my_cv.pdf')
      .then(response => {
        // Verifica que la respuesta sea correcta
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Convierte la respuesta en un blob
        return response.blob();
      })
      .then(blob => {
        // Crea un enlace de descarga para el blob
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Wayner_Espinoza_CV.pdf'); // Reemplaza "myfile.pdf" con el nombre del archivo que quieres descargar
        document.body.appendChild(link);
        link.click();
        toast.success("CV descargado correctamente!.");
        link.parentNode.removeChild(link);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      })
      .finally(() => {
        setIsDownloading(false);
      });
  }

  return (
    <section id="home" className="overflow-hidden dark:bg-dark_primary">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center md:space-x-24">
        {/* <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-dark_primary dark:bg-inherit bottom-0 -z-10 dark:z-10"
        >
          <h1 className="rotate-90 absolute top-[20%] md:top-[35%] right-[-33%] md:right-[-15%] text-[#EAF2FA] dark:text-slate-200">
            {hero.firstName}{" "}
            <span className="text-red-500">{hero.LastName}</span>
          </h1>
        </div> */}
        <div
          data-aos="slide-right"
          data-aos-delay="1200"
          className="absolute h-full w-2/12 top-0 left-0 bottom-0"
        >
          <ul className="absolute top-[20%] md:top-[35%] right-[15%] text-[#525455] space-y-7">
            <li>
              <a href="https://www.linkedin.com/in/wayner-keylor/" target="_blank" className="text-xl hover:text-neutral-900 dark:text-white dark:hover:opacity-80">
                <FiLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/WaynerEP" target="_blank" className="text-xl hover:text-neutral-900 dark:text-white dark:hover:opacity-80">
                <FiGithub />
              </a>
            </li>
            <li>
              <a href="#" className="text-xl hover:text-neutral-900 dark:text-white dark:hover:opacity-80">
                <FiInstagram />
              </a>
            </li>
          </ul>

        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2 className="flex dark:text-slate-50">
            <div className="emoji">&#128075;</div>
            {hero.firstName} {hero.LastName}
          </h2>
          <h4 className="flex dark:text-slate-50 items-center">
            <div className="h-0.5 w-14 bg-slate-500 mr-4"></div>
            {hero.title}
          </h4>
          <div className="flex flex-col gap-10 mt-10 justify-center">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center md:w-96 gap-5 text-center align-middle`}
              >
                <p className="dark:text-slate-200">{content.text}</p>
              </div>
            ))}
            <div className="flex justify-center md:justify-end">
              <button type="button" onClick={downloadFile} disabled={isDownloading} className="text-slate-700 border border-slate-700 hover:bg-slate-700 hover:text-white focus:ring-1 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-slate-500 dark:text-slate-300 dark:hover:text-white dark:focus:ring-slate-800 transition-colors duration-300">
                {hero.cv}
                <FiDownload className="ml-2 w-5 h-5" />
              </button>
              <a href="#contact" className="border border-blue-600 hover:border-blue-700 bg-blue-600 hover:bg-blue-700 text-white focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-white dark:hover:text-white dark:focus:ring-blue-800 transition-colors duration-300">
                {hero.contactMe}
                <FiSend className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="md:h-[35rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="Wayner Keylor Espinoza Perez"
            className="h-full object-cover"
          />
        </div> */}
        <div className="home-img self-center mt-10 md:mt-0"></div>
      </div>
    </section>
  );
};

export default Home;
