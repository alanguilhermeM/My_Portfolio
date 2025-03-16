"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactHeader from "./contactHeader";
import { useIntl } from "react-intl";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const intl = useIntl();

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);
    try {
      await emailjs.sendForm(
        "service_9wapfln",
        "template_835knph",
        form.current,
        "VHeZ9DuwsxeKbQRoF"
      );
      setMessage("E-mail enviado com sucesso!");
      form.current.reset();
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setMessage("Erro ao enviar e-mail.");
    }
    console.log(message)
    setIsSending(false);
  };

  return (
    <main>
      <ContactHeader />

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-self-center xl:w-[40%] max-xl:w-[80%] font-zain text-2xl text-gray-500"
      >
        <section className="flex max-xl:flex-col justify-between py-8">
          <div className="grid w-1/2 max-xl:w-full">
            <label className="pb-2">{intl.formatMessage({ id: "contactName" })}</label>
            <input
              type="text"
              name="from_name"
              required
              className="w-[95%] p-3 rounded-md text-black border border-gray-200 dark:bg-white"
            />

          </div>

          <div className="grid w-1/2 max-xl:w-full">
            <label className="pb-2">{intl.formatMessage({ id: "contactEmail" })}</label>
            <input
              type="email"
              name="from_email"
              required
              className="w-[95%] p-3 rounded-md text-black border border-gray-200 dark:bg-white"
            />
          </div>
        </section>

        <label className="pb-2">{intl.formatMessage({ id: "contactMessage" })}</label>
        <textarea
          name="message"
          required
          className="w-[97.7%] h-64 p-3 rounded-md text-black border border-gray-200 dark:bg-white"
        />

        <button
          type="submit"
          disabled={isSending}
          className="w-[180px] h-[50px] text-[#7A63FF] font-zain font-medium text-2xl hover:text-white hover:bg-[#7A63FF] transition duration-200 ease-in-out border-2 border-[#7A63FF] rounded-full mt-14 self-center max-xl:mb-10"
        >
          {isSending ? <p>{intl.formatMessage({ id: "contactSending" })}</p> : <p>{intl.formatMessage({ id: "contactSubmit" })}</p> }
        </button>
        {/* {message && <p className="text-white text-center">{message}</p>} */}
      </form>
    </main>
  );
}
