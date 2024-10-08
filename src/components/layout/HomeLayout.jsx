import React from "react";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";
import SEO from "../seo/seo";

const HomeLayout = ({ children, title, description, type }) => {
  return (
    <div className="flex flex-col min-h-[100vh] font-Coolvetica">
      <SEO title={title} description={description} type={type} />
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
