import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { auth } from "../firebase/server";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {},
      authorize: async (credentials: any, req) => {
        const { idToken } = credentials;
        if (idToken) {
          try {
            const decoded = await auth.verifyIdToken(idToken);
            const user = {
              ...decoded,
              id: decoded.uid,
              emailVerified: decoded.email_verified,
              uid: decoded.uid,
            };
            return { ...user };
          } catch (err) {
            console.error(err);
          }
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 3600,
  },
  callbacks: {
    async jwt({ token, user, maxAge }: any) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user.emailVerified = token.emailVerified;
      session.user.uid = token.uid;
      return session;
    },
  },
};
