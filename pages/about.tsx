import React from "react";

const About = () => {
  return (
    <>
      <div className="h-[86.5vh] flex  justify-center items-center flex-col gap-5 text-3xl">
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
          Welcome to &nbsp;
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-950 relative inline-block  ">
            <span className="relative text-white mx-4 ">
              We enngs Technlogy{" "}
            </span>
          </span>
          &nbsp; Embrace your Knowlegde
        </blockquote>
      </div>
    </>
  );
};

export default About;
