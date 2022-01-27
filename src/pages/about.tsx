import { useEffect } from "react";
import { datas } from "../services/api/aboutData";

const About = () => {
  useEffect(() => {
    document.title = "About | Github Finder";
  });

  return (
    <>
      <strong className="text-7xl tracking-wide">Github Finder</strong>
      <p className="text-xl py-5">
        A React.js app to search for Github profiles and being able to see the
        profile deatils. This is one of my projects which you can also give a
        star to this{" "}
        <a
          className="link link-neutral"
          href="https://github.com/Danielkhakbaz/Github-Finder-React-TS"
          target="_blank"
          rel="noreferrer">
          Project on Github
        </a>{" "}
        if you want to :)
      </p>
      <div>
        <p className="text-base">My Socials:</p>
        <div className="flex mt-2">
          {datas.map((data) => (
            <a
              className="link-neutral text-4xl mx-2"
              href={data.href}
              key={data.href}
              target="_blank"
              rel="noreferrer">
              {data.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
