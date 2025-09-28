import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Contact, About, Service, Skill, Projects, Client } from '@pages';
import { Social } from '@components';

export const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['Full Stack Developer'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    AOS.init({ duration: 1000 });

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const downloadCV = () => {
    setLoading(true);
    const url = '/thura_cv_update.png';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Phyo Thura_CV');
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setLoading(false);
  };

  return (
    <section id="home">
      {/* Home */}
      <div className="w-full mx-auto min-h-screen justify-between grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16  place-items-center">
        <div data-aos="fade-right" className="w-full  lg:mt-0  animate-fade-in">
          <p className="text-sm md:text-base text-slate-500 text-center lg:text-left">Hello! I’m</p>
          <h1 className="mt-1 text-3xl md:text-5xl font-bold tracking-tight text-center lg:text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">PHYO THURA</span>
          </h1>
          <h2 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight text-center lg:text-left">
            Junior <span className="text-slate-800">{text}</span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-center lg:text-left text-slate-600 leading-relaxed md:leading-7 max-w-2xl">
            I build fast, accessible and delightful web apps. I love helping people grow their business with clean code and thoughtful design.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8 animate-slide-up">
            <a href="mailto:pthuya381@gmail.com" className="btn-primary text-sm md:text-base font-bold">
              Hire Me
            </a>
            <button onClick={downloadCV} className="btn-outline text-sm md:text-base">
              {loading ? 'Loading' : 'Download CV'}
            </button>
          </div>

            <Social />
        </div>

        {/*  Profile */}
        <div data-aos="fade-left" className="w-full flex justify-center items-center">
          <div className="relative group animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-blue-400/20 blur-2xl scale-110 -z-10" />
            <img
              src="/Phyo.jpg"
              alt="Profile of Phyo Thura"
              className="w-56 h-56 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl ring-2 ring-primary/10 border border-primary/50 transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-sm font-semibold text-white">Hello, I'm Phyo Thura 👋</p>
            </div>
          </div>
        </div>
      </div>

      <About />
      <Service />
      <Skill />
      <Projects />
      <Client />
      <Contact />
    </section>
  );
};

