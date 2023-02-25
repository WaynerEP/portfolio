import { createElement, useRef, useState } from "react";
import { content } from "../data";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();
  const [statusForm, setStatusForm] = useState(false);

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();
    setStatusForm(true);
    emailjs
      .sendForm(
        'service_0qmo0by', 'template_0bmn0p1', form.current, 'w-64UJf3iI3Y_nxTn'
      )
      .then(
        (_) => {
          setStatusForm(false);
          toast.success("Email send Successfully");
          // Clear all input field values
          form.current.reset();
          // Success toast message
        },
        (error) => {
          setStatusForm(false);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-dark_primary text-white px-20" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14 border-t-2 border-dark_primary dark:border-border_color">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>

        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button
              className="btn self-start
            bg-blue-600 text-white cursor-pointer hover:bg-blue-700"
              disabled={statusForm}
            >
              {statusForm ? 'Enviando' : 'Enviar'}
            </button>
          </form>
          <div className="flex-1 flex flex-col space-y-7">
            {Contact.socials.map((social, i) => (
              <div
                key={social.id}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-gray-100 dark:text-gray-800 text-white text-lg flex items-center justify-center">
                  {createElement(social.icon)}
                </div>

                <a className="" href={social.link} target="_blank">
                  {social.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
