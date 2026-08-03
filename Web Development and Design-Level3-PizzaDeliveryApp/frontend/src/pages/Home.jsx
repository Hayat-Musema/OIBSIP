import Hero from "../components/home/Hero";
import CatagoryPills from "../components/home/CatagoryPills";
import TopSellers from "../components/home/TopSellers";
import Stats from "../components/home/Stats";
import Journey from "../components/home/Journey";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";


const Home = () => {
  return (
    <>
      <Hero />
      <CatagoryPills/>
      <TopSellers/>
      <Stats/>
      <Journey/>
      <Testimonials/>
      <Newsletter/>
    </>
  );
};

export default Home;