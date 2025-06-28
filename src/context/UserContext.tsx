import React, { createContext, useContext, useState, useEffect } from "react";

type UserRole = "student" | "teacher" | "parent" | null;

interface UserContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<UserRole>(() => {
    // Load initial role from localStorage
    const savedRole = localStorage.getItem("userRole");
    return (savedRole as UserRole) || null;
  });

  // Update role and sync to localStorage
  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
    if (newRole) {
      localStorage.setItem("userRole", newRole);
    } else {
      localStorage.removeItem("userRole");
    }
  };

  return (
    <UserContext.Provider value={{ role, setRole }}>
      {children}
    </UserContext.Provider>
  );
};
