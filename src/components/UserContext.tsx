import React, { createContext, useContext, useState, ReactNode } from "react";
import { FormDataType } from "./interface"; // Adjust the path based on your project structure

interface UserContextType {
  currentUser: FormDataType | null;
  users: FormDataType[];
  setUser: React.Dispatch<React.SetStateAction<FormDataType | null>>;
  setUsers: React.Dispatch<React.SetStateAction<FormDataType[]>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FormDataType | null>(null);
  const [users, setUsers] = useState<FormDataType[]>([]);

  const setUser: UserContextType["setUser"] = (user) => {
    setCurrentUser(user);
  };

  return (
    <UserContext.Provider value={{ currentUser, users, setUser, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
