import SingleLink from "../components/SingleLink";

function Links() {
  return (
    <div className="text-black flex flex-col p-5 w-full dark:text-white">
      <h1 className="mb-3 text-[#e4bb68]">Links</h1>
      <SingleLink
        name="Github"
        link={"https://github.com/highpriesst"}
        nickname={"highpriesst"}
      />
      <SingleLink
        name="Linkedin"
        link={"https://linkedin.com/in/highpriesst"}
        nickname={"highpriesst"}
      />
      <SingleLink
        name="Twitter"
        link={"https://twitter.com/highpriesst"}
        nickname={"highpriesst"}
      />
    </div>
  );
}

export default Links;
