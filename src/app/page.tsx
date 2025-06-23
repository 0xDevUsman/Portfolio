import About from "@/components/About";
import Education from "@/components/Education";
import Para1 from "@/components/Para1";
import Skills from "@/components/Skills";
import Touch from "@/components/Touch";
import Works from "@/components/Works";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <Para1 />
        <About />
        <Skills />
        <Works />
        <Education />
        <Touch />
      </div>
    </>
  );
};

export default page;
