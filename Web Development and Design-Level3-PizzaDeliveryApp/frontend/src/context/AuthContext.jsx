import { createContext, useState } from "react";
import {
  login as loginUser,
  register as registerUser,
} from "../services/authService";

const AuthContext = createContext(null);

const getStoredUser = () => {
  const storedUser = localStorage.getItem("pizzaverse_user");

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch (error) {
    console.error("Failed to parse stored user:", error);
    localStorage.removeItem("pizzaverse_user");
    return null;
  }
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser);

  const register = async (userData) => {
    const data = await registerUser(userData);

    localStorage.setItem("pizzaverse_token", data.token);
    localStorage.setItem("pizzaverse_user", JSON.stringify(data));

    setUser(data);

    return data;
  };

  const login = async (userData) => {
    const data = await loginUser(userData);

    localStorage.setItem("pizzaverse_token", data.token);
    localStorage.setItem("pizzaverse_user", JSON.stringify(data));

    setUser(data);

    return data;
  };

  const logout = () => {
    localStorage.removeItem("pizzaverse_token");
    localStorage.removeItem("pizzaverse_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;