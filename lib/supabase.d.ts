declare module '@/lib/supabase' {
  interface User {
    id: string;
    email?: string;
  }

  interface AuthResponse {
    data?: { user: User | null };
    error?: { message: string };
  }

  export function signIn(email: string, password: string): Promise<AuthResponse>;
  export function signOut(): Promise<void>;
  export function getCurrentUser(): Promise<User | null>;
}