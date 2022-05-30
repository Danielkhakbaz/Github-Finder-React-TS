import { useEffect } from "react";
import { socialMedias } from "../services/author-profiles/author-profiles";

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About | Github Finder";
  });

  return (
    <>
      <strong className="text-4xl tracking-wide lg:text-6xl">
        Github Finder
      </strong>
      <p className="text-base py-5 lg:text-lg">
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
        <p className="text-sm lg:text-base">My Socials:</p>
        <div className="flex mt-2">
          {socialMedias.map((data) => (
            <a
              className="link-neutral text-2xl mx-2 lg:text-3xl"
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
