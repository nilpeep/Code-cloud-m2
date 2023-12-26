import { useState, useContext } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { LoginContext } from "../context/LoginProvider";

const PrivateRouter = () => {
  const { user } = useContext(LoginContext);

  const { pathname } = useLocation();
  return (
    <>
      {user.email && user.password ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: pathname }} />
      )}
    </>
  );
};

export default PrivateRouter;
