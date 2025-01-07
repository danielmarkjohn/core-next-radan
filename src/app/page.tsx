// src/app/page.tsx
'use client'

import Dashboard from '@/components/Dashboard/Dashboard';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900">
      <Dashboard  />
    </div>
  );
}