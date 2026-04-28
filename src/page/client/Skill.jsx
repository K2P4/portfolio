import { useState } from "react";
import { skills } from "../../data/skills";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "../../components/Card";
import Carousel from "../../components/Carousel";

const categories = Object.keys(skills);

function SkillCard({ skill }) {
  return (
    <Card className="h-full rounded-2xl border-gray-200 shadow-sm hover:shadow-lg hover:shadow-primary/10 hover:border-primary/40 transition-all duration-300">
      <CardHeader className="items-center text-center gap-3">
        <div className="relative">
          <img src={skill.img} alt={skill.title} className="h-16 w-16 object-contain drop-shadow" loading="lazy" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-center mx-auto font-semibold text-black dark:text-slate-100 bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full px-2 py-0.5">
            {skill.percentage}%
          </span>
        </div>
        <div className="w-full rounded-full h-2.5 bg-gray-200 dark:bg-slate-800 overflow-hidden">
          <div className="h-2.5 bg-primary rounded-full transition-all duration-700" style={{ width: `${skill.percentage}%` }} />
        </div>
      </CardContent>
    </Card>
  );
}

export default function Skill() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section data-aos="fade-right" className="py-20 ">
      <div className="mx-auto  px-4">
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-slate-100">My Skill-Set</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === category ? 'bg-primary text-white border-primary shadow-sm' : 'bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-300 border-gray-200 dark:border-slate-700 hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile Skills Carousel */}
        <div className="md:hidden">
          <Carousel
            items={skills[activeCategory]}
            getKey={(skill, idx) => `${skill.title}-${idx}`}
            showArrows={false}
            showDots={true}
            autoSlide={true}
            autoSlideInterval={3000}
            slideWidthClasses="w-[50%]"
            className="px-1"
            renderItem={(skill) => <SkillCard skill={skill} />}
          />
        </div>

        {/* Desktop Skills Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills[activeCategory].map((skill, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 8 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="h-full"
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

