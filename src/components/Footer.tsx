import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full px-4 sm:px-6 text-center text-xs sm:text-sm flex flex-col items-center mb-10 font-normal">
        <h1 className="mb-1">
          Designed and Developed by{" "}
          <span className="text-[#3CCF91] font-bold">Usman Ali</span>.
        </h1>
        <p>
          Built with <span className="text-[#3CCF91] font-bold">Next.js</span>.{" "}
          Hosted on <span className="text-[#3CCF91] font-bold">Vercel</span>.
        </p>
      </div>
    </>
  );
};

export default Footer;
