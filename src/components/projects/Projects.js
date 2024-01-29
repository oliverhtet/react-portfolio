import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Food Order System"
          des="The food order system is a comprehensive platform designed to facilitate the seamless ordering of food items. It consists of a user-friendly interface with features such as an attractive homepage, a categorized menu display, and detailed item information. Users can easily add or remove items from their shopping cart, proceed to a secure checkout process, and track their orders if applicable"
          src={projectOne}
        />
        <ProjectsCard
          title="Fingerprint-based Attendance Integration System"
          des="
          The development of a fingerprint-based attendance integration system seamlessly combines hardware and software elements. This comprehensive solution captures and securely stores unique biometric data, enabling real-time attendance tracking. Key components include user-friendly registration, robust database management, and stringent security measures like encryption and access controls. Scalability, rigorous testing, documentation, compliance with regulations, systematic deployment, training, and ongoing support are crucial aspects. The result is an efficient, secure, and compliant system providing accurate attendance records while prioritizing user convenience and data integrity"
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Projects