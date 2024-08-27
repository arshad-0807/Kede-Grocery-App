import HeaderSec from "../components/HeaderSec";
import Footer from "../components/Footer";

const ThirdLayout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ThirdLayout;
