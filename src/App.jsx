import Home from "./pages/Home/Home";
import Reservations from "./pages/Reservations/Reservations";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layouts/Layout/Layout";

const App = () => {
    return (

        <div>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/reservations"} element={<Reservations />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    )
}

export default App