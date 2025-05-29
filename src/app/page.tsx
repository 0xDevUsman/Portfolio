import About from "@/components/About";
import Para1 from "@/components/Para1";
import Works from "@/components/Works";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <Para1 />
        <About />
        <Works />
      </div>
    </>
  );
};

export default page;
