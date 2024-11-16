import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdCall, MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-blue-950/70 via-blue-950/90 to-blue-950/100 text-white h-auto relative px-5 z-20">
        <section className="max-w-[1200px] mx-auto text-white">
          <div className="grid md:grid-cols-3 py-5">
            <div data-aos="fade-up" data-aos-delay="200" className="py-8 px-4">
              <h1 className="font-bold text-2xl sm:text-2xl sm:text-left text-justify mb-3">
                Be Ready To Grow
              </h1>
              <p>
                Get Exclusive <b>Update</b> Straigt to your inbox
              </p>
              <br />
              <div className="flex items-center h-10">
                <input
                  type="email"
                  className="py-1 px-3 w-full inline-block focus:outline-none focus:border-blue-500 focus:right-1 focus:ring-1 focus:ring-blue-500 border-2 border-gray-200 rounded-md text-black"
                  placeholder="Email"
                />
                <button className="primary-button">Send</button>
              </div>
            </div>
            {/******************************************************************************** */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ml-20 gap-10">
              <div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="py-8 px-4"
                >
                  <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <a href="#" className="hover:text-blue-400  duration-300">
                        Our Planet
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-400  duration-300">
                        Solar System
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-400  duration-300">
                        Galaxy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-400  duration-300">
                        Phenomena
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="py-8 px-4"
                >
                  <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <a href="#" className="hover:text-blue-400  duration-300">
                        Space Bodies
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-400  duration-300">
                        Land and Water
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-400  duration-300">
                        Eclipses
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="100">
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-2">Contact Us</h1>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MdMessage />
                    <p>galaxy@gmail.com</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mt-5">
                    <MdCall />
                    <p>+20 12345678910</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/******************************************************************************* */}
          <div
           
            className="hidden sm:block"
          >
            <div className="flex justify-between items-center py-6 border-t-2 border-gray-400">
              <span className="text-sm text-gray-300">
                copyright &copy;2024 by GALAXY
              </span>
              <div className="flex items-center justify-center gap-6 ">
                <a href="#">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
              <span className="text-sm text-gray-300">
                <ul className=" flex gap-3">
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Footer;
