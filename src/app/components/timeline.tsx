import { styled } from 'styled-components'
import {
  Html,
  Css,
  Javascript,
  Typescript,
  Git,
  NodeJs,
  ReactJs,
  NextJs,
} from '../icons/technologies-icons'
import { useChangeLanguage } from '@/hooks/useChangeLanguage'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function TimeLineSkills() {
  const { isChanged } = useChangeLanguage()
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
      <Timeline
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
        <TimelineContainer>
          <TimelineIcon>
            <Html />
          </TimelineIcon>
          <TimelineBody>
            <h4 className="timeline-title">
              <span className="badge">HTML</span>
            </h4>
            <p>
              {isChanged
                ? 'I have the knowledge to create the structures of web pages. I am familiar with HTML tags and attributes, and I can write clean and semantic code to improve website accessibility and usability.'
                : 'Conhecimento para criar as estruturas das páginas web. Estou familiarizado com as tags e atributos HTML, e posso escrever código limpo e semântico para melhorar a acessibilidade e a usabilidade dos sites.'}
            </p>
          </TimelineBody>
        </TimelineContainer>
        <TimelineContainer>
          <TimelineIcon>
            <Css />
          </TimelineIcon>
          <TimelineBody>
            <h4 className="timeline-title">
              <span className="badge">CSS</span>
            </h4>
            <p>
              {isChanged
                ? 'I am able to style web pages in an attractive and responsive manner. I can apply styles, define colors, fonts, sizes, and element positioning. Additionally, I can utilize advanced techniques such as animations and transitions to create visually pleasing experiences. I stay updated with the latest trends and best practices in CSS.'
                : 'Me permite estilizar as páginas web de forma atraente e responsiva. Sou capaz de aplicar estilos, definir cores, fontes, tamanhos e posicionamento dos elementos. Além disso, posso utilizar técnicas avançadas, como animações e transições, para criar uma experiência visualmente agradável. Estou atualizado com as últimas tendências e boas práticas do CSS.'}
            </p>
          </TimelineBody>
        </TimelineContainer>
        <TimelineContainer>
          <TimelineIcon>
            <Javascript />
          </TimelineIcon>
          <TimelineBody>
            <h4 className="timeline-title">
              <span className="badge">JAVASCRIPT</span>
            </h4>
            <p>
              {isChanged
                ? 'I have a strong knowledge of JavaScript and I am capable of developing interactive and dynamic functionalities for web pages. I can create scripts to manipulate page elements, handle events, validate forms, make asynchronous requests, and work with APIs. I am familiar with fundamental concepts of the language such as variables, conditionals, loops, and functions, and I can apply best programming practices to write clean, efficient, and maintainable code.'
                : ' Sólido conhecimento em JavaScript e sou capaz de desenvolver funcionalidades interativas e dinâmicas para páginas web. Posso criar scripts para manipular elementos da página, lidar com eventos, validar formulários, fazer requisições assíncronas e trabalhar com APIs. Estou familiarizado com conceitos fundamentais da linguagem, como variáveis, condicionais, loops e funções, e posso aplicar boas práticas de programação para escrever código limpo, eficiente e de fácil manutenção.'}
            </p>
          </TimelineBody>
        </TimelineContainer>
        <TimelineContainer>
          <TimelineIcon>
            <Typescript />
          </TimelineIcon>
          <TimelineBody>
            <h4 className="timeline-title">
              <span className="badge">TYPESCRIPT</span>
            </h4>
            <p>
              {isChanged
                ? 'In addition to my knowledge in JavaScript, I have experience in TypeScript. With TypeScript, I can add static typing to the code, which brings advantages such as error detection at compile-time, autocompletion, and improved code maintenance. I am familiar with the syntax of TypeScript, including type definitions, interfaces, classes, and modules. I can leverage advanced features of TypeScript, such as union types, type guards, and generics, to make my code more robust and scalable.'
                : 'Além do meu conhecimento em JavaScript, possuo experiência em TypeScript. Com o TypeScript, posso adicionar tipagem estática ao código, o que traz vantagens como detecção de erros em tempo de compilação, autocompletar e melhorias na manutenção do código. Estou familiarizado com a sintaxe do TypeScript, incluindo a definição de tipos, interfaces, classes e módulos. Posso aproveitar as funcionalidades avançadas do TypeScript, como union types, type guards e generics, para tornar meu código mais robusto e escalável.'}
            </p>
          </TimelineBody>
        </TimelineContainer>
        <TimelineContainer>
          <TimelineIcon>
            <Git />
          </TimelineIcon>
          <TimelineBody>
            <h4 className="timeline-title">
              <span className="badge">
                {isChanged ? 'GIT AND GITHUB' : 'GIT E GITHUB'}
              </span>
            </h4>
            <p>
              {isChanged
                ? 'I have knowledge in Git and I can manage repositories, control change history, and handle collaborative workflows.'
                : 'Conhecimento em Git e posso gerenciar repositórios, controlar histórico de alterações e lidar com fluxos de trabalho colaborativos.'}
            </p>
          </TimelineBody>
        </TimelineContainer>
        <TimelineContainer>
          <TimelineIcon>
            <NodeJs />
          </TimelineIcon>
          <TimelineBody>
            <h4 className="timeline-title">
              <span className="badge">NODE JS</span>
            </h4>
            <p>
              {isChanged
                ? 'I have knowledge in Node.js and I am capable of developing server-side applications using this platform. I can create web servers, manipulate files, perform input/output operations, access databases, and work with APIs. Additionally, I am familiar with utilizing npm packages and modules to enhance the functionality of my applications.'
                : 'Conhecimento em Node.js e sou capaz de desenvolver aplicações do lado do servidor utilizando essa servidores web, manipular arquivos, realizar operações de entrada e saída, acessar bancos de dados e trabalhar com APIs. Além disso, estou familiarizado com a utilização de pacotes e módulos do npm para ampliar a funcionalidade das minhas aplicações.'}
            </p>
          </TimelineBody>
        </TimelineContainer>
        <TimelineContainer>
          <TimelineIcon>
            <ReactJs />
          </TimelineIcon>
          <TimelineBody>
            <h4 className="timeline-title">
              <span className="badge">REACT JS</span>
            </h4>
            <p>
              {isChanged
                ? 'I have experience in React.js for building interactive and reactive user interfaces. I am capable of creating reusable components, managing application state using props and state concepts, and utilizing the component lifecycle to control data flow. Additionally, I am familiar with event handling, page navigation, and integration with external APIs.'
                : 'Tenho experiência em React.js para a construção de interfaces de usuário interativas e reativas. Sou capaz de criar componentes reutilizáveis, gerenciar o estado da aplicação utilizando o conceito de props e estados, e utilizar o ciclo de vida dos componentes para controlar o fluxo de dados. Além disso, estou familiarizado com a manipulação de eventos, navegação entre páginas e integração com APIs externas.'}
            </p>
          </TimelineBody>
        </TimelineContainer>
        <TimelineContainer>
          <TimelineIcon>
            <NextJs />
          </TimelineIcon>
          <TimelineBody>
            <h4 className="timeline-title">
              <span className="badge">NEXT JS</span>
            </h4>
            <p>
              {isChanged
                ? 'I have knowledge in the Next.js framework, and I can create web applications with server-side rendering (SSR) and client-side rendering (CSR), providing enhanced performance and SEO optimizations. I can also leverage advanced features like static generation and server-side rendering to create pre-rendered static pages or generate dynamic content at runtime.'
                : 'Conhecimento no framework Next.js, posso criar aplicativos web com renderização no servidor (SSR) e no lado do cliente (CSR), proporcionando um desempenho aprimorado e otimizações para SEO. Também posso aproveitar recursos avançados, como geração estática e do lado do servidor, para criar páginas estáticas pré-renderizadas ou gerar conteúdo dinâmico em tempo de execução.'}
            </p>
          </TimelineBody>
        </TimelineContainer>
      </Timeline>
    </Container>
  )
}

