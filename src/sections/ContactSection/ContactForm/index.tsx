"use client";
import { useState } from "react";

export default function ContactForm() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  return (
    <div className=" relative rounded-lg p-8 sm:p-12 ">
      <form>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => {
              e.preventDefault();
              setName(e.currentTarget.value);
            }}
            className="
              w-full
              rounded
              py-3
              px-[14px]
              text-body-color text-base
              border border-[f0f0f0]
              outline-none
              focus-visible:shadow-none
              focus:border-primary
              "
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            placeholder="Your Email"
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.currentTarget.value);
            }}
            className="
              w-full
              rounded
              py-3
              px-[14px]
              text-body-color text-base
              border border-[f0f0f0]
              outline-none
              focus-visible:shadow-none
              focus:border-primary
              "
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Your Phone"
            onChange={(e) => {
              e.preventDefault();
              setPhoneNumber(e.currentTarget.value);
            }}
            className="
              w-full
              rounded
              py-3
              px-[14px]
              text-body-color text-base
              border border-[f0f0f0]
              outline-none
              focus-visible:shadow-none
              focus:border-primary
              "
          />
        </div>
        <div className="mb-6">
          <textarea
            rows={6}
            placeholder="Your Message"
            onChange={(e) => {
              e.preventDefault();
              setMessage(e.currentTarget.value);
            }}
            className="
              w-full
              rounded
              py-3
              px-[14px]
              text-body-color text-base
              border border-[f0f0f0]
              resize-none
              outline-none
              focus-visible:shadow-none
              focus:border-primary
              "
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="
              w-full
              text-white
              bg-primary
              rounded
              border border-primary
              p-3
              transition
              hover:bg-opacity-90
              "
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
