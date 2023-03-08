import { useState } from "react";
import { content } from "../data";
import Project from "./Project";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { HiChevronLeft, HiChevronRight, HiXMark } from "react-icons/hi2";
import Modal from "./Modal";

const Projects = () => {
  const { projects } = content;
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // const
  const handlePreview = (id) => {
    const project = projects.content.find(p => p.id === id);
    if (project.isPreview) window.open(project.previewLink, '_blank')
    else {
      setOpenModal(!openModal);
      setSelectedProject(project);
    };
  }
  return (
    <section className="bg-bg_light_primary dark:bg-dark_primary px-4 md:px-20" id="projects">
      <div className="md:container px-5 py-14 space-y-10 border-t-2 border-slate-200 dark:border-border_color">
        <div>
          <h2 className="title dark:text-white" data-aos="fade-down">
            {projects.title}
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 justify-center">
          {projects.content.map((project, i) => (
            <Project key={project.id} project={project} i={i} onClick={handlePreview} />
          ))}
        </div>
      </div>

      <Modal open={openModal} setOpen={() => setOpenModal(!openModal)}>
        <div className="mx-auto">
          <div className="flex justify-end">
            <h1 className="text-center text-gray-800 dark:text-white font-semibold text-2xl lg:leading-9 leading-7 mx-auto">{selectedProject?.title}</h1>
            <button onClick={() => setOpenModal(!openModal)} aria-label="Close" className="focus:outline-none dark:text-white">
              <HiXMark className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-stretch justify-center lg:space-x-8">
            <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={selectedProject?.screenshots.length || 0} className="w-full flex justify-between items-strech bg-gray-50 py-10">
              <div className="flex items-center">
                <ButtonBack aria-label="slide back" className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100 mr-2" role="button">
                  <HiChevronLeft className="w-8 h-8 text-slate-500" />
                </ButtonBack>
              </div>
              <div className="slider">
                <div className="slide-ana lg:relative">
                  <Slider>
                    {selectedProject?.screenshots.map((pr, index) => (
                      <Slide index={index} key={pr.id}>
                        <div>
                          <img src={pr.image} alt="..." className="w-full h-full rounded-md mb-6" />
                          <p className="text-gray-600 font-normal leading-6 text-sm text-center dark:text-dark_text_primary">{pr.description}</p>
                        </div>
                      </Slide>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className="flex items-center">
                <ButtonNext role="button" aria-label="next slide" className="cursor-pointer ml-2">
                  <HiChevronRight className="w-8 h-8 text-slate-500" />
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Projects;
