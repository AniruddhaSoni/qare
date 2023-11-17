import "next-auth";

declare module "next-auth" {
  interface User {
    uid: string | number;
  }

  interface Session {
    user: User;
  }
}
