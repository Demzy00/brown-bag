"use client";

import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "69bd8e36-2a37-4a90-9891-11ff2ffbb129");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="w-full">
      <div className="h-100 p-100">
        <h4 className="text-center mb-2 text-lg">Connect with me</h4>
        <h2 className="text-center text-5xl font-ovo">Get in touch</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
          I'd love to hear from you! If you have any questions, comments, or
          feedback, please use the form below.
        </p>
      </div>

      <form onSubmit={onSubmit} className="">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90"
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-dark-hover/30 dark:border-white/90"
            name="email"
          />
        </div>
        <textarea
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6  dark:bg-dark-hover/30 dark:border-white/90"
          name="message"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:border-[0.5px] dark:hover:bg-dark-hover"
        >
          Submit now{" "}
        </button>

        <p className="mt-">{result} </p>
      </form>
    </div>
  );
};

<form action="">
    <div className="w-1/2"> 
        <div className="w-1/2">
            <input type="text" placeholder="first name" className="w-full text-lg px-4 py-1.5 rounded shadow-md" />
        </div>
    </div>
    <div className="w-1/2"> 
        <div className="w-1/2">
            <input type="text" placeholder="last name" className="w-full text-lg px-4 py-1.5 rounded shadow-md" />
        </div>
    </div>
</form>

export default Contact;
