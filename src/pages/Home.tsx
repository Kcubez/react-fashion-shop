import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex grow items-center justify-center bg-gray-100 md:justify-start">
      <div className="p-8 text-center md:p-20 md:text-left">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl">
          Welcome to our Fashion Shop
        </h1>
        <p className="mb-8 text-gray-700 md:text-lg">
          This is a simple landing page built with React, TypeScript, and
          Tailwind CSS.
        </p>
        <Link
          to="/shop"
          className="rounded-md bg-sky-600 px-6 py-3 text-white shadow hover:bg-sky-700"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default Home;
