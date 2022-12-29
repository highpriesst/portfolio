import SingleLink from "../components/SingleLink";

function Links() {
  return (
    <div className="text-black flex flex-col p-5 w-full dark:text-white">
      <SingleLink
        name="github"
        link={"https://github.com/highpriesst"}
        nickname={"highpriesst"}
      />
      <SingleLink
        name="linkedin"
        link={"https://linkedin.com/in/highpriesst"}
        nickname={"highpriesst"}
      />
      <SingleLink
        name="twitter"
        link={"https://twitter.com/highpriesst"}
        nickname={"highpriesst"}
      />
    </div>
  );
}

export default Links;
