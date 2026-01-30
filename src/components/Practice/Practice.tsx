'use client'
import React from 'react'
import { useAtom } from "jotai";
import { useEffect } from "react";
import { countAtom, themeAtom, isDarkMode, fetchUserAtom } from "@/atoms";

const Practice = () => {

const [count, setCount] = useAtom(countAtom);
const [theme, setTheme] = useAtom(themeAtom);

const [isDark, setIsDark] = useAtom(isDarkMode)
const [user, fetchUser] = useAtom(fetchUserAtom)
useEffect(() => {
  fetchUser('13')
}, [])

console.log(user)


  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold">Jotai</h1>

      {/* Topic 1: Basics of Jotai */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Topic 1: Basics of Jotai</h2>
        <button className="bg-blue-300 p-2" onClick={() => setCount(c => c + 1)}>Count - {count}</button>

        <div className="flex gap-2">
          <button className="bg-blue-300 p-2 mr-3" onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}>Toggle to light theme.</button>
          {/* <button className="bg-blue-300 p-2 mr-3" onClick={() => setTheme('light')}>Toggle to light theme.</button> */}
          {/* <button className="bg-blue-300 p-2" onClick={() => setTheme('dark')}>Toggle to dark theme.</button> */}

          <p>{theme}</p>
        </div>
      </div>

      {/* Topic 2: Advanced Patterns & Next.js Integration */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Topic 2: Advanced Patterns & Next.js Integration</h2>

        {user && (
          <div>
            <p>User ID: {user.id}</p>
            <p>User Name: {user.name}</p>
          </div>
        )}

        <div className="flex gap-2">

        </div>
      </div>
    </div>
  )
}

export default Practice