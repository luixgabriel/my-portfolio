'use client'
import { ChangeLanguageProvider } from '@/context/change-language'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

interface DefaultProvidersProps {
  children: ReactNode
}

export function DefaultProviders({ children }: DefaultProvidersProps) {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <ChangeLanguageProvider>{children}</ChangeLanguageProvider>
    </QueryClientProvider>
  )
}
