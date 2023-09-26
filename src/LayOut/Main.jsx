import { Outlet, useLocation } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import Banner from "../pages/Home/Banner/Banner";


const Main = () => {
  const location = useLocation();

  return (
    <div className="bg-slate-200">
      <Header></Header>
      {location.pathname === "/" && <Banner></Banner>}
      <div className="w-full md:w-11/12 md:mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;