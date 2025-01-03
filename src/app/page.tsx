// src/app/page.tsx
'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LandingPage() {
  const router = useRouter();

  const handleAppleHealthClick = () => {
    router.push('/health-metrics');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-700 to-white-100 p-4">
      <div className="text-center">
        
        <div 
          onClick={handleAppleHealthClick}
          className="cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <Image
            src="/health-metrics/icon.svg"  // You'll need to add this icon to public folder
            alt="Apple Health"
            width={200}
            height={200}
          />
          <p className="text-xl text-white-700 hover:text-gray-600 mt-2">
            Apple Health
          </p>
        </div>
      </div>
    </div>
  );
}