import React from 'react';
import logo1 from "../header/Rectangle 717.png";
import logo2 from "../header/Rectangle 719.png";
import logo3 from "../header/Rectangle 720.png";
import logo4 from "../header/Rectangle 722.png";
import logo5 from "../header/Rectangle 721.png";
import logo7 from "../header/Rectangle 723.png";
import logo8 from "../header/as.png";
import logo9 from "../header/Vector.png";


const Header = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold">RMC</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-400">The Studio</a>
          <a href="#" className="hover:text-gray-400">Projects</a>
          <a href="#" className="hover:text-gray-400">Architecture</a>
          <a href="#" className="hover:text-gray-400">Blog</a>
        </nav>
        <div>
          <button className="hidden xl:block border border-white px-4 py-2 text-sm hover:bg-white hover:text-gray-900">
            Contact
          </button>
          <img
            src={logo9}
            alt="Menu Icon"
            className="block xl:hidden w-[27px] h-[24px]"
          />
        </div>
      </header>

      {/* Main Section */}
      <main className="flex flex-col-reverse md:flex-row">
        <div className="p-6 md:w-1/2 flex flex-col justify-center">
          <h4 className="text-yellow-400 text-sm tracking-widest mb-2">ARCHITECTURE DESIGN</h4>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            PROFESSIONAL <br /> INTERIOR DESIGN
          </h1>
          <p className="text-gray-400 mb-6">
            Design for now with the awareness of yesterday and unknown tomorrow. Because small details make the perfect design. Helping you choose between good and best.
          </p>
          <button className="border border-white px-6 py-3 text-sm hover:bg-white hover:text-gray-900">
            Let's Work Together
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src={logo1}
            alt="Interior Design"
            className="w-full h-auto object-cover"
          />
        </div>
      </main>

      {/* Specializations Section */}
      <section className="p-6">
        <h2 className="text-center text-3xl font-bold mb-6">Our Specializations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[{
              img: logo2,
              title: "Floor Plan",
              desc: "Tempor incididunt ut labore et dolore magna aliqua."
            },
            {
              img: logo3,
              title: "Interior Design",
              desc: "Tempor incididunt ut labore et dolore magna aliqua."
            },
            {
              img: logo4,
              title: "Architecture Design",
              desc: "Tempor incididunt ut labore et dolore magna aliqua."
            },
            {
              img: logo5,
              title: "Construction",
              desc: "Tempor incididunt ut labore et dolore magna aliqua."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="p-6 bg-gray-800">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">About Us</h2>
        </div>
        <div className="md:flex md:space-x-6">
          <div className="md:w-1/2">
            <p className="text-gray-300 mb-4">
              As development continues, engineers may visit building destinations to guarantee that temporary workers pursue the plan, keep to the timetable, utilize the predefined materials, and meet work-quality models.
            </p>
            <h3 className="text-6xl font-bold text-yellow-400">85%</h3>
            <p className="text-gray-300">Satisfied Clients</p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img
              src={logo7}
              alt="Building 1"
              className="lg:w-[300px] lg:h-[500px] w-[185px] h-[279px]"
            />
            <img
              src={logo8}
              alt="Building 2"
              className="lg:w-[300px] lg:h-[500px] w-[185px] h-[279px]"
            />
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Header;
