import Home from "./pages/Home/Home";
import Reservations from "./pages/Reservations/Reservations";
import { Route, Routes } from "react-router-dom";
import routeMap from "./utils/routeConfig";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={routeMap.get("home").path} element={<Home />} />
                <Route path={routeMap.get("reservations").path} element={<Reservations />} />
            </Routes>
        </div>
    )
}