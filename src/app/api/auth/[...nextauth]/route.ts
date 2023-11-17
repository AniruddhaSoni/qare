import { ConnectMongoDB, DisconnectMongoDB } from "@/lib/mongoose";
import { Users } from "@/models/userSchema";
import { randomUUID } from "crypto";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      await ConnectMongoDB();
      await Users.findOne({ email: user.email }).then(async (data) => {
        if (data == null) {
          await Users.create({
            uid: randomUUID().replaceAll("-", ""),
            email: user.email,
            image: user.image,
            name: user.name,
            qrs: [],
          });
        }
      });
      await DisconnectMongoDB();
      return true;
    },
    async session({ session }) {
      await ConnectMongoDB();
      await Users.findOne({ email: session.user.email }).then(async (data) => {
        session.user.uid = data.uid;
        session.user.id = data.id;
      });

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
