import { useState } from "react";
import { Navbar } from "./components/Navbar";
import React from "react";
import { Inform } from "./components/inform";
import { Footer } from "./components/footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Inform />
      <Footer />
    </div>
  );
}
export default Home;
