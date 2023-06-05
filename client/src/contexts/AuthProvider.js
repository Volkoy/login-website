import { createContext, useState, useEffect } from "react";
import api from "../services/api";
import Cookies from "js-cookie";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getProfileInfo = async () => {
    try {
      const response = await api.post(
        "/profile",
        {},
        {
          withCredentials: true,
        }
      );
      if (response.data.ok) {
        return response.data.email;
      }
    } catch (err) {
      console.log(err);
    }
    return null;
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      getProfileInfo().then((email) => {
        setUser(email);
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
