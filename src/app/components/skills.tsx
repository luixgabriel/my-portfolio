import { styled } from 'styled-components'
import { TimeLineSkills } from './timeline'
import { useChangeLanguage } from '@/hooks/useChangeLanguage'

export function Skills() {
  const { isChanged } = useChangeLanguage()
  return (
    <ContainerImage>
      <div>
        <h1>{isChanged ? 'Skills' : 'Habilidades'}</h1>
      </div>
      <TimeLineSkills />
    </ContainerImage>
  )
}

const ContainerImage = styled.section`
  width: 100%;
  background-image: url('../nightcity.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  color: white;

  > div {
    margin-top: 90px;
    h1 {
      font-size: 2rem;
    }
  }
`
