import React, { useState } from "react";
import { skills } from "../data/skills";
import { Card, CardHeader, CardTitle, CardContent } from "@components";
import { motion } from "framer-motion";

const categories = Object.keys(skills);

export const Skill = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section data-aos="fade-right" className="py-20 ">
      <div className="mx-auto  px-4">
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          <span className="inline-flex items-center rounded-full border border-primary/40 px-3 py-1 text-sm font-semibold text-gray-700">Skills</span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black">My Skill-Set</h1>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === category ? 'bg-primary text-white border-primary shadow-sm' : 'bg-white text-gray-700 border-gray-200 hover:border-primary/50 hover:bg-primary/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills[activeCategory].map((skill, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="h-full"
            >
              <Card className="h-full  border-gray-200 shadow-sm hover:shadow-lg hover:shadow-primary/10 hover:border-primary/40 transition-all duration-300">
                <CardHeader className="items-center text-center gap-3">
                  <div className="relative">
                    <img src={skill.img} alt={skill.title} className="h-16 w-16 object-contain drop-shadow" loading="lazy" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-center mx-auto font-semibold text-black bg-gray-100 border border-gray-200 rounded-full px-2 py-0.5">{skill.percentage}%</span>
                  </div>
                  <div className="w-full rounded-full h-2.5 bg-gray-200 overflow-hidden">
                    <div className="h-2.5 bg-primary rounded-full transition-all duration-700" style={{ width: `${skill.percentage}%` }} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

