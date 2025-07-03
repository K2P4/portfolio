/** @format */

import React  from "react";

const AboutPage = () => {

  return (
    <div id="about" className="py-16">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* About  */}
          <div data-aos="fade-right" className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-yellow-400">About Me</h2>
            <p className="text-gray-300 leading-relaxed tracking-tight text-justify">
              Hello, I am{" "}
              <span className="text-yellow-400 font-semibold tracking-wide">
                Thura
              </span>
              . I’m currently working as a Junior Developer at a logistics
              company. I specialize in developing web applications and backend
              systems, and I enjoy streamlining business operations through
              modern technology. I've always had a passion for software
              development and continuously strive to improve my skills to create
              scalable, high-quality solutions.
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-md shadow-lg shadow-[#2b1c39]/30 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Name</p>
                <p className="text-yellow-400 font-semibold text-md">
                  Phyo Thura
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md shadow-lg shadow-[#2b1c39]/30 rounded-lg p-4">
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-yellow-400 font-semibold text-md">
                  09968213232
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md shadow-lg shadow-[#2b1c39]/30 rounded-lg p-4 col-span-2">
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-yellow-400 font-semibold text-md">
                  pthya381@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div data-aos="fade-left" className="space-y-6 mx-auto">
            <h3 className="text-xl font-semibold text-yellow-400">
              My Interests
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: "🎧", label: "Music" },
                { icon: "✈️", label: "Travel" },
                { icon: "🎬", label: "Movie" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white/5 shadow-md shadow-[#2b1c39]/30 px-4 py-2 duration-700 cursor-pointer hover:shadow-sm hover:scale-105 rounded-full text-gray-300 text-sm"
                >
                  <span className="text-yellow-400 text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
