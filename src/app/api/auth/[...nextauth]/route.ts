import { ConnectMongoDB } from "@/lib/mongoose";
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
      Users.findOne({ email: user.email }).then((data) => {
        if (data == null) {
          Users.create({
            uid: randomUUID(),
            email: user.email,
            image: user.image,
            name: user.name,
            qrs: [],
          });
        }
      });

      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
