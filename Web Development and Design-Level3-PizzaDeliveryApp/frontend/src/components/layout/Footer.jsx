import { Link } from "react-router-dom";
import { Globe2, MessageCircle, Send } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "Our Story", path: "/about" },
    { label: "Delivery Stats", path: "/track-order" },
    { label: "Newsletter", path: "/" },
  ],
  Support: [
    { label: "Contact Us", path: "/contact" },
    { label: "Privacy Policy", path: "/" },
    { label: "Terms of Service", path: "/" },
  ],
};

const Footer = () => {
  return (
    <footer className="mt-auto bg-[#201510] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="text-2xl font-black tracking-tight">
            PizzaVerse
          </Link>
          <p className="mt-4 max-w-sm leading-7 text-[#d7c4b9]">
            The future of food, delivered to your doorstep. Precision crafted,
            soulfully baked.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#f5b9a1]">
              {title}
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-sm font-semibold text-[#d7c4b9] transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#f5b9a1]">
            Follow Us
          </h3>
          <div className="mt-5 flex gap-3">
            {[Globe2, MessageCircle, Send].map((Icon, index) => (
              <a
                key={index}
                href="/"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#d7c4b9] transition hover:-translate-y-0.5 hover:bg-[#e2361d] hover:text-white"
                aria-label="Social profile"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-[#a99285]">
        Copyright 2026 PizzaVerse Tech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
