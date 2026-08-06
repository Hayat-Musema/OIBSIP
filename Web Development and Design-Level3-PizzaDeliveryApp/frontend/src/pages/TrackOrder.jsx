import { CheckCircle2, ChefHat, Home, MapPin } from "lucide-react";
import PageHeader from "../components/common/PageHeader";

const steps = [
  { label: "Order confirmed", detail: "PV-1048 received", icon: CheckCircle2 },
  { label: "In preparation", detail: "Smart oven slot assigned", icon: ChefHat },
  { label: "Out for delivery", detail: "Courier is 8 minutes away", icon: MapPin },
  { label: "Delivered", detail: "Estimated handoff soon", icon: Home },
];

const TrackOrder = () => {
  return (
    <div className="bg-[#fff8f3]">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <PageHeader
          eyebrow="Track Order"
          title="Follow your pizza from oven to doorstep."
          subtitle="A polished delivery timeline for your next hot arrival."
        />

        <div className="mt-10 rounded-[2.5rem] border border-[#f0e4d9] bg-white p-6 shadow-[0_28px_90px_rgba(32,21,16,0.08)] sm:p-8">
          <div className="grid gap-5 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index < 3;

              return (
                <article
                  key={step.label}
                  className={`rounded-[2rem] border p-6 ${
                    isActive
                      ? "border-[#ffd8c7] bg-[#fff8f3]"
                      : "border-[#f0e4d9] bg-white"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      isActive ? "bg-[#e2361d] text-white" : "bg-[#fff8f3] text-[#a69388]"
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                  <h2 className="mt-6 text-xl font-black text-[#201510]">
                    {step.label}
                  </h2>
                  <p className="mt-2 text-sm font-bold text-[#76665c]">
                    {step.detail}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackOrder;
