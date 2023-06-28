/* eslint-disable react/no-unescaped-entities */
'use client'
import { styled } from 'styled-components'
import IAphoto from '../../assets/Vana - Anime Arcade 2023-05-31-7_03_55AM 7 (1).png'
import Image from 'next/image'
import { Arrow } from './arrow'

const BackgroundImage = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url('../655372.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-direction: column;
  max-width: 80%;
  max-height: 80%;

  color: white;

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: white 2px solid;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
`
export function HomePage(props: any) {
  return (
    <BackgroundImage>
      <Container>
        <Image src={IAphoto} alt="icon" />
        {/* <div>
          <h1>Hi There, I'm Luis Gabriel</h1>
          <h2>Full Stack Developer in training!</h2>
        </div> */}
        <div>
          <h1>Olá, eu sou o Luis Gabriel</h1>
          <h2>Desenvolvedor Full Stack em treinamento!</h2>
        </div>
        <Arrow />
      </Container>
    </BackgroundImage>
  )
}
