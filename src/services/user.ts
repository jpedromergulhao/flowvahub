import { supabase } from "../lib/supabaseCliente";


interface UserData {
    id: string;
    name: string | null;
    email: string;
    points: number;
    dailyStreak: number;
    avatar: string;
}

export async function fetchUser(): Promise<UserData> {
    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
        throw new Error("User not authenticated");
    }

    const { data, error } = await supabase
        .from("profiles")
        .select("name, points, daily_streak")
        .eq("id", user.id)
        .maybeSingle();

    if (error) {
        throw error;
    }

    return {
        id: user.id,
        name:
            data?.name ??
            user.user_metadata?.full_name ??
            user.user_metadata?.name ??
            "",
        email: user.email!,
        points: data?.points ?? 0,
        dailyStreak: data?.daily_streak ?? 0,
        avatar:
            user.user_metadata?.avatar_url ||
            user.user_metadata?.picture ||
            undefined,
    };
}

export async function updateUserName(name: string) {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error("User not authenticated");
  }

  const { error } = await supabase
    .from("profiles")
    .update({ name })
    .eq("id", user.id);

  if (error) {
    throw error;
  }
}