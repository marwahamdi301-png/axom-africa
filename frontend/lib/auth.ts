import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Wallet",
      credentials: {
        wallet: { label: "Wallet Address", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.wallet) return null;
        const email = `${credentials.wallet.toLowerCase()}@axom.africa`;
        const user = await prisma.user.upsert({
          where: { email },
          update: { walletAddress: credentials.wallet },
          create: {
            email,
            name: "AXOM User",
            walletAddress: credentials.wallet,
          },
        });
        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  pages: { signIn: "/auth/signin" },
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, token }) {
      if (session.user) session.user.email = token.email as string;
      return session;
    },
  },
};
