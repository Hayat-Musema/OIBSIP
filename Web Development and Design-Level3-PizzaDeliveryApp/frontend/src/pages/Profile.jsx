import {
  CreditCard,
  LogOut,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  UserRound,
} from "lucide-react";
import Button from "../components/common/Button";
import { profile, recentOrders } from "../data/profileData";

const Profile = () => {
  return (
    <div className="bg-[#fff8f3]">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="rounded-[2.5rem] border border-[#f0e4d9] bg-white p-6 shadow-[0_28px_90px_rgba(32,21,16,0.08)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-28 w-28 rounded-[2rem] object-cover"
            />

            <div>
              <span className="inline-flex rounded-full bg-[#fff8f3] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#e2361d]">
                {profile.membership}
              </span>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-[#201510]">
                {profile.name}
              </h1>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-bold text-[#76665c]">
                <span className="inline-flex items-center gap-2">
                  <Mail size={16} />
                  {profile.email}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Phone size={16} />
                  {profile.phone}
                </span>
              </div>
            </div>

            <Button variant="secondary">
              <LogOut size={18} />
              Logout
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-8">
            <section className="rounded-[2rem] border border-[#f0e4d9] bg-white p-6 shadow-[0_20px_60px_rgba(32,21,16,0.06)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e2361d] text-white">
                  <MapPin size={22} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-[#201510]">
                    Saved Address
                  </h2>
                  <p className="text-sm font-bold text-[#a69388]">
                    {profile.address.label}
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-[1.5rem] bg-[#fff8f3] p-5 leading-7 text-[#76665c]">
                <p className="font-black text-[#201510]">{profile.address.street}</p>
                <p>{profile.address.city}</p>
                <p className="mt-3 text-sm">{profile.address.note}</p>
              </div>
            </section>

            <section className="rounded-[2rem] border border-[#f0e4d9] bg-white p-6 shadow-[0_20px_60px_rgba(32,21,16,0.06)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#201510] text-white">
                  <UserRound size={22} />
                </div>
                <h2 className="text-xl font-black text-[#201510]">
                  Account Details
                </h2>
              </div>
              <div className="mt-6 grid gap-3 text-sm font-bold text-[#76665c]">
                <div className="flex justify-between rounded-2xl bg-[#fff8f3] px-4 py-3">
                  <span>Default payment</span>
                  <span className="text-[#201510]">Visa ending 4421</span>
                </div>
                <div className="flex justify-between rounded-2xl bg-[#fff8f3] px-4 py-3">
                  <span>Delivery notes</span>
                  <span className="text-[#201510]">Enabled</span>
                </div>
              </div>
            </section>
          </div>

          <section className="rounded-[2rem] border border-[#f0e4d9] bg-white p-6 shadow-[0_20px_60px_rgba(32,21,16,0.06)]">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-[#201510]">
                  Recent Orders
                </h2>
                <p className="mt-1 text-[#76665c]">
                  A quick view of your latest PizzaVerse nights.
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff8f3] text-[#e2361d]">
                <PackageCheck size={23} />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {recentOrders.map((order) => (
                <article
                  key={order.id}
                  className="rounded-[1.5rem] border border-[#f0e4d9] bg-[#fffaf6] p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-black text-[#201510]">
                        {order.id}
                      </h3>
                      <p className="mt-1 text-sm font-bold text-[#a69388]">
                        {order.date}
                      </p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-[#e2361d]">
                      {order.status}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[#76665c]">
                    {order.items}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-[#eadfd4] pt-4">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#76665c]">
                      <CreditCard size={16} />
                      Paid
                    </span>
                    <span className="text-xl font-black text-[#e2361d]">
                      ${order.total}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Profile;
