'use client';

import { signOut, useSession } from 'next-auth/react';
import NewChat from './NewChat';

function SideBar() {
  const { data: session } = useSession();

  return (
    <div className=" p-2 flex flex-col h-screen ">
      <div className="flex-1">
        <div>
          {/* NewChat */}
          <NewChat />
          <div>{/* ModelSelection */}</div>
          {/* map throgh the ChatRows */}
        </div>
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt={session.user?.name!}
          className="h-12 w-12 hover:opacity-50 rounded-full cursor-pointer mx-auto mb-2"
        />
      )}
    </div>
  );
}

export default SideBar;
