import { useSetAtom } from 'jotai'
import { themeAtom } from '../app/page'
import React from 'react'

const Users = () => {
  const setTheme = useSetAtom(themeAtom);
  return (
    <div>
      {setTheme}
    </div>
  )
}

export default Users