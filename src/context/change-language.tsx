import { createContext, useState, ReactNode } from 'react'

interface IChangeLanguageContext {
  isChanged: boolean
  handleChange: () => void
}

interface ChangeLanguageContextProps {
  children: ReactNode
}

export const ChangeLanguageContext = createContext({} as IChangeLanguageContext)

export function ChangeLanguageProvider({
  children,
}: ChangeLanguageContextProps) {
  const [isChanged, setIsChanged] = useState<boolean>(false)
  function handleChange() {
    setIsChanged((prev) => !prev)
  }
  return (
    <ChangeLanguageContext.Provider value={{ isChanged, handleChange }}>
      {children}
    </ChangeLanguageContext.Provider>
  )
}
