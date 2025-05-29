import About from "@/components/About";
import Para1 from "@/components/Para1";
import Touch from "@/components/Touch";
import Works from "@/components/Works";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <Para1 />
        <About />
        <Works />
        <Touch />
      </div>
    </>
  );
};

export default page;
