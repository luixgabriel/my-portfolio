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

export function TimeLineSkills() {
  return (
    <Container>
      <Timeline>
        <TimelineContainer>
          <TimelineIcon>
            <Html />
          </TimelineIcon>
          <TimelineBody>
            <h4 className="timeline-title">
              <span className="badge">HTML</span>
            </h4>
            <p>
              Conhecimento para criar as estruturas das páginas web. Estou
              familiarizado com as tags e atributos HTML, e posso escrever
              código limpo e semântico para melhorar a acessibilidade e a
              usabilidade dos sites.
            </p>
            <p className="timeline-subtitle">1 Hours Ago</p>
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
              Me permite estilizar as páginas web de forma atraente e
              responsiva. Sou capaz de aplicar estilos, definir cores, fontes,
              tamanhos e posicionamento dos elementos. Além disso, posso
              utilizar técnicas avançadas, como animações e transições, para
              criar uma experiência visualmente agradável. Estou atualizado com
              as últimas tendências e boas práticas do CSS.
            </p>
            <p className="timeline-subtitle">1 Hours Ago</p>
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
              Sólido conhecimento em JavaScript e sou capaz de desenvolver
              funcionalidades interativas e dinâmicas para páginas web. Posso
              criar scripts para manipular elementos da página, lidar com
              eventos, validar formulários, fazer requisições assíncronas e
              trabalhar com APIs. Estou familiarizado com conceitos fundamentais
              da linguagem, como variáveis, condicionais, loops e funções, e
              posso aplicar boas práticas de programação para escrever código
              limpo, eficiente e de fácil manutenção.
            </p>
            <p className="timeline-subtitle">1 Hours Ago</p>
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
              Além do meu conhecimento em JavaScript, possuo experiência em
              TypeScript. Com o TypeScript, posso adicionar tipagem estática ao
              código, o que traz vantagens como detecção de erros em tempo de
              compilação, autocompletar e melhorias na manutenção do código.
              Estou familiarizado com a sintaxe do TypeScript, incluindo a
              definição de tipos, interfaces, classes e módulos. Posso
              aproveitar as funcionalidades avançadas do TypeScript, como union
              types, type guards e generics, para tornar meu código mais robusto
              e escalável.
            </p>
            <p className="timeline-subtitle">1 Hours Ago</p>
          </TimelineBody>
        </TimelineContainer>
        <TimelineContainer>
          <TimelineIcon>
            <Git />
          </TimelineIcon>
          <TimelineBody>
            <h4 className="timeline-title">
              <span className="badge">GIT E GITHUB</span>
            </h4>
            <p>
              Conhecimento em Git e posso gerenciar repositórios, controlar
              histórico de alterações e lidar com fluxos de trabalho
              colaborativos.
            </p>
            <p className="timeline-subtitle">1 Hours Ago</p>
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
              Conhecimento em Node.js e sou capaz de desenvolver aplicações do
              lado do servidor utilizando essa plataforma. Posso criar
              servidores web, manipular arquivos, realizar operações de entrada
              e saída, acessar bancos de dados e trabalhar com APIs. Além disso,
              estou familiarizado com a utilização de pacotes e módulos do npm
              para ampliar a funcionalidade das minhas aplicações.
            </p>
            <p className="timeline-subtitle">1 Hours Ago</p>
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
              Tenho experiência em React.js para a construção de interfaces de
              usuário interativas e reativas. Sou capaz de criar componentes
              reutilizáveis, gerenciar o estado da aplicação utilizando o
              conceito de props e estados, e utilizar o ciclo de vida dos
              componentes para controlar o fluxo de dados. Além disso, estou
              familiarizado com a manipulação de eventos, navegação entre
              páginas e integração com APIs externas.
            </p>
            <p className="timeline-subtitle">1 Hours Ago</p>
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
              Conhecimento no framework Next.js, posso criar aplicativos web com
              renderização no servidor (SSR) e no lado do cliente (CSR),
              proporcionando um desempenho aprimorado e otimizações para SEO.
              Também posso aproveitar recursos avançados, como geração estática
              e do lado do servidor, para criar páginas estáticas
              pré-renderizadas ou gerar conteúdo dinâmico em tempo de execução.
            </p>
            <p className="timeline-subtitle">1 Hours Ago</p>
          </TimelineBody>
        </TimelineContainer>
      </Timeline>
    </Container>
  )
}

const Container = styled.div`
  max-width: 650px;
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
