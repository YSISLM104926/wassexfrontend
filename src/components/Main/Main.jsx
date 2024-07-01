import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Banner from "../Banner";
import NewArrivals from "../NewArrivals";
import Feature from "../Feature";
import CollectionTwo from "../CollectionTwo";

const Main = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <NewArrivals />
      <CollectionTwo />
      <Feature />
      <Footer />
    </>
  );
};

export default Main;
