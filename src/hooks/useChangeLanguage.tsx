import { ChangeLanguageContext } from '@/context/change-language'
import { useContext } from 'react'

export function useChangeLanguage() {
  return useContext(ChangeLanguageContext)
}
