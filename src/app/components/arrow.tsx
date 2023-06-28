import styled, { keyframes } from 'styled-components'

const animate = keyframes`
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
`

const ArrowContainer = styled.div``

const ArrowSpan = styled.span`
  display: block;
  width: 1.5vw;
  height: 1.5vw;
  border-bottom: 5px solid white;
  border-right: 5px solid white;
  transform: rotate(45deg);
  margin: -10px;
  animation: ${animate} 1.5s infinite;
`

const SecondArrowSpan = styled.span`
  display: block;
  width: 1.5vw;
  height: 1.5vw;
  border-bottom: 5px solid white;
  border-right: 5px solid white;
  transform: rotate(45deg);
  margin: -10px;
  animation: ${animate} 1.5s infinite;
  animation-delay: -0.2s;
`

const ThirdArrowSpan = styled.span`
  display: block;
  width: 1.5vw;
  height: 1.5vw;
  border-bottom: 5px solid white;
  border-right: 5px solid white;
  transform: rotate(45deg);
  margin: -10px;
  animation: ${animate} 1.5s infinite;
  animation-delay: -0.4s;
`

export function Arrow() {
  return (
    <ArrowContainer>
      <ArrowSpan />
      <SecondArrowSpan />
      <ThirdArrowSpan />
    </ArrowContainer>
  )
}
