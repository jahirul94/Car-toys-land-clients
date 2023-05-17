import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="bg-slate-200 px-12">
             <Header></Header>
               <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Main;