'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
function Login() {
  return (
    <div className="h-screen flex flex-col items-center justify-center  text-center bg-blue-800">
      <Image
        src="https://www.updateordie.com/wp-content/uploads/2023/01/chatgpt_assistente.jpg"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        onClick={() => signIn('google')}
        className="text-white font-bold text-2xl animate-pulse"
      >
        Sing In To Use ChatGpt
      </button>
    </div>
  );
}

export default Login;
