import { IRepositorie } from '@/types/repositorie'
import { styled } from 'styled-components'
import { Github } from 'lucide-react'
import Link from 'next/link'
import { useChangeLanguage } from '@/hooks/useChangeLanguage'
import Send from '../../assets/send-svgrepo-com.png'
import Image from 'next/image'

export function CardRepositories({
  name,
  html_url,
  description,
}: IRepositorie) {
  const { isChanged } = useChangeLanguage()
  return (
    <CardRepositorie>
      <Link href={html_url} target="_blank">
        {isChanged ? 'View Repository ' : 'Ver repositório '}{' '}
        <Image src={Send} alt="send" />
      </Link>
      <div>
        <Github size={50} />
        <span>{name}</span>
        <p>{description || 'Ainda sem descrição'}</p>
      </div>
    </CardRepositorie>
  )
}

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
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0 8px 32px 0 #3b443d;
    transform: translateY(-2px);
  }
  a {
    text-align: center;
    width: 100%;

    text-decoration: none;
    color: #95a398;
    position: absolute;
    right: -30px;
    top: 10px;
    padding: 5px;
    transition: all 0.2s ease;

    &:hover {
      color: #b9cabd;
    }

    img {
      width: 25px;
      height: 25px;
      position: absolute;
      margin: 0px 5px;
      cursor: pointer;
    }
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
    p {
      width: 100%;
    }
    span {
      width: 100%;
    }
  }
`
