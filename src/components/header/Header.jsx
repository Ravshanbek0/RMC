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
      <header className="fixed w-full z-40 bg-gray-900 flex justify-between items-center p-6">
        <div className='flex items-center justify-between w-1/2'><div className="text-2xl defult-font font-thin">RMC</div>
          <nav className="hidden md:flex space-x-6 text-[#ABAEB7]">
            <a href="#" className="hover:text-white">The Studio</a>
            <a href="#" className="hover:text-white">Projects</a>
            <a href="#" className="hover:text-white">Architecture</a>
            <a href="#" className="hover:text-white">Blog</a>
          </nav></div>
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
      <main className="container m-auto flex flex-col-reverse md:flex-row">
        <div className="p-6 md:w-1/2 flex flex-col justify-center">
          <h4 className="text-[#ffc978] text-sm tracking-widest mb-2 defult-font font-thin">ARCHITECTURE DESIGN</h4>
          <h1 className="text-4xl md:text-6xl  leading-tight mb-4 defult-font font-thin">
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
            className="w-full h-auto object-contain "
          />
        </div>
      </main>

      {/* Specializations Section */}
      <section className="p-6 container m-auto">
        <h2 className="text-3xl xl:text-5xl mb-6 defult-font font-thin">Our Specializations</h2>
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
        <div className='container m-auto'>

          <div className="md:flex md:justify-between">
            <div className="">
              <div className="mb-6">
                <h2 className="text-3xl defult-font font-thin xl:text-5xl">About Us</h2>
              </div>
              <p className="text-gray-300 mb-4 xl:w-[440px]">
                As development continues, engineers may visit building destinations to guarantee that temporary workers pursue the plan, keep to the timetable, utilize the predefined materials, and meet work-quality models.
              </p>
              <h3 className="text-6xl  text-[#ffc978] defult-font font-thin">85%</h3>
              <p className="text-gray-300">Satisfied Clients</p>
            </div>
            <div className="flex gap-1 xl:flex-row flex-col">
              <img
                src={logo7}
                alt="Building 1"
                className="object-contain mt-10"
              />
              <img
                src={logo8}
                alt="Building 2"
                className="object-contain mt-3"
              />
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Header;
