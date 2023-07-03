/* eslint-disable react/no-unescaped-entities */
'use client'
import { styled } from 'styled-components'
import IAphoto from '../../assets/Vana - Anime Arcade 2023-05-31-7_03_55AM 7 (1).png'
import Image from 'next/image'
import { Arrow } from './arrow'
import { ToggleButton } from './toggle-button'
import { useChangeLanguage } from '@/hooks/useChangeLanguage'

export function HomePage(props: any) {
  const { isChanged, handleChange } = useChangeLanguage()

  return (
    <BackgroundImage>
      <ToggleButton toggled={isChanged} onClick={handleChange} />
      <Container>
        <Image src={IAphoto} alt="icon" />
        {isChanged ? (
          <div>
            <h1>Hi There, I'm Luis Gabriel</h1>
            <h2>Full Stack Developer!</h2>
          </div>
        ) : (
          <div>
            <h1>Olá, eu sou o Luis Gabriel</h1>
            <h2>Desenvolvedor Full Stack!</h2>
          </div>
        )}
        <Arrow />
      </Container>
    </BackgroundImage>
  )
}

const BackgroundImage = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url('../655372.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: hidden;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-direction: column;
  color: white;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: white 2px solid;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    width: 100%;

    h1 {
      font-size: 1.8rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 710px) {
    max-width: 80%;
    max-height: 80%;
    img {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      border: white 2px solid;
    }
    > div {
      margin-bottom: 30px;
      h1 {
        font-size: 3rem;
      }
      h2 {
        font-size: 2rem;
      }
    }
  }
`
