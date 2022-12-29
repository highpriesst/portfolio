import Link from "next/link";

function Work() {
  return (
    <div className="w-full flex h-auto flex-col p-5 [&>*]:mb-3">
      <h1 className="font-bold">
        <Link href="/allWorks">Work</Link>
      </h1>
      <p className="text-gray-500">Coming soon...</p>
    </div>
  );
}

export default Work;
