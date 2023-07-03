/* eslint-disable react/no-unescaped-entities */
import { styled } from 'styled-components'
import Myphoto from '../../assets/me.jpg'
import Image from 'next/image'
import { HandMetal } from 'lucide-react'
import { useChangeLanguage } from '@/hooks/useChangeLanguage'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { SocialMedias } from './social-media'

export function AboutMe() {
  const { isChanged } = useChangeLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  return (
    <Container>
      <AboutMeContainer
        ref={ref}
        as={motion.div}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <ContainerMyInfos>
          <span className="animate__animated animate__bounce">
            {isChanged ? 'About Me' : 'Sobre mim'} <HandMetal />
          </span>
          {isChanged ? (
            <p>
              <p>
                My name is Luis Gabriel and I'm studying to become a complete
                Full Stack Developer. At 23 years old, I have a degree in
                Information Systems and I've been passionate about technology
                since I was 16. I started my career working as a computer
                support during my internship, but I fell in love with
                programming. Since then, I've been dedicated to studying web
                development and I'm seeking my first opportunity as a developer.
                I'm focused on expanding my knowledge in other areas as well
                because I believe it can make me a more well-rounded and
                versatile professional. I'm confident that I can bring value to
                any position I take on, and I'm excited to put into practice
                everything I've learned so far.
              </p>
            </p>
          ) : (
            <p>
              Meu nome é Luis Gabriel e estou estudando para me tornar um
              Programador Full Stack completo. Com 23 anos de idade, sou formado
              em Sistemas de Informação e sou apaixonado por tecnologia desde os
              16 anos. Comecei minha carreira trabalhando como suporte de
              computadores durante meu estágio, mas acabei me apaixonando pela
              programação. Desde então, tenho me dedicado aos estudos de
              desenvolvimento web e estou em busca da minha primeira
              oportunidade como desenvolvedor. Estou focado em expandir meus
              conhecimentos em outras áreas também, pois acredito que isso pode
              me tornar um profissional mais completo e versátil. Tenho
              confiança de que posso agregar valor em qualquer posição que eu
              assumir e estou animado para colocar em prática tudo o que aprendi
              até agora.
            </p>
          )}

          <button>Download CV</button>
        </ContainerMyInfos>
        <ContainerMyPhoto>
          <Image src={Myphoto} alt="my photo" />
        </ContainerMyPhoto>
        <ContainerSocialMediaIcons>
          <SocialMedias />
        </ContainerSocialMediaIcons>
      </AboutMeContainer>
    </Container>
  )
}

const Container = styled.section`
  background-color: var(--bg-primary);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
`

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: center;
  gap: 15px;

  @media (min-width: 1110px) {
    flex-direction: row;
    width: 80%;
    height: 70vh;
  }
`
const ContainerMyInfos = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  span {
    font-size: 40px;
    margin: 8px 0px;
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
      margin: 8px 0px;
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
    margin-top: 20px;
  }
`

const ContainerSocialMediaIcons = styled.div`
  span {
    display: flex;
    flex-direction: column;
    a {
      margin: 10px;
      color: white;
    }
  }

  @media (max-width: 1110px) {
    margin-top: 40px;
    span {
      display: flex;
      flex-direction: row;
    }
  }
`
