function Service({ data, i }) {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={i * 600}
            className="min-w-[14rem] duration-300 cursor-pointer drop-shadow-md rounded-xl text-center bg-white dark:bg-dark_secondary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
        >
            <img src={data.image} alt={data.title} className="mx-auto bg-blue-200 rounded-md border-2 border-blue-100 p-5" />
            <h6 className="my-3 dark:text-white">{data.title}</h6>
            <p className="leading-6 text-sm dark:text-dark_text_primary">{data.description}</p>
        </div>
    )
}
export default Service;