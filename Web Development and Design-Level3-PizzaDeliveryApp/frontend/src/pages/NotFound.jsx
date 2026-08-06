import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const NotFound = () => {
  return (
    <div className="bg-[#fff8f3]">
      <section className="mx-auto flex min-h-[calc(100vh-180px)] max-w-4xl items-center justify-center px-6 py-16 text-center">
        <div className="rounded-[2.5rem] border border-[#f0e4d9] bg-white px-6 py-16 shadow-[0_28px_90px_rgba(32,21,16,0.08)] sm:px-12">
          <span className="text-sm font-black uppercase tracking-[0.22em] text-[#e2361d]">
            404
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#201510] sm:text-5xl">
            This slice is missing.
          </h1>
          <p className="mx-auto mt-4 max-w-md leading-7 text-[#76665c]">
            The page you are looking for does not exist in PizzaVerse yet.
          </p>
          <Link to="/">
            <Button className="mt-8">Back Home</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
