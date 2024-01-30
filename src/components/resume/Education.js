import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-8 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.C.Sc in Computer Science"
            subTitle="University of Computer Studies(Magway) (2013 - 2018)"
           
            des="I attended the B.C.Sc degree from 2013 to 2018. I specialized in computer science. I learned theory and logic about computer science at University."
          />
        
         
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 mt-3 lgl:py-12 font-titleFont flex flex-col gap-4">
          
        </div>
        <div className="mt-7 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="M.C.Sc (Thesis)"
            subTitle="University of Computer Studies (2019 - 2020)"
            
            des="From 2019 to 2020, I continued to attend the course work of the master's class, but I stopped working on the thesis because I changed my career as a web developer."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education