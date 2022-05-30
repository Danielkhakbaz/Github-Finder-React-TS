import Navbar from "./navbar";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <div className="h-max min-h-screen bg-gray-100 flex flex-col justify-between">
        <Navbar />
        <main className="container mx-auto p-3">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
