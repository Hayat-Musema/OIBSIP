import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Loader from "../components/common/Loader";

const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

const Login = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async () => {
    setSubmitted(false);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(true);
  };

  return (
    <div className="bg-[#fff8f3]">
      <section className="mx-auto grid min-h-[calc(100vh-180px)] max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <span className="inline-flex rounded-full border border-[#ffd8c7] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#e2361d]">
            Welcome Back
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#201510] sm:text-5xl">
            Sign in for faster ordering.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#6f5e54]">
            Keep favorite pizzas, saved addresses, recent orders, and delivery
            tracking ready for your next PizzaVerse night.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Saved carts", "Fast checkout", "Live tracking"].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[#f0e4d9] bg-white p-5 text-sm font-black text-[#201510] shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-[#f0e4d9] bg-white p-6 shadow-[0_28px_90px_rgba(32,21,16,0.1)] sm:p-8">
          <h2 className="text-3xl font-black tracking-tight text-[#201510]">
            Login
          </h2>
          <p className="mt-2 text-[#76665c]">
            Access your saved favorites, addresses, and recent orders.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              icon={Mail}
              error={errors.email?.message}
              {...register("email")}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              icon={Lock}
              error={errors.password?.message}
              {...register("password")}
            />

            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <label className="flex items-center gap-2 font-bold text-[#76665c]">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-[#eadfd4] accent-[#e2361d]"
                />
                Remember me
              </label>
              <a href="/" className="font-black text-[#e2361d]">
                Forgot password?
              </a>
            </div>

            <Button type="submit" className="min-h-14 w-full">
              {isSubmitting ? <Loader label="Signing in" /> : "Sign In"}
            </Button>

            {submitted && (
              <p className="rounded-2xl bg-[#fff8f3] px-4 py-3 text-sm font-bold text-[#5f5048]">
                Looks good. Your PizzaVerse profile is ready.
              </p>
            )}
          </form>

          <p className="mt-7 text-center text-sm font-semibold text-[#76665c]">
            New to PizzaVerse?{" "}
            <Link to="/register" className="font-black text-[#e2361d]">
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
