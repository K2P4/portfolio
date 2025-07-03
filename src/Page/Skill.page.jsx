import React, { useState } from "react";
import { skills } from "../data/skills";

const categories = Object.keys(skills);

const SkillPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section  data-aos="fade-right" className="min-h-screen py-16  px-4">
      <h1 className="text-yellow-400 text-4xl font-bold border-b-2 border-yellow-400 inline-block mb-12">
        My Skill-Set
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4  mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-yellow-400 text-black shadow-lg "
                : "bg-[#2a2a2a] text-yellow-500  hover:bg-yellow-500 hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-10 items-center ">
        {skills[activeCategory].map((skill, idx) => (
          <div
            key={idx}
            className=" border border-purple-950 rounded-3xl p-6 w-[90%] sm:w-[260px] shadow-lg hover:shadow-yellow-400/10 transition duration-300 ease-in-out"
          >
            <div className="flex flex-col items-center gap-4">
              <img
                src={skill.img}
                alt={skill.title}
                className="h-20 w-20 object-contain drop-shadow-lg"
              />
              <h3 className="text-xl text-yellow-400 font-semibold tracking-wide text-center">
                {skill.title}
              </h3>

              {/* Progress  */}
              <div className="w-full mt-4">
                <div className="text-sm text-gray-400 mb-1 text-center">
                  {skill.percentage}%
                </div>
                <div className="w-full rounded-full h-3">
                  <div
                    className="bg-yellow-400 h-3 rounded-full transition-all duration-700"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillPage;
