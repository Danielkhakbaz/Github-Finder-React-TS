const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer footer-center bg-gray-700 p-4">
        <p className="footer-title text-white font-extralight flex m-0">
          Copyright &copy; {year} - All rights reserved by Danial Khakbaz
        </p>
      </footer>
    </>
  );
};

export default Footer;
