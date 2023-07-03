import { Linkedin, Mail, Github } from 'lucide-react'
import Link from 'next/link'
import { styled } from 'styled-components'

export function SocialMedias() {
  return (
    <Teste>
      <Link
        href="https://www.linkedin.com/in/luis-gabriel-a447081b2/"
        target="_blank"
      >
        <Linkedin />
      </Link>
      <Link href="mailto:luisgasbriel@gmail.com">
        <Mail />
      </Link>
      <Link href="https://github.com/luixgabriel" target="_blank">
        <Github />
      </Link>
    </Teste>
  )
}

const Teste = styled.span`
  svg {
    transition: all 0.2s ease;
  }
  svg:hover {
    transform: translateY(-5px);
  }
`
