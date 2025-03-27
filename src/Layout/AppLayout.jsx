import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import WhatsAppIcon from "../Components/WhatsApp";
import AOS from "aos";
import "aos/dist/aos.css";
const AppLayout = () => {
  AOS.init({
    once: true,
    duration: 1000,
    offset: -10,
  });
  return (
    <div>
      <Header />
      <WhatsAppIcon />
      <ScrollToTop />
      <div className="bg-white dark:bg-darkbackground">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
