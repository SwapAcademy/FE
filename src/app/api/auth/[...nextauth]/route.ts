import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface User {
  token: string;
  email: string;
  fullname: string;
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(`https://be-swap-academy.nioke-studio.my.id/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await res.json();

        if (res.ok && user) {
          console.log("User:", user); // Tambahkan log untuk memeriksa respons
          return user; // Kembalikan user jika autentikasi berhasil
        } else {
          throw new Error(user.message || "Login failed"); // Kembalikan error jika gagal
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: { token: User; user: User }) {
      if (user) {
        token.user = user;
        console.log("User token from API:", user.token);

        // Simpan token ke localStorage setelah autentikasi berhasil
        if (typeof window !== "undefined") {
          console.log("User token:", user.token); // Log token untuk melihat apakah memang ada
          localStorage.setItem("token", user.token); // Pastikan user.token benar ada
        }
      }
      return token;
    },
    async session({ session, token }: { session: any; token: User }) {
      session.user = token.user;
      console.log("Session token:", session.user.token);

      // Ambil token dari localStorage setelah autentikasi berhasil
      if (typeof window !== "undefined") {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
          session.user.token = storedToken;
        }
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
