import SingleLink from "../components/SingleLink";

function Links() {
  return (
    <div className="text-white flex flex-col p-8 mb-2 w-full">
      <SingleLink
        name="github"
        link={"https://github.com/highpriesst"}
        nickname={"highpriesst"}
      />
      <SingleLink
        name="linkedin"
        link={"https://linkedin.com/highpriesst"}
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
