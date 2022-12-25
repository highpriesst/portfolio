import Link from "next/link";

function Works() {
  return (
    <div className=" h-screen flex flex-co ljustify-center items-center indent-8 bg-white dark:bg-gray-900">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        veniam minima assumenda exercitationem quia ducimus? Adipisci architecto
        pariatur, in quam recusandae vero commodi magnam earum aperiam odit
        assumenda, iste voluptatum?
      </p>
      <button className="bg-gray-600 text-white p-2 rounded-lg hover:bg-gray-500">
        <Link href="/">Home Button</Link>
      </button>
    </div>
  );
}

export default Works;
