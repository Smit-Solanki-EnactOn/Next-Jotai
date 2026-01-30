
import { atom } from "jotai";
import { todo } from "node:test";

export const countAtom = atom(0);
export const themeAtom = atom('light');

// here this is called a derived atom, because its value is derived from another atom's value.
export const isDarkMode = atom((get) => get(themeAtom) === 'dark')
export const userAtom = atom(null);    // initial no user

export const fetchUserAtom = atom(
  (get) => get(userAtom),     //read
  async (_get, set, userId) => {
    try {

      const res = await fetch(`/api/users/${userId}`)
      const user = await res.json()
      set(userAtom, user)
    } catch (error) {
      console.log(error)
      set(userAtom, null)
    }
  }
)


// To do
export const todosAtom = atom<{
  id: string | number; text: string; completed: boolean;
}[]>([])

export const activeTodosAtom = atom((get) => {
  const todos = get(todosAtom)
  return todos.filter(todo => !todo.completed).length
})