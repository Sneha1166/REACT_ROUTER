import React from "react";
import contactMessageImage from "../../assets/generated/contact-message.png";

export default function Contact() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Fill in the form to start a conversation.
          </p>

          <form className="mt-8 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-800 focus:border-orange-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-800 focus:border-orange-500 focus:outline-none"
            />
            <input
              type="tel"
              name="tel"
              placeholder="Telephone Number"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-800 focus:border-orange-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-orange-700 px-6 py-3 font-bold text-white transition duration-300 hover:bg-orange-600"
            >
              Submit
            </button>
          </form>
        </div>

        <img
          className="mx-auto w-full max-w-xl"
          src={contactMessageImage}
          alt="Contact message illustration"
        />
      </div>
    </div>
  );
}
