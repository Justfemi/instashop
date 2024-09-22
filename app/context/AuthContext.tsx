"use client"

import React, { createContext, useEffect, useState, ReactNode } from "react"
import { getAuth, onAuthStateChanged, User } from "firebase/auth"
import app from "../../firebase";

interface AuthContextType {
  user: User | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider:React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
    return () => unsubscribe()
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}