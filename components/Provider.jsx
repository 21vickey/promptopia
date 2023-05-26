'use client';

import { SessionProvider, useSession } from "next-auth/react";

const Provider = ({children,session}) => {
  

  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider;