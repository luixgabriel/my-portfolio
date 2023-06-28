'use client'
import { styled } from 'styled-components'
import { HomePage } from './components/home'

const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export default function Home() {
  return (
    <div>
      <ContainerMain>
        <HomePage />
        <div>
          <h1>sobre min</h1>
        </div>
      </ContainerMain>
    </div>
  )
}
