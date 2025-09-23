'use client'
import React, { createContext, useContext, useState } from 'react'
const AppContext = createContext({
  token: '',
  setToken: (token: string) => {}
})

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

export default function AppProvider({
  children,
  initialToken = ''
}: {
  children: React.ReactNode
  initialToken?: string
}) {
  const [token, setToken] = useState(initialToken)
  return <AppContext.Provider value={{ token, setToken }}>{children}</AppContext.Provider>
}
