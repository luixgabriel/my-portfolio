/* eslint-disable react/no-unescaped-entities */
import { styled } from 'styled-components'
import Myphoto from '../../assets/me-with-pc.jpeg'
import Image from 'next/image'
import { HandMetal } from 'lucide-react'
import { useChangeLanguage } from '@/hooks/useChangeLanguage'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { SocialMedias } from './social-media'
import Link from 'next/link'

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
          <span>
            {isChanged ? 'About Me' : 'Sobre mim'} <HandMetal />
          </span>
          {isChanged ? (
            <p>
              My name is Luis Gabriel, a Bachelor of Information Systems with 3
              years of solid experience in Full Stack development. I hold an AWS
              Cloud Practitioner certification, reinforcing my expertise in
              cloud computing. I continuously evolve and study to improve my
              skills, working with TypeScript, Node.js, Angular, Next.js, React,
              and Java to develop scalable and performant solutions.
              Additionally, I have technical training in Computer Maintenance,
              Networks, and IT Services, which broadens my perspective on
              infrastructure and security. At 23 years old, I've been passionate
              about technology since I was 16. I started my career working as
              computer support during my internship, but fell in love with
              programming. Since then, I've dedicated myself to constant
              learning and professional growth in web development. I'm confident
              I can bring significant value to any team and excited to
              contribute with my experience and continuous drive for
              improvement.
            </p>
          ) : (
            <p>
              Meu nome é Luis Gabriel, Bacharel em Sistemas de Informação com 3
              anos de sólida experiência em desenvolvimento Full Stack. Possuo
              certificação AWS Cloud Practitioner, reforçando minha expertise em
              computação em nuvem. Estou cada dia mais evoluindo e estudando
              para me aprimorar, atuando com TypeScript, Node.js, Angular,
              Next.js, React e Java para desenvolver soluções escaláveis e
              performáticas. Além disso, tenho formação técnica em Manutenção de
              Computadores, Redes e Serviços em TI, o que amplia minha visão
              sobre infraestrutura e segurança. Com 23 anos de idade, sou
              apaixonado por tecnologia desde os 16 anos. Comecei minha carreira
              trabalhando como suporte de computadores durante meu estágio, mas
              acabei me apaixonando pela programação. Desde então, tenho me
              dedicado ao constante aprendizado e crescimento profissional em
              desenvolvimento web. Tenho confiança de que posso agregar valor
              significativo a qualquer equipe e estou animado para contribuir
              com minha experiência e busca contínua por aprimoramento.
            </p>
          )}

          <button>
            <Link href="../cv.pdf" target="_blank" rel="noopener noreferrer">
              Download CV
            </Link>{' '}
          </button>
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
  background: var(--bg-primary);
  background: -webkit-linear-gradient(to right, #5f2030, #801f29, #641926);
  background: linear-gradient(to right, #5f2030, #801f29, #641926);
  width: 100%;
  min-height: 100vh;
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;

  @media (max-width: 1110px) {
    min-height: auto;
    padding: 60px 0;
  }
`

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: center;
  gap: 30px;
  padding: 40px 20px;

  @media (min-width: 1110px) {
    flex-direction: row;
    width: 85%;
    height: 75vh;
    gap: 40px;
  }
`

const ContainerMyInfos = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;

  span {
    font-size: 36px;
    margin: 0 0 25px 0;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 15px;
    letter-spacing: -0.5px;
    background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    svg {
      transition: transform 0.3s ease;
      color: white;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    }
    
    &:hover svg {
      transform: rotate(20deg);
    }
  }

  p {
    font-size: 16px;
    line-height: 1.7;
    margin-bottom: 35px;
    text-align: justify;
    color: rgba(255, 255, 255, 0.9);
    text-indent: 20px;
    hyphens: auto;
    word-spacing: 1px;
    
    /* Primeira linha com destaque sutil */
    &::first-line {
      font-weight: 500;
      color: rgba(255, 255, 255, 0.95);
    }
  }

  button {
    width: 170px;
    align-self: center;
    margin-top: 10px;
    border: 2px solid white;
    padding: 12px 20px;
    background: transparent;
    cursor: pointer;
    color: white;
    border-radius: 25px;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      transition: left 0.3s ease;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
      
      &::before {
        left: 100%;
      }
    }

    a {
      color: white;
      text-decoration: none;
      position: relative;
      z-index: 1;
      transition: all 0.3s ease;
    }
  }

  @media (max-width: 1110px) {
    width: 90%;
    margin: 20px 0;

    span {
      font-size: 32px;
      text-align: center;
      justify-content: center;
      margin-bottom: 30px;
    }

    p {
      font-size: 16px;
      text-align: center;
      line-height: 1.8;
      text-indent: 0;
      margin-bottom: 40px;
    }

    button {
      font-size: 16px;
      width: 200px;
      margin: 20px 0 60px 0;
      padding: 15px 25px;
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
    object-fit: cover;
    box-shadow: 
      0 15px 35px rgba(0, 0, 0, 0.4),
      0 5px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    border: 3px solid rgba(255, 255, 255, 0.1);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.5),
        0 10px 25px rgba(0, 0, 0, 0.3);
      border-color: rgba(255, 255, 255, 0.2);
    }
  }

  @media (max-width: 1110px) {
    width: 100%;
    margin-top: 20px;

    img {
      width: 250px;
      height: 250px;
    }
  }
`

const ContainerSocialMediaIcons = styled.div`
  span {
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    a {
      margin: 0;
      color: white;
      transition: all 0.3s ease;
      padding: 10px;
      border-radius: 8px;
      
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateX(5px);
      }
    }
  }

  @media (max-width: 1110px) {
    margin-top: 30px;
    
    span {
      flex-direction: row;
      justify-content: center;
      gap: 20px;
      
      a:hover {
        transform: translateY(-3px);
      }
    }
  }
`
