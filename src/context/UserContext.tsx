import React, { createContext, useContext, useState, useEffect } from "react";

type UserRole = "student" | "teacher" | "parent" | null;

interface UserContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>(null);

  return (
    <UserContext.Provider value={{ role, setRole }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
  export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<UserRole>(() => {
    const savedRole = localStorage.getItem("userRole");
    return (savedRole as UserRole) || null;
  });

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
    if (newRole) localStorage.setItem("userRole", newRole);
    else localStorage.removeItem("userRole");
  };

  return (
    <UserContext.Provider value={{ role, setRole }}>
      {children}
    </UserContext.Provider>
  );
};
};
