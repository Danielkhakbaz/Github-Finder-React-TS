const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer footer-center bg-gray-700 p-4">
        <p className="text-primary-content flex">
          Copyright &copy; {year} - All rights reserved by
          <a
            className="link-hover font-bold"
            href="https://www.instagram.com/danielkhakbaz"
            target="_blank"
            rel="noreferrer">
            Danial Khakbaz
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
