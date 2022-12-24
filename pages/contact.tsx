import Form from "../components/Form";
function contact() {
  return (
    <section className="bg-white dark:bg-gray-900 h-screen">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          If you have a project that you think would benefit from my expertise
          in these technologies, or if you simply want to discuss your ideas and
          see how I can help, please don&#39;t hesitate to get in touch.
        </p>
        <Form />
      </div>
    </section>
  );
}

export default contact;
