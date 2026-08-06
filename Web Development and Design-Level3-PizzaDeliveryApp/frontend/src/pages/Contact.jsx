import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import PageHeader from "../components/common/PageHeader";

const Contact = () => {
  return (
    <div className="bg-[#fff8f3]">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
        <div>
          <PageHeader
            eyebrow="Contact"
            title="Need help with an order?"
            subtitle="Reach the PizzaVerse team for delivery questions, catering requests, or feedback on your latest slice."
          />

          <div className="mt-8 grid gap-4">
            {[
              { icon: Phone, label: "Phone", value: "+1 (555) 014-8821" },
              { icon: Mail, label: "Email", value: "hello@pizzaverse.test" },
              { icon: MapPin, label: "Kitchen", value: "2848 Sourdough Avenue" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-[#f0e4d9] bg-white p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff8f3] text-[#e2361d]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#a69388]">
                      {item.label}
                    </p>
                    <p className="mt-1 font-black text-[#201510]">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <form
          onSubmit={(event) => event.preventDefault()}
          className="rounded-[2.5rem] border border-[#f0e4d9] bg-white p-6 shadow-[0_28px_90px_rgba(32,21,16,0.08)] sm:p-8"
        >
          <h2 className="text-3xl font-black tracking-tight text-[#201510]">
            Send a message
          </h2>
          <p className="mt-2 text-[#76665c]">
            Tell us what happened and the team will help.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Input id="contact-name" label="Name" placeholder="Your name" />
            <Input id="contact-email" label="Email" type="email" placeholder="you@example.com" />
            <div className="md:col-span-2">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-black text-[#201510]"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows="6"
                placeholder="Tell us how we can help."
                className="w-full resize-none rounded-[1.5rem] border border-[#eadfd4] bg-[#fffaf6] px-5 py-4 text-sm font-semibold text-[#201510] outline-none transition placeholder:text-[#a69388] focus:border-[#e2361d] focus:ring-4 focus:ring-[#e2361d]/10"
              />
            </div>
          </div>

          <Button type="submit" className="mt-6 min-h-14 w-full">
            <MessageCircle size={18} />
            Send Message
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
