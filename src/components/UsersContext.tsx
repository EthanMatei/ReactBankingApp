/*import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the user type
type User = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
  balance: number;
};

// Define the context type
type UsersContextType = {
  userss: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const UsersContext = createContext<UsersContextType | undefined>(undefined);

export const UsersProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userss, setUsers] = useState<User[]>([]);

  return (
    <UsersContext.Provider value={{ userss, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useUsers = (): UsersContextType => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsers must be used within a UsersProvider");
  }
  return context;
};
*/
