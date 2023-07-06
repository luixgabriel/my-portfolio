import { styled } from 'styled-components'
import { FixingBugs } from '../icons/fixing-bugs'
import { Linkedin, Mail, Github, ArrowBigUpDash } from 'lucide-react'
import Link from 'next/link'
import { useChangeLanguage } from '@/hooks/useChangeLanguage'

export function Footer() {
  const { isChanged } = useChangeLanguage()
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <ContaierFooter>
      <ContainerInfoFooter>
        <div>
          <h1>
            {isChanged
              ? 'Interested? Contact!'
              : 'Se interessou? Entre em contato!'}
          </h1>
          <ContainerLinksFooter>
            <Link
              href="https://www.linkedin.com/in/luis-gabriel-a447081b2/"
              target="_blank"
            >
              <Linkedin />
            </Link>
            <Link href="mailto:luisgasbriel@gmail.com" target="_blank">
              <Mail />
            </Link>
            <Link href="https://github.com/luixgabriel" target="_blank">
              <Github />
            </Link>
          </ContainerLinksFooter>
          {isChanged ? (
            <p>
              ©2023 by Luis Gabriel. <br />
              All rights reserved.
            </p>
          ) : (
            <p>
              ©2023 por Luis Gabriel.
              <br />
              Todos os direitos reservados.
            </p>
          )}
        </div>
        <div>
          <FixingBugs />
        </div>
      </ContainerInfoFooter>
      <button onClick={() => handleScroll()}>
        <ArrowBigUpDash size={30} width="40px" height="40px" color="white" />
      </button>
    </ContaierFooter>
  )
}

const ContaierFooter = styled.section`
  background: #0c0f0d;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  position: relative;
  > button {
    background: transparent;
    border: none;
    background: #2f3e32;
    border-radius: 50%;
    position: absolute;
    padding: 8px;
    right: 30px;
    bottom: 30px;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    align-items: center;
  }
`

const ContainerInfoFooter = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  h1 {
    font-size: 2rem;
  }
  div:nth-of-type(2) {
    svg {
      width: 300px;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`
const ContainerLinksFooter = styled.div`
  display: flex;
  align-items: center;

  a {
    color: white;
    margin: 9px 0px;

    &:hover {
      color: #ff9293;
    }
  }
  a:not(:first-of-type) {
    margin-left: 15px;
  }
`
