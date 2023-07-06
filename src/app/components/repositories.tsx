import { UseRepositories } from '@/hooks/useRepositories'
import { styled } from 'styled-components'
import { Briefcase } from 'lucide-react'
import { CardRepositories } from './card-repositorie'
import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
export function Repositories() {
  const { reposFiltered } = UseRepositories()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])
  return (
    <Container>
      <h1>
        Projetos <Briefcase />
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
        {reposFiltered?.map((item) => (
          <CardRepositories
            key={item.id}
            name={item.name}
            html_url={item.html_url}
            description={item.description}
          />
        ))}
      </ContainerRepositorie>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 60px;
  color: white;
  background: -webkit-linear-gradient(to right, #5f2030, #801f29, #641926);
  background: linear-gradient(to right, #191e1a, #37493a, #191e1a);
  h1 {
    font-size: 40px;
    margin: 20px;
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
