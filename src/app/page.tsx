'use client'
import { styled } from 'styled-components'
import { HomePage } from './components/home'
import { ChangeLanguageProvider } from '@/context/change-language'

const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export default function Home() {
  return (
    <ChangeLanguageProvider>
      <ContainerMain>
        <HomePage />
      </ContainerMain>
    </ChangeLanguageProvider>
  )
}
