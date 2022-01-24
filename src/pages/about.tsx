import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

const About = () => {
  return (
    <>
      <strong className="text-7xl tracking-wide">Github Finder</strong>
      <p className="text-xl py-5">
        A React.js app to search for Github profiles and being able to see the
        profile deatils. This is one of my projects which you can also give a
        star to this{" "}
        <a
          className="link link-neutral"
          href="https://github.com/Danielkhakbaz/Github-Finder-React-TS">
          Project on Github
        </a>{" "}
        if you want to :)
      </p>
      <div>
        <p className="text-base">My Socials:</p>
        <div className="flex mt-2">
          <a
            className="link-neutral text-4xl mx-2"
            href="https://www.instagram.com/danielkhakbaz"
            target="_blank"
            rel="noreferrer">
            <AiFillInstagram />
          </a>
          <a
            className="link-neutral text-4xl mx-2"
            href="https://www.twitter.com/danielkhakbaz"
            target="_blank"
            rel="noreferrer">
            <AiOutlineTwitter />
          </a>
          <a
            className="link-neutral text-4xl mx-2"
            href="https://www.linkedin.com/in/danielkhakbaz"
            target="_blank"
            rel="noreferrer">
            <AiFillLinkedin />
          </a>
          <a
            className="link-neutral text-4xl mx-2"
            href="https://www.github.com/danielkhakbaz"
            target="_blank"
            rel="noreferrer">
            <AiFillGithub />
          </a>
          <a
            className="link-neutral text-4xl mx-2"
            href="mailto:danialkhakbaz.dk@gmail.com"
            target="_blank"
            rel="noreferrer">
            <AiFillMail />
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
