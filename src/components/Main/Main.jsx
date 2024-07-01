import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Banner from "../Banner";
import NewArrivals from "../NewArrivals";

const Main = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <NewArrivals />
      <Footer />
    </>
  );
};

export default Main;
