'use client'
import React, {useState} from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/lib/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Home() {

  const { user } = useAuth();
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  if (user) {
    router.push('/dashboard');
  } 

  return (
    <main className='w-full h-full px-4 py-8 lg:px-12 lg:py-20 flex flex-col justify-center'>
      <section className='flex flex-col justify-center items-center my-auto'>
        <p className='text-center pb-8'> 
          Welcome on your new Spotify Dashboard ! <br /> 
          Get statistics about your favorite artists, tracks and playlists.
        </p>
        <button className=' w-36 py-3 mb-8 rounded-3xl bg-green-700 hover:bg-green-800 text-white'>
          <Link href={'api/auth/login'}>LOGIN</Link>
        </button>
        <small className='text-center text-white'>
          This app is not affiliated with Spotify. It uses the Spotify API to get your data.
        </small>
        <p className='text-red-400 text-center pt-8'>"This app is in dev mode. Users must be allowed to access the dashboard.</p>
      </section>
    </main>
  );
}
