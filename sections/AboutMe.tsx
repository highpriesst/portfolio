import React from "react";

function AboutMe() {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "TailwindCSS",
    "Node.js",
    "Next.js",
  ];
  return (
    <div className="h-screen flex justify-center items-center bg-white dark:bg-gray-900">
      <div className="flex flex-col max-w-[800px] h-[400px] tracking-widest">
        <p>
          <b>Hello!</b>I am a
          <span className="text-color-dark font-bold pl-1 pr-1">
            front-end developer
          </span>
          with a passion for creating visually appealing and user-friendly
          websites and applications. My interest in web development started back
          in 2014 when I decided to try editing custom Tumblr themes — turns out
          hacking together a custom reblog button taught me a lot about HTML
          &amp; CSS! With a strong foundation in HTML, CSS, and JavaScript, and
          also React/Typescript.I bring ideas to life through&#160;
          <b>clean and efficient code</b>. I have a keen eye for design and am
          always striving to stay up-to-date on the latest web development
          trends and techniques. I am dedicated to delivering{" "}
          <b>high-quality</b> work and am committed to exceeding client
          expectations. Thank you for considering me for your front-end
          development needs. I am excited to work with you and bring your ideas
          to life.
        </p>

        <p className="mt-5 flex justify-center items-center">
          Here are a few technologies Ive been working with recently:
        </p>
        <ul className="grid grid-cols-3 mt-5">
          {skills &&
            skills.map((skill, i) => (
              <li
                key={i}
                className="relative mb-5 pl-10 font-mono text-xs flex  items-center font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 float-left">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <p>{skill}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
