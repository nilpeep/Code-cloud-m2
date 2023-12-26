import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const login = (info) => {
    setUser(info);
  };

  return (
    <LoginContext.Provider value={{ user, login }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
