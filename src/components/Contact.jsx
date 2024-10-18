import React from 'react';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleSayHello = () => {
    window.location.href = "mailto:kendepratik2504@gmail.com";
  };

  return (
    <motion.div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray text-white relative">
      <div className="text-taupe font-beckman mb-2">What's Next?</div>
      <h1 className="text-4xl font-bold font-overcameBold mb-4">Get In Touch</h1>
      <p className="text-gray-400 font-beckman mb-6 text-center">
        I'm actively looking for opportunities, my inbox is always open.
      </p>
      <button 
        onClick={handleSayHello}
        className="px-6 py-2 border border-white font-beckman hover:bg-white hover:text-eerieBlack transition-colors duration-300">
        Say Hello
      </button>

      {/* Left side social links */}
      <div className="fixed left-10 bottom-4 flex flex-col items-center">
        <a href="https://github.com/2504pratik" target="_blank" rel="noopener noreferrer" className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px"
            width="50" height="50"
            viewBox="0 0 30 30"
            fill="currentColor"
            className="w-6 h-6 text-gray-400 hover:opacity-75 transition-opacity"
          >
           <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/pratik-kende" target="_blank" rel="noopener noreferrer" className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px"
            width="50" height="50"
            viewBox="0 0 50 50"
            fill="currentColor"
            className="w-6 h-6 text-gray-400 hover:opacity-75 transition-opacity"
          >
            <path d="M 8 3.0117188 C 6.3126093 3.0117188 4.8354789 3.4916328 3.7539062 4.3652344 C 2.6723337 5.238836 2.0117188 6.533218 2.0117188 7.9472656 C 2.0117188 10.690836 4.4687078 12.814467 7.7167969 12.941406 A 0.98809878 0.98809878 0 0 0 8 12.988281 C 9.753566 12.988281 11.246191 12.474267 12.3125 11.564453 C 13.378809 10.654639 13.988281 9.3429353 13.988281 7.9472656 A 0.98809878 0.98809878 0 0 0 13.986328 7.8925781 C 13.832307 5.1316834 11.374781 3.0117187 8 3.0117188 z M 8 4.9882812 C 10.60907 4.9882812 11.895883 6.2693448 12.005859 7.9726562 C 11.998759 8.8049335 11.676559 9.5118991 11.03125 10.0625 C 10.378809 10.619186 9.371434 11.011719 8 11.011719 C 5.3980542 11.011719 3.9882813 9.5991704 3.9882812 7.9472656 C 3.9882812 7.1213132 4.3276663 6.4422421 4.9960938 5.9023438 C 5.6645211 5.3624454 6.6873907 4.9882813 8 4.9882812 z M 3 15 A 1.0001 1.0001 0 0 0 2 16 L 2 45 A 1.0001 1.0001 0 0 0 3 46 L 13 46 A 1.0001 1.0001 0 0 0 14 45 L 14 35.664062 L 14 16 A 1.0001 1.0001 0 0 0 13 15 L 3 15 z M 18 15 A 1.0001 1.0001 0 0 0 17 16 L 17 45 A 1.0001 1.0001 0 0 0 18 46 L 28 46 A 1.0001 1.0001 0 0 0 29 45 L 29 29 L 29 28.75 L 29 28.5 C 29 26.555577 30.555577 25 32.5 25 C 34.444423 25 36 26.555577 36 28.5 L 36 45 A 1.0001 1.0001 0 0 0 37 46 L 47 46 A 1.0001 1.0001 0 0 0 48 45 L 48 28 C 48 23.873476 46.787888 20.604454 44.744141 18.375 C 42.700394 16.145546 39.849212 15 36.787109 15 C 32.882872 15 30.521631 16.426076 29 17.601562 L 29 16 A 1.0001 1.0001 0 0 0 28 15 L 18 15 z M 4 17 L 12 17 L 12 35.664062 L 12 44 L 4 44 L 4 17 z M 19 17 L 27 17 L 27 19.638672 A 1.0001 1.0001 0 0 0 28.744141 20.306641 C 28.744141 20.306641 31.709841 17 36.787109 17 C 39.360007 17 41.615528 17.922268 43.269531 19.726562 C 44.923534 21.530858 46 24.261524 46 28 L 46 44 L 38 44 L 38 28.5 A 1.0001 1.0001 0 0 0 37.916016 28.089844 C 37.694061 25.26411 35.38033 23 32.5 23 C 29.474423 23 27 25.474423 27 28.5 L 27 28.75 L 27 29 L 27 44 L 19 44 L 19 17 z"></path>
          </svg>
        </a>
        <a href="https://x.com/pratik_kende" target="_blank" rel="noopener noreferrer" className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px"
            width="50" height="50"
            viewBox="0 0 30 30"
            fill="currentColor"
            className="w-6 h-6 text-gray-400 hover:opacity-75 transition-opacity"
          >
            <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
          </svg>
        </a>
        <div className="w-px h-24 bg-gray-400 mt-4 mix-blend-difference"></div>
      </div>

      {/* Right side email */}
      <div className="fixed right-10 bottom-4 flex flex-col items-center">
        <button 
          onClick={handleSayHello}
          className="text-gray-400 hover:opacity-75 transition-opacity mb-4 writing-vertical group mix-blend-difference"
        >
          <span className="group-hover:opacity-75 transition-opacity">kendepratik2504@gmail.com</span>
        </button>
        <div className="w-px h-24 bg-gray-400 mt-4 mix-blend-difference"></div>
      </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Contact, 'contact');