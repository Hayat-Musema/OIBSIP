import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Loader from "../components/common/Loader";
import useAuth from "../hooks/useAuth";

const registerSchema = z
  .object({
    name: z.string().trim().min(2, "Name must be at least 2 characters."),
    email: z.string().trim().email("Enter a valid email address."),
    phone: z.string().trim().min(7, "Enter a valid phone number."),
    password: z.string().min(6, "Password must be at least 6 characters."),
    confirmPassword: z.string().min(6, "Confirm your password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

const Register = () => {
  const { register: registerUser } = useAuth();
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
  setSubmitted(false);

  try {
    await registerUser({
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
    });

    setSubmitted(true);
  } catch (error) {
    console.error(
      "Registration failed:",
      error.response?.data?.message || error.message
    );
  }
};

  return (
    <div className="bg-[#fff8f3]">
      <section className="mx-auto grid min-h-[calc(100vh-180px)] max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="inline-flex rounded-full border border-[#ffd8c7] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#e2361d]">
            Join PizzaVerse
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#201510] sm:text-5xl">
            Create your delivery profile.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#6f5e54]">
            Save addresses, reorder favorite pies, and unlock a smoother pizza
            delivery flow once the backend is connected.
          </p>
        </div>

        <div className="rounded-[2.5rem] border border-[#f0e4d9] bg-white p-6 shadow-[0_28px_90px_rgba(32,21,16,0.1)] sm:p-8">
          <h2 className="text-3xl font-black tracking-tight text-[#201510]">
            Register
          </h2>
          <p className="mt-2 text-[#76665c]">
            Set up a smoother way to order your favorites.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-5 md:grid-cols-2">
            <Input
              id="name"
              label="Full Name"
              placeholder="Sarah Jenkins"
              icon={User}
              error={errors.name?.message}
              {...register("name")}
            />
            <Input
              id="phone"
              label="Phone"
              type="tel"
              placeholder="+1 555 0100"
              icon={Phone}
              error={errors.phone?.message}
              {...register("phone")}
            />
            <Input
              id="register-email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              icon={Mail}
              error={errors.email?.message}
              className="md:col-span-2"
              {...register("email")}
            />
            <Input
              id="register-password"
              label="Password"
              type="password"
              placeholder="Create password"
              icon={Lock}
              error={errors.password?.message}
              {...register("password")}
            />
            <Input
              id="confirm-password"
              label="Confirm Password"
              type="password"
              placeholder="Repeat password"
              icon={Lock}
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />

            <label className="flex items-start gap-3 text-sm font-bold leading-6 text-[#76665c] md:col-span-2">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-[#eadfd4] accent-[#e2361d]"
              />
              Send me seasonal drops, secret menu alerts, and delivery offers.
            </label>

            <Button type="submit" className="min-h-14 w-full md:col-span-2">
              {isSubmitting ? <Loader label="Creating account" /> : "Create Account"}
            </Button>

            {submitted && (
              <p className="rounded-2xl bg-[#fff8f3] px-4 py-3 text-sm font-bold text-[#5f5048] md:col-span-2">
                Welcome to PizzaVerse. Your profile details look complete.
              </p>
            )}
          </form>

          <p className="mt-7 text-center text-sm font-semibold text-[#76665c]">
            Already have an account?{" "}
            <Link to="/login" className="font-black text-[#e2361d]">
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Register;
