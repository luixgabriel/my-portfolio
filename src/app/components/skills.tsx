import { styled } from 'styled-components'

export function Skills() {
  return (
    <Container>
      <h1>Hello world</h1>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url('../nightcity.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  color: white;
`
