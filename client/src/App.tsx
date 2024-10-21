import Search from "./pages/Search/Search";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import News from "./pages/News/News";
import Doctors from "./pages/Doctors/Doctors";
import Hospitals from "./pages/Hospitals/Hospitals";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Authenticate from "./components/Authenticate/Authenticate";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route
              path="doctors"
              element={
                <Authenticate>
                  <Doctors />
                </Authenticate>
              }
            />
            <Route
              path="hospitals"
              element={
                <Authenticate>
                  <Hospitals />
                </Authenticate>
              }
            />
            <Route path="news" element={<News />} />
            <Route path="search" element={<Search />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