const Container = styled.div`
  margin: 50px auto;
`

const Timeline = styled.div`
  position: relative;
  padding-left: 4rem;
  margin: 0 0 0 30px;
  color: white;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: var(--color-secondary);
  }

  @media (max-width: 1110px) {
    width: 100%;
  }
`

const TimelineContainer = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
`

const TimelineIcon = styled.div`
  position: absolute;
  left: -88px;
  top: 4px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  font-size: 2rem;
  background: var(--color-secondary);

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const TimelineBody = styled.div`
  background: #27293d;
  border-radius: 3px;
  padding: 20px 20px 15px;
  box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.1);
  width: 800px;

  &::before {
    content: '';
    background: inherit;
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    left: -10px;
    transform: rotate(45deg);
    border-radius: 0 0 0 2px;
  }
  @media (max-width: 890px) {
    width: 400px;
  }

  @media (max-width: 519px) {
    width: 260px;
  }

  .timeline-title {
    margin-bottom: 1.4rem;

    .badge {
      background: var(--color-secondary);
      padding: 4px 8px;
      border-radius: 3px;
      font-size: 12px;
      font-weight: bold;
    }
  }

  .timeline-subtitle {
    font-weight: 300;
    font-style: italic;
    opacity: 0.4;
    margin-top: 16px;
    font-size: 11px;
  }
`
