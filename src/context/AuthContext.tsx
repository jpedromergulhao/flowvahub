import type { Session, User } from "@supabase/supabase-js";
import { useState, createContext, type ReactNode, useEffect, useContext } from "react";
import { supabase } from "../lib/supabaseCliente";

export interface AuthContextType {
    user: User | null;
    session: Session | null;
    loading: boolean
};

interface AuthProviderProps {
    children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setSession(data.session);
            setUser(data.session?.user ?? null);
            setLoading(false);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            session,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
