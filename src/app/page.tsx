'use client'
import { styled } from 'styled-components'
import { HomePage } from './components/home'
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
  const { reposFiltered } = UseRepositories()
  console.log(reposFiltered)

  return (
    <ContainerMain>
      <HomePage />
      <AboutMe />
      <Skills />
      <Repositories />
    </ContainerMain>
  )
}
