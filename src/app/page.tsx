'use client'
import { styled } from 'styled-components'
import { HomePage } from './components/home'

const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`
export default function Home() {
  return (
    <div>
      <ContainerMain>
        <HomePage />
      </ContainerMain>
    </div>
  )
}
