"use client";

import React from "react";

export default function AboutMe() {
  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-md text-green-500">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="mb-4">
        {`Hello! I'm a passionate web developer with a keen interest in creating intuitive and efficient user experiences. 
        My journey in tech started with a curiosity about how things work on the internet, which led me to dive deep into 
        web technologies.`}
      </p>
      <p className="mb-4">
        {`I specialize in front-end development, with expertise in React,
        TypeScript, and modern CSS frameworks like Tailwind. I'm also
        well-versed in back-end technologies and enjoy working on full-stack
        projects.`}
      </p>
      <p className="mb-4">
        {`When I'm not coding, you can find me exploring new tech trends,
        contributing to open-source projects, or enjoying a good book on
        software architecture and design patterns.`}
      </p>
      <p>
        {` Feel free to explore my portfolio to see some of the projects I've
        worked on and the skills I've developed along the way!`}
      </p>
    </div>
  );
}
