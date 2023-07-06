import { styled } from 'styled-components'
import { FixingBugs } from '../icons/fixing-bugs'
import { Linkedin, Mail, Github } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <ContaierFooter>
      <ContainerInfoFooter>
        <div>
          <h1>Se interessou? Entre em contato!</h1>
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

          <p>
            ©2023 por Luis Gabriel. <br />
            Todos os direitos reservados.
          </p>
        </div>
        <div>
          <FixingBugs />
        </div>
      </ContainerInfoFooter>
    </ContaierFooter>
  )
}

const ContaierFooter = styled.section`
  background: #0c0f0d;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;

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
  }
  a:not(:first-of-type) {
    margin-left: 15px;
  }
`
