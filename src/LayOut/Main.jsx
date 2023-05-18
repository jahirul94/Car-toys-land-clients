import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";


const Main = () => {
  return (
    <div className="bg-slate-200">
      <Header></Header>
      <div className="mx-10">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;