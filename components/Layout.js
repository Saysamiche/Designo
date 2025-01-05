import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  // , hideFooterPart
  // hidePart={hideFooterPart}
  
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer  />
    </div>
  );
};

export default Layout;
