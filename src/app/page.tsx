'use client'
import Image from "next/image";
import { atom, useAtom } from "jotai";

const countAtom = atom(0);
const themeAtom = atom('light');

export default function Home() {
  const [count, setCount] = useAtom(countAtom);
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <main className="space-y-4 flex flex-col justify-center items-center">
      <h1>hello world</h1>
      <button className="bg-blue-300 p-2" onClick={() => setCount(c => c + 1)}>Count - {count}</button>

      <div className="space-y-2">
        <p>{theme}</p>

        <button className="bg-blue-300 p-2 mr-3" onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}>Toggle to light theme.</button>
        {/* <button className="bg-blue-300 p-2 mr-3" onClick={() => setTheme('light')}>Toggle to light theme.</button> */}
        {/* <button className="bg-blue-300 p-2" onClick={() => setTheme('dark')}>Toggle to dark theme.</button> */}
      </div>
    </main>
  );
}
