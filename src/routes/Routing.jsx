import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

import Home from "../pages/Home";
import Search from "../pages/Search";

const Routing = () => {
    return(
        <Router>
            <Routes>
                <Route path="/inicio" element={<Home/>}/>
                <Route path="/" element={<Search/>}/>
            </Routes>
        </Router>
    )
}
export default Routing