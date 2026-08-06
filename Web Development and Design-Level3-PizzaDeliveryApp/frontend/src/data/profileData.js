import sarah from "../assets/images/testimonials/sarah.png";

export const profile = {
  name: "Sarah Jenkins",
  email: "sarah.jenkins@example.com",
  phone: "+1 (555) 014-8821",
  avatar: sarah,
  membership: "Gold Member",
  address: {
    label: "Home",
    street: "2848 Sourdough Avenue",
    city: "Brooklyn, NY 11211",
    note: "Leave at concierge desk if unavailable.",
  },
};

export const recentOrders = [
  {
    id: "PV-1048",
    date: "Aug 2, 2026",
    status: "Delivered",
    total: 45,
    items: "Truffle Umami, Garden Vegan",
  },
  {
    id: "PV-1032",
    date: "Jul 27, 2026",
    status: "Delivered",
    total: 24,
    items: "Truffle Umami",
  },
  {
    id: "PV-1019",
    date: "Jul 19, 2026",
    status: "Delivered",
    total: 39,
    items: "Spicy Diavola, Vegan Marinara",
  },
];
