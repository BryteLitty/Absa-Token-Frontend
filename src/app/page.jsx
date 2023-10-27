"use client"

import Image from 'next/image';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { MetaMaskProvider } from "metamask-react";

import SideNav from '@/components/SideNav';
import MainPage from '@/components/MainPage';

export default function Home() {
  
  return (
    <main className='flex justify-between items-start'>
      <MetaMaskProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <SideNav />
      <MainPage />
    </MetaMaskProvider>
     
    </main>
  )
}
