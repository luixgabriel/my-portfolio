'use client'
import { styled } from 'styled-components'
import { HomePage } from './components/home'
import { ChangeLanguageProvider } from '@/context/change-language'
import { AboutMe } from './components/about-me'
import { Skills } from './components/skills'
import { Repositories } from './components/repositories'
import { UseRepositories } from '@/hooks/useRepositories'

const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export default function Home() {
  const { repos } = UseRepositories()
  console.log(repos)
  return (
    <ChangeLanguageProvider>
      <ContainerMain>
        <HomePage />
        <AboutMe />
        <Skills />
        <Repositories />
      </ContainerMain>
    </ChangeLanguageProvider>
  )
}
