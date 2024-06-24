// RoleContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for roles
type Role = "admin" | "inventory" | "countlead" | "counter"; // Add other roles as needed

// Define the context type
interface RoleContextType {
  role: Role;
  setRole: (role: Role) => void;
}

// Create the context
const RoleContext = createContext<RoleContextType | undefined>(undefined);

// Create a provider component
export const RoleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [role, setRole] = useState<Role>("admin"); // Set a default role

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

// Custom hook to use the role context
export const useRole = (): RoleContextType => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
};