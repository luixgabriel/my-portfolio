import { styled } from 'styled-components'
import { TimeLineSkills } from './timeline'

export function Skills() {
  return (
    <ContainerImage>
      <div>
        <h1>Habilidades</h1>
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
`
