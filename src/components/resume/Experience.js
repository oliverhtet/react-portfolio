import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-8 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer"
            subTitle="SecureLink - (2021 - Present)"
            result="Myanmar"
          />
           <ResumeCard
            title="Freelance Web Developer"
            subTitle="(2021 - Present)"
            result="Myanmar"
          />
         
         
        </div>
      </div>
      <div>
        <div className="flex mt-12 flex-col gap-4">

        </div>
        <div className="mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         
        <ResumeCard
            title="Front-end Developer"
            subTitle="Magway Software House - (2019 - 2020)"
            result="Myanmar"
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
