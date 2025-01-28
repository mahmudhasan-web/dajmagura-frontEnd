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
            <h2 className="text-3xl font-cardillac font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-text mb-4">
              Connect with us through any of the following channels—we&apos;re
              here to assist you.
            </p>
            <table className="mb-4 w-full border-collapse">
              <tbody className="">
                {/* Address Row */}
                <tr className="align-top">
                  <td className="pr-2 flex">
                    <span className="text-xl mr-2">
                      <IoLocationSharp />
                    </span>
                    <p className="font-medium">Address:</p>
                  </td>
                  <td>
                    <span className="text-text">
                      123 Regent StreetLondon, W1B 2HL United Kingdom
                    </span>
                  </td>
                </tr>

                {/* Schedule Row */}
                <tr className="align-top ">
                  <td></td>
                  <td className="pt-4">
                    <p className="text-text mb-1">Monday To Friday</p>
                    <p className="text-text">8:00 AM - 6:30 PM</p>
                  </td>
                </tr>
                <tr>
                  <td className="flex pt-4">
                    <span className="text-sm sm:text-xl mr-2">
                      <MdEmail />
                    </span>
                    <strong className="mr-1 font-medium">Email: </strong>
                  </td>
                  <td className="pt-4">
                    <span className="text-text">contact@magura.Com</span>
                  </td>
                </tr>
                <tr>
                  <td className="flex pt-4">
                    <span className="text-xl mr-2">
                      <FaPhone />
                    </span>
                    <p className="font-medium">Phone:</p>
                  </td>
                  <td className="pt-4 text-text">
                    +1 (555) 123-4567 <br /> +1 (555) 123-4567
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 max-w-lg md:p-6 rounded-lg">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm  mb-2">
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-3 border border-[#2A2F35] rounded-[8px] focus:outline-none focus:ring focus:ring-primary/15"
                    placeholder="Name*"
                    required
                  />
                </label>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm  mb-2">
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-3 border border-[#2A2F35] rounded-[8px] focus:outline-none focus:ring focus:ring-primary/15"
                    placeholder="Email*"
                    required
                  />
                </label>
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm  mb-2">
                  <input
                    type="text"
                    id="phone"
                    className="w-full px-3 py-3 border border-[#2A2F35] rounded-[8px] focus:outline-none focus:ring focus:ring-primary/15"
                    placeholder="Phone*"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm  mb-2">
                  <textarea
                    id="message"
                    className="w-full px-3 py-3 placeholder:!font-light border border-[#2A2F35] rounded-[8px] focus:outline-none focus:ring focus:ring-primary/15"
                    placeholder="Your message"
                    rows={4}
                  ></textarea>
                </label>
              </div>
              <Button className="w-full text-white font-normal hover:bg-accent/90 rounded-3xl bg-accent">
                SEND
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
