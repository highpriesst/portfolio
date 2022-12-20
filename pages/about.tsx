import Link from "next/link";

function About() {
  return (
    <div className="h-screen flex justify-center items-center indent-8">
      <div className="h-[400px] w-[400px]">
        <p>
          <span className="text-3xl">Hello!</span> I am a
          <span className="text-cyan-600 font-bold"> front-end developer</span>
          with a passion for creating visually appealing and user-friendly
          websites and applications. With a strong foundation in HTML, CSS, and
          JavaScript, and also React/Typescript.I bring ideas to life through
          clean and efficient code. I have a keen eye for design and am always
          striving to stay up-to-date on the latest web development trends and
          techniques. I am dedicated to delivering high-quality work and am
          committed to exceeding client expectations. Thank you for considering
          me for your front-end development needs. I am excited to work with you
          and bring your ideas to life.
        </p>
      </div>
      <Link href="/">Home</Link>
    </div>
  );
}

export default About;
