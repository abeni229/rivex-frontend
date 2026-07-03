import { createContext, useContext, useState } from 'react'
import translations from './translations.js'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [langue, setLangue] = useState('FR')

  const t = (key) => translations[langue][key] || key

  return (
    <LanguageContext.Provider value={{ langue, setLangue, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}