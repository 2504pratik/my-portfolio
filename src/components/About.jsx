import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        I’m an undergraduate student at <a 
          href="https://www.iiitdwd.ac.in/" 
          target="_blank" 
          className="font-bold text-taupe hover:underline">IIIT Dharwad</a> pursuing <strong>BTech in CSE</strong>. 
        Proficient in <strong>Java</strong> and <strong>Spring Boot</strong>, I specialize in <strong>backend development</strong>, 
        creating <strong>robust APIs</strong>, and handling complex workflows. 
        On the mobile side, I have hands-on experience with <strong>Flutter</strong> for <strong>multi-platform applications </strong> 
        and native development using <strong>Kotlin</strong> & <strong>Java</strong>, to deliver seamless user experiences across platforms. 
        Whether it’s crafting elegant frontend interfaces or architecting backend systems, I enjoy working across the stack to bring ideas to life. 
        With a passion for <strong>continuous learning</strong> and <strong>innovation</strong>, I aim to develop impactful applications that 
        bridge functionality with user satisfaction.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
