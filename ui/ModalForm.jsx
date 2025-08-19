'use client';

import Heading from "./Heading";
import services from "@/data/services.json";
import { useRef } from "react";
import Button from "./Button";
import { toast } from "react-hot-toast";
import { sendEmail } from "@/utils/sendMail";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";

function ModalForm({ open, onClose }) {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const whatsapp = formData.get('whatsapp');
    const message = formData.get('message');
    const service = formData.get('service');

    if (!name || !email || !message || !whatsapp || !service) {
      toast.error('Please fill in all the fields before submitting.');
      return;
    }

    sendEmail(form);

    onClose(); // Close the modal after sending the email
  };

  return (
    <div
      className={clsx(
        "fixed z-[999] mx-auto w-[90%] min-h-[90vh] bg-[#171717] top-10 left-[50%] translate-x-[-50%] transition-all duration-300 ease-in-out",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col p-10 gap-5 relative">
        <span className="p-2 absolute top-5 right-5 cursor-pointer">
          <IoMdClose size={30} onClick={onClose} />
        </span>

        <div className="flex justify-center">
          <Heading subheading={"Contact Us"} headingWhite={"Got A Project?"} />
        </div>

        <form className="flex flex-col gap-5" ref={form} onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-5">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="p-3 w-full md:w-[48%] bg-[#1e1e1e] border border-[#333] rounded-md text-white focus:outline-none focus:border-[#6e00ff]"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="p-3 w-full md:w-[48%] bg-[#1e1e1e] border border-[#333] rounded-md text-white focus:outline-none focus:border-[#6e00ff]"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <input
              type="phone"
              placeholder="WhatsApp Number"
              name="whatsapp"
              className="p-3 w-full md:w-[48%] bg-[#1e1e1e] border border-[#333] rounded-md text-white focus:outline-none focus:border-[#6e00ff]"
            />
            <select
              name="service"
              className="p-3 w-full md:w-[48%] bg-[#1e1e1e] border border-[#333] rounded-md text-white focus:outline-none focus:border-[#6e00ff]"
            >
              {services.map((section, index) =>
                section.services.map((service, i) => (
                  <option key={`${index}-${i}`} value={service.title}>
                    {service.title}
                  </option>
                ))
              )}
              <option value="Other">Other</option>
            </select>
          </div>

          <textarea
            placeholder="Your Message"
            name="message"
            className="p-3 w-full bg-[#1e1e1e] border border-[#333] rounded-md text-white focus:outline-none focus:border-[#6e00ff] h-[200px] resize-none"
          ></textarea>

          <input
            type="submit"
            className="w-[150px] p-2 bg-white rounded-full text-black cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
