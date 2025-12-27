import { supabase } from "../lib/supabaseCliente";

export async function signInWithGoogle(redirectTo?: string) {
  return supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: redirectTo ?? `${window.location.origin}/rewards`,
    },
  });
}