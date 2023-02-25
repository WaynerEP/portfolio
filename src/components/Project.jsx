import { FiExternalLink, FiEye, FiGithub } from "react-icons/fi"

function Project({ project, i, onClick }) {
    return (
        <div className=" lg:mb-0 mb-8 bg-white dark:bg-dark_secondary rounded-md border-2 border-slate-300 dark:border-slate-600" data-aos="fade-up"
            data-aos-delay={i * 300}>
            <div onClick={() => onClick(project.id)}
                className="w-full relative rounded-md transition hover:opacity-75 hover:border-fun-pink">
                <img src={project.image} className="w-full rounded-t-md" />
            </div>
          
            <div className="rounded-b-md bg-white dark:bg-dark_secondary">
                <div className="flex items-center justify-between px-4 pt-4">
                    <div className="flex space-x-2">
                        {project.isPreview ?
                            (
                                <>
                                    <a href={project.githubLink} target="_blank" className="text-slate-600 dark:text-dark_text_primary">
                                        <FiGithub />
                                    </a>
                                    <a href={project.previewLink} target="_blank" className="text-slate-600 dark:text-dark_text_primary">
                                        <FiExternalLink />
                                    </a></>
                            ) : (
                                <div onClick={() => onClick(project.id)} className="text-slate-600 dark:text-dark_text_primary cursor-pointer">
                                    <FiEye />
                                </div>
                            )}

                    </div>
                </div>
                <div className="p-4">
                    <div className="flex items-center justify-between">
                        <a href="#">
                            <h2 className="text-lg font-semibold dark:text-white">{project.title}</h2>
                        </a>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 dark:text-dark_text_primary">{project.description}</p>
                    <ul className="flex flex-wrap items-center mt-5 -ml-2 list-none">
                        {
                            project.technologies.map((technology, index) => (
                                <li
                                    key={index}
                                    className="m-1 rounded-lg text-xs bg-blue-200 text-blue-500 dark:text-blue-900 py-1 px-2 cursor-pointer hover:opacity-75">
                                    {technology}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Project