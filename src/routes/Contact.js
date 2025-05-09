import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/FooterSection";
import HeroImage2 from "../components/Projects/HeroImage2";
import Form from "../components/Contact/Form";
const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImage2 heading="CONTACT ME." text="Let's have a chat" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
