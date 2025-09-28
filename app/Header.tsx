'use client';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">ZenZv</h1>
      <button onClick={() => setOpen(!open)} className="md:hidden">
        <Menu size={28} />
      </button>
      <nav
        className={`fixed top-0 right-0 h-full w-60 bg-indigo-700 transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        } transition-transform p-6 space-y-4 z-50`}
      >
        <a href="https://saweria.co/username" target="_blank" className="block hover:underline">Saweria</a>
        <a href="https://wa.me/6283840095883" target="_blank" className="block hover:underline">WhatsApp</a>
        <a href="https://t.me/ZenmaOne" target="_blank" className="block hover:underline">Telegram</a>
      </nav>
    </header>
  );
}
