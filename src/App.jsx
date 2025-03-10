import "./App.css"
import Home from "./pages/Home/Home";
import Reservations from "./pages/Reservations/Reservations";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layouts/Layout/Layout";
import Menu from "./pages/Menu/Menu";
import Orders from "./pages/Orders/Orders";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";

const App = () => {
    return (

        <div>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/reservations"} element={<Reservations />} />
                        <Route path={"/menu"} element={<Menu />} />
                        <Route path={"/orders"} element={<Orders />} />
                        <Route path={"/about"} element={<About />} />
                        <Route path={"/login"} element={<Login />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    )
}

export default App