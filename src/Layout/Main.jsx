import { Outlet } from "react-router-dom";
import PageNav from "../Pages/Shared/PageNav/PageNav";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <>
            <PageNav />
            <Outlet />

            <Footer />



        </>
    );
};

export default Main;