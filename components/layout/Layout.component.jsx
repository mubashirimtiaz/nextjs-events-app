import Footer from "../footer/Footer.component";
import Navbar from "../navbar/Navbar.component";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="py-10">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
