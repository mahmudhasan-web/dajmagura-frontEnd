import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Button from "../shared/Button/Button";

const ContactUs = () => {
  return (
    <div className="">
      <div className=" bg-gray-100 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between container">
          {/* Contact Info Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-cardillac font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              Connect with us through any of the following channels—we&apos;re here to assist you.
            </p>
            <div className="mb-4">
              <p className="flex items-center mb-2">
                <span className="text-xl mr-2">
                  <IoLocationSharp />
                </span>
                <span>
                  <strong>Address:</strong> 1234 Mentor Lane, Suite 100, Los Angeles, CA 90001, USA
                </span>
              </p>
              <p className="text-gray-600 mb-1">Monday To Friday</p>
              <p className="text-gray-600">8:00 AM - 6:30 PM</p>
            </div>
            <div className="mb-4">
              <p className="flex items-center">
                <span className="text-sm sm:text-xl mr-2">
                  <MdEmail />
                </span>
                <strong>Email:</strong> contact@magura.Com
              </p>
            </div>
            <div>
              <p className="flex items-center mb-1">
                <span className="text-xl mr-2">
                  <FaPhone />
                </span>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 max-w-lg md:p-6 rounded-lg">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-400"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-400"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-400"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-400"
                  placeholder="Write your message here..."
                  rows={4}
                ></textarea>
              </div>

              {/* Mailing List Consent */}
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="mailing-list"
                  className="mr-2 rounded border-gray-300 text-accent focus:ring focus:ring-yellow-400"
                />
                <label htmlFor="mailing-list" className="text-sm">
                  I agree to sign up for the mailing list and receive updates.
                </label>
              </div>

              <Button className="w-full rounded-3xl bg-accent">SEND</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
