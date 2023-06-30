/* eslint-disable react/no-unescaped-entities */
import { styled } from 'styled-components'
import Myphoto from '../../assets/me.jpg'
import Image from 'next/image'
import { HandMetal } from 'lucide-react'

const Container = styled.section`
  background-color: var(--bg-primary);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow-x: hidden;
`

const AboutMeConatiner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: center;
  gap: 15px;

  @media (min-width: 1110px) {
    flex-direction: row;
    width: 80%;
    height: 60vh;
  }
`
const ContainerMyInfos = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  span {
    font-size: 40px;
    margin: 8px 0;
  }

  p {
    font-size: 17px;
    margin-bottom: 10px;
  }

  button {
    width: 150px;
    align-self: center;
    margin-top: 10px;
    border: 1px solid white;
    padding: 5px 10px;
    background: transparent;
    cursor: pointer;
    color: white;
    border-radius: 20px;
  }

  @media (max-width: 1110px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    margin: 20px 0;
    span {
      font-size: 40px;
      margin: 8px 0;
      text-align: center;
    }

    p {
      font-size: 20px;
      text-align: center;
      margin-bottom: 10px;
    }

    button {
      font-size: 20px;
      width: 200px;
      align-self: center;
      margin-top: 10px;
      border: 3px solid white;
      padding: 5px 10px;
      background: transparent;
      cursor: pointer;
      color: white;
      border-radius: 20px;
    }
  }
`
const ContainerMyPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  img {
    border-radius: 50%;
    width: 300px;
    height: 300px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }

  @media (max-width: 1110px) {
    margin-top: 30px;
  }
`

export function AboutMe() {
  return (
    <Container>
      <AboutMeConatiner>
        <ContainerMyInfos>
          <span>
            Sobre mim <HandMetal />
          </span>
          <p>
            A programação é uma habilidade fundamental na era digital. Por meio
            dela, é possível criar soluções inovadoras e resolver problemas
            complexos. Através do desenvolvimento de algoritmos e código, os
            programadores transformam ideias em realidade, criando aplicativos,
            sites e sistemas que impulsionam o mundo moderno. A programação
            requer pensamento lógico e analítico, pois envolve a criação de
            sequências de comandos que serão executados por computadores.
            Dominar diferentes linguagens de programação, como Python, Java ou
            C++, permite aos desenvolvedores construir uma ampla variedade de
            aplicações, desde jogos até sistemas de inteligência artificial.
          </p>
          <button>Download CV</button>
        </ContainerMyInfos>
        <ContainerMyPhoto>
          <Image src={Myphoto} alt="my photo" />
        </ContainerMyPhoto>
      </AboutMeConatiner>
    </Container>
  )
}
