import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRouter = () => {
  const [login, setLogin] = useState(false);
  return <>{login ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRouter;
