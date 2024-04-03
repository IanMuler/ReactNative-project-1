import React, { useState, createContext } from "react";
import { UserDetails } from "../utils/userDB";

interface IUserValues {
  user: UserDetails | null;
  login: (userData: UserDetails) => void;
  logout: () => void;
}

export const UserContext = createContext<IUserValues>({
  user: null,
  login: () => {},
  logout: () => {},
});

export function UserProvider({ children }: { children: React.ReactElement }) {
  const [user, setUser] = useState<UserDetails | null>(null);

  const login = (userData: UserDetails) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const value: IUserValues = {
    user,
    login,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
