import { styled } from 'styled-components'
import { Github } from 'lucide-react'
import { Send } from '../icons/send'
export function Repositories() {
  return (
    <Container>
      <ContainerRepositorie>
        <CardRepositorie>
          <Send />
          <div>
            <Github size={50} />
            <span>Acai-Store</span>
            <p>Sistema de pedidos para uma loja de açai, Feito com VUE JS!</p>
          </div>
        </CardRepositorie>
        <CardRepositorie>
          <Send />
          <div>
            <Github size={50} />
            <span>Acai-Store</span>
            <p>Sistema de pedidos para uma loja de açai, Feito com VUE JS!</p>
          </div>
        </CardRepositorie>
        <CardRepositorie>
          <Send />
          <div>
            <Github size={50} />
            <span>Acai-Store</span>
            <p>Sistema de pedidos para uma loja de açai, Feito com VUE JS!</p>
          </div>
        </CardRepositorie>
        <CardRepositorie>
          <Send />
          <div>
            <Github size={50} />
            <span>Acai-Store</span>
            <p>Sistema de pedidos para uma loja de açai, Feito com VUE JS!</p>
          </div>
        </CardRepositorie>
        <CardRepositorie>
          <Send />
          <div>
            <Github size={50} />
            <span>Acai-Store</span>
            <p>Sistema de pedidos para uma loja de açai, Feito com VUE JS!</p>
          </div>
        </CardRepositorie>
        <CardRepositorie>
          <Send />
          <div>
            <Github size={50} />
            <span>Acai-Store</span>
            <p>Sistema de pedidos para uma loja de açai, Feito com VUE JS!</p>
          </div>
        </CardRepositorie>
      </ContainerRepositorie>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 60px;
  color: white;
  background: #000000;
`

const ContainerRepositorie = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  flex-wrap: wrap;
`

const CardRepositorie = styled.div`
  width: 270px;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  background: transparent;
  box-shadow: 0 8px 32px 0 #191e1a;
  backdrop-filter: blur(11.5px);
  -webkit-backdrop-filter: blur(11.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  > a svg {
    width: 25px;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
  > div {
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin: 10px 20px;
    color: #95a398;
    > svg {
      color: #68776b;
      border: 1px solid #68776b;
      border-radius: 50%;
      padding: 10px;
      margin: 8px;
    }
  }
`
