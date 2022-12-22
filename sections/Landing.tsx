function Landing() {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "TailwindCSS",
    "Node.js",
    "Next.js",
  ];
  return (
    <div className="bg-white dark:bg-gray-900 font-mono">
      <div className="h-screen flex from-blue-600 to-indigo-400 bg-white dark:bg-gray-900">
        Landing section
      </div>
      <div className="h-screen flex justify-center items-center bg-gray-800">
        <div className="flex flex-col max-w-[500px]">
          <p>
            <b>Hello!</b>I am a
            <span className="text-blue-700 font-bold">
              {" "}
              front-end developer{" "}
            </span>
            with a passion for creating visually appealing and user-friendly
            websites and applications. My interest in web development started
            back in 2012 when I decided to try editing custom Tumblr themes —
            turns out hacking together a custom reblog button taught me a lot
            about HTML &amp; CSS! With a strong foundation in HTML, CSS, and
            JavaScript, and also React/Typescript.I bring ideas to life through
            clean and efficient code. I have a keen eye for design and am always
            striving to stay up-to-date on the latest web development trends and
            techniques. I am dedicated to delivering high-quality work and am
            committed to exceeding client expectations. Thank you for
            considering me for your front-end development needs. I am excited to
            work with you and bring your ideas to life.
          </p>

          <p>Here are a few technologies Ive been working with recently:</p>
          <ul className="flex">
            {skills &&
              skills.map((skill, i) => (
                <li key={i} className="relative mb-5 pl-10 font-mono text-xs">
                  {skill}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Landing;
