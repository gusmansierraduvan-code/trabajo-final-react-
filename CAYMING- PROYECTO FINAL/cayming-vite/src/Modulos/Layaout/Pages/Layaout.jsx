import Navbar from "../Componentes/Navbar";
import Footer from "../Componentes/Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return(
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />

        </div>
    )
}

export default Layout;