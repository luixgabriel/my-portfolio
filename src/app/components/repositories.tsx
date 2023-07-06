import { UseRepositories } from '@/hooks/useRepositories'
import { styled } from 'styled-components'
import { Briefcase, PlusCircle } from 'lucide-react'
import { CardRepositories } from './card-repositorie'
import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useChangeLanguage } from '@/hooks/useChangeLanguage'
import { ErrorPage } from './error-page'

export function Repositories() {
  const { reposFiltered, isError } = UseRepositories()
  const { isChanged } = useChangeLanguage()
  const [visible, setVisible] = useState(6)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  const handleVisible = () => {
    setVisible((prev) => prev + 3)
  }
  return (
    <Container>
      {isError ? (
        <>
          <h1>
            {isChanged ? 'Projects ' : 'Projetos '} <Briefcase />
          </h1>
          <ErrorPage />
        </>
      ) : (
        <>
          {' '}
          <h1>
            {isChanged ? 'Projects ' : 'Projetos '} <Briefcase />
          </h1>
          <ContainerRepositorie
            ref={ref}
            as={motion.div}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {reposFiltered?.slice(0, visible).map((item) => (
              <CardRepositories
                key={item.id}
                name={item.name}
                html_url={item.html_url}
                description={item.description}
              />
            ))}
          </ContainerRepositorie>
          {visible <= reposFiltered?.length && (
            <button onClick={handleVisible}>
              {isChanged ? 'Load More ' : 'Ver mais '} <PlusCircle />
            </button>
          )}
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 60px;
  color: white;
  background: -webkit-linear-gradient(to right, #5f2030, #801f29, #641926);
  background: linear-gradient(to right, #191e1a, #37493a, #191e1a);
  h1 {
    font-size: 40px;
    margin: 20px;
  }
  button {
    transition: all 0.3s ease;
    margin-top: 50px;
    width: 200px;
    align-self: flex-end;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: #95a398;
    border-radius: 30px;

    &:hover {
      color: white;
    }
  }
`

const ContainerRepositorie = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  flex-wrap: wrap;
  margin-top: 70px;
`
