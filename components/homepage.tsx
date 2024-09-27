"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const HomePage = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div>
          {session.user?.image && (
            <img
              src={session.user.image}
              alt={session.user.name || "User"}
            />
          )}
          <h1>Welcome back, {session.user?.name}</h1>
          <p>{session.user?.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <div>
          <h1>You're not logged in</h1>
          <div>
            <button onClick={() => signIn("google")}>
              Sign in with Google
            </button>
            <button onClick={() => signIn("github")}>
              Sign in with GitHub
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
