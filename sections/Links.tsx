import SingleLink from "../components/SingleLink";

function Links() {
  return (
    <div className="text-black flex flex-col md:p-5 md:pl-10 lg:pl-8 md:w-full lg:w-1/2">
      <h1 className="mb-3">Links</h1>
      <SingleLink
        name="Github"
        link={"https://github.com/highpriesst"}
        nickname={"highpriesst"}
      />
      <SingleLink
        name="Linkedin"
        link={"https://linkedin.com/in/ertanm"}
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
