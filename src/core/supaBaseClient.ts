import { createClient } from "@supabase/supabase-js";

const baseUrl = import.meta.env.VITE_DB_BASE_URL;
const anonKey = import.meta.env.VITE_DB_ANON_KEY;

if (!baseUrl || !anonKey) {
  console.error("Environment variables are not set correctly");
}

export const supabase = createClient(baseUrl, anonKey);
