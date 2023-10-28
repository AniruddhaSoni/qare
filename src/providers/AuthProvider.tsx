"use client";

import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import type { Session } from "next-auth";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
