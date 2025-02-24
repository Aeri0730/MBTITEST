import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import useAuthStore from "../zustand/authsStore";
import Results from "../pages/Results";

const Router = () => {
  const PrivateRoute = ({ element: Element, ...rest }) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
  };

  const PublicRoute = ({ element: Element, ...rest }) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/" />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<PublicRoute element={Signup} />} />
          <Route path="/login" element={<PublicRoute element={Login} />} />
          <Route path="/profile" element={<PrivateRoute element={Profile} />} />
          <Route path="/test" element={<PrivateRoute element={TestPage} />} />
          <Route
            path="/test/:id"
            element={<PrivateRoute element={TestPage} />}
          />
          <Route path="/results" element={<PrivateRoute element={Results} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
