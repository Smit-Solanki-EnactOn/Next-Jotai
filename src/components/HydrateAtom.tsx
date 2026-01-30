'use client'
import React from 'react'
import { useHydrateAtoms } from 'jotai/utils'
import { userAtom } from '@/atoms'

const HydrateAtom = ({ children, user } : { children: React.ReactNode; user: any }) => {

  useHydrateAtoms([[userAtom, user]])
  return (
    <>{children}</>
  )
}

export default HydrateAtom