'use client'
import { styled } from 'styled-components'
import { HomePage } from './components/home'
import { ChangeLanguageProvider } from '@/context/change-language'
import { AboutMe } from './components/about-me'
import { Skills } from './components/skills'
import { Repositories } from './components/repositories'
import { UseRepositories } from '@/hooks/useRepositories'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export default function Home() {
  const { reposFiltered } = UseRepositories()
  console.log(reposFiltered)
  const client = new QueryClient()

  return (
    <ChangeLanguageProvider>
      <QueryClientProvider client={client}>
        <ContainerMain>
          <HomePage />
          <AboutMe />
          <Skills />
          <Repositories />
        </ContainerMain>
      </QueryClientProvider>
    </ChangeLanguageProvider>
  )
}
