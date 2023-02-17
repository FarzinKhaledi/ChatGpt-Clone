import { getServerSession } from 'next-auth';
import { SessionProvider } from '../components/SessionProvider';
import SideBar from '../components/SideBar';
import Login from '../components/Login';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import '../styles/globals.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex ">
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>
              <div className="flex-1 bg-[#343541]"> {children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
