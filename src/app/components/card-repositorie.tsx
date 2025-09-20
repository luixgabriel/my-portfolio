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
    text-decoration: none;
    color: #95a398;
    position: absolute;
    right: 15px;
    top: 15px;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 6px;

    &:hover {
      color: #b9cabd;
    }

    img {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }

  > div {
    display: flex;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    color: #95a398;
    width: 100%;

    > svg {
      color: #68776b;
      border: 1px solid #68776b;
      border-radius: 50%;
      padding: 10px;
      align-self: flex-start;
    }

    span {
      width: 100%;
      font-size: 16px;
      font-weight: 600;
      color: #95a398;
      margin: 15px 0 10px 0;
      line-height: 1.3;
      
      /* Text truncation para títulos longos */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p {
      width: 100%;
      font-size: 14px;
      line-height: 1.5;
      color: #95a398;
      margin: 0;
      flex-grow: 1;
      
      /* Text truncation para descrições longas */
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`
