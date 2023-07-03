'use client'
import React from 'react'
import styled from 'styled-components'

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
    background: #27293d;
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
  background: #4f537b;

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
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
      background: #4f537b;
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

export default function Test() {
  return (
    <Container>
      <Timeline>
        <TimelineContainer>
          <TimelineIcon>
            <svg
              viewBox="-52.5 0 361 361"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
              fill="#f0e5e5"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z"
                  fill="#E44D26"
                ></path>
                <path
                  d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z"
                  fill="#F16529"
                ></path>
                <path
                  d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z"
                  fill="#EBEBEB"
                ></path>
                <path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z"></path>
                <path
                  d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z"
                  fill="#FFF"
                ></path>
              </g>
            </svg>
          </TimelineIcon>
          <TimelineBody>
            <h4 className="timeline-title">
              <span className="badge">HTML</span>
            </h4>
            <p>
              HTML, ou HyperText Markup Language, é uma linguagem de marcação
              usada para criar a estrutura e o conteúdo de páginas da web. Com
              HTML, é possível definir elementos como títulos, parágrafos,
              imagens, links e muitos outros, organizando-os em uma hierarquia.
            </p>
            <p className="timeline-subtitle">1 Hours Ago</p>
          </TimelineBody>
        </TimelineContainer>
        <TimelineContainer>
          <TimelineIcon>
            <svg
              fill="#ffffff"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              enableBackground="new 0 0 512 512"
              xmlSpace="preserve"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <g id="c133de6af664cd4f011a55de6b001a2b">
                  {' '}
                  <path
                    display="inline"
                    d="M204.064,46.682v22.018h-56.302V0.501h56.302v24.13h-32.172v22.051H204.064z M261.941,24.631h22.492 V0.501h-56.308c0,0,0,12.112,0,24.13c7.533,7.533,11.461,11.139,22.356,22.034c-6.369,0-22.356,0.022-22.356,0.021v22.014h56.308 V46.682L261.941,24.631z M341.746,24.631h22.49V0.501H307.93c0,0,0,12.112,0,24.13c7.531,7.533,11.461,11.139,22.355,22.034 c-6.365,0-22.355,0.022-22.355,0.021v22.014h56.307V46.682L341.746,24.631z M438.395,101.112l-34.203,370.486l-148.193,39.9 l-148.196-39.9L73.605,101.112H438.395z M369.477,176.444H255.865h-115.62l5.529,44.739h110.091h6.184l-6.184,2.574 l-106.067,44.177l3.518,43.73l102.549,0.333l54.963,0.175l-3.521,58.311l-51.442,14.484v-0.046l-0.422,0.116l-49.684-12.542 l-3.015-36.195h-0.164h-46.085h-0.162l6.032,69.876l93.5,27.649v-0.05l0.168,0.05l93-27.146L361.1,267.935H255.865h-0.26 l0.26-0.112l109.086-46.639L369.477,176.444z"
                  >
                    {' '}
                  </path>{' '}
                </g>{' '}
              </g>
            </svg>
          </TimelineIcon>
          <TimelineBody>
            <h4 className="timeline-title">
              <span className="badge">CSS</span>
            </h4>
            <p>
              CSS, ou Cascading Style Sheets, é uma linguagem de estilos usada
              para controlar a aparência e o layout de elementos em páginas da
              web. Com CSS, é possível definir propriedades como cor, fonte,
              tamanho, espaçamento e posicionamento dos elementos HTML.
            </p>
            <p className="timeline-subtitle">1 Hours Ago</p>
          </TimelineBody>
        </TimelineContainer>
        <TimelineContainer>
          <TimelineIcon>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#030000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H24V24H0V0ZM18.3467 20.1196C17.2343 20.1196 16.6053 19.5394 16.1219 18.7501L14.2891 19.8149C14.9512 21.123 16.3044 22.1211 18.3989 22.1211C20.5409 22.1211 22.136 21.0088 22.136 18.9783C22.136 17.0949 21.0541 16.2571 19.1379 15.4354L18.5741 15.1939C17.6065 14.7749 17.1874 14.501 17.1874 13.8244C17.1874 13.277 17.6061 12.8579 18.2667 12.8579C18.9143 12.8579 19.3314 13.131 19.7181 13.8244L21.4743 12.6968C20.7314 11.3901 19.7006 10.891 18.2667 10.891C16.2526 10.891 14.9638 12.1787 14.9638 13.8701C14.9638 15.7063 16.0449 16.5749 17.6724 17.2682L18.2362 17.5101C19.2648 17.96 19.8781 18.2339 19.8781 19.0072C19.8781 19.6526 19.2811 20.1196 18.3467 20.1196ZM9.60647 20.1055C8.83161 20.1055 8.50933 19.5741 8.15504 18.9455L6.31923 20.057C6.85104 21.1825 7.89676 22.117 9.70247 22.117C11.7009 22.117 13.0701 21.0541 13.0701 18.7189V11.0198H10.8149V18.6884C10.8149 19.8156 10.3474 20.1055 9.60647 20.1055Z"
                  fill="#ffffff"
                ></path>{' '}
              </g>
            </svg>
          </TimelineIcon>
          <TimelineBody>
            <h4 className="timeline-title">
              <span className="badge">JAVASCRIPT</span>
            </h4>
            <p>
              CSS, ou Cascading Style Sheets, é uma linguagem de estilos usada
            </p>
            <p className="timeline-subtitle">1 Hours Ago</p>
          </TimelineBody>
        </TimelineContainer>
        <TimelineContainer>
          <TimelineIcon>
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M17.1725 2.29872C16.4627 1.89953 15.5373 1.90132 14.8269 2.29872C11.2689 4.26227 7.71082 6.22641 4.15216 8.18906C3.45969 8.55335 2.99264 9.29698 3.00009 10.0688V21.9328C2.99509 22.7197 3.48622 23.4705 4.19655 23.8298C5.21871 24.3736 6.2118 24.9726 7.25244 25.4802C8.45451 26.0709 9.95843 26.2015 11.1752 25.5855C12.1629 25.075 12.6016 23.9395 12.6003 22.896C12.6083 18.9806 12.6016 15.0651 12.6034 11.1496C12.6269 10.9756 12.4962 10.7896 12.3064 10.7938C11.8517 10.7866 11.3964 10.7896 10.9417 10.7926C10.7699 10.7764 10.6022 10.9191 10.6152 11.0918C10.6091 14.982 10.6164 18.8734 10.6115 22.7642C10.6214 23.3024 10.2578 23.8196 9.73913 24.0014C8.5412 24.4213 5.12198 22.2012 5.12198 22.2012C4.9965 22.1431 4.91682 22.007 4.92912 21.8718C4.92912 17.9576 4.92973 14.0433 4.92912 10.1297C4.91187 9.97191 5.00912 9.8298 5.15402 9.76538C8.70033 7.8134 12.2448 5.85654 15.7911 3.90336C15.9143 3.82115 16.086 3.8214 16.2089 3.90396C19.7552 5.85654 23.3003 7.81161 26.8472 9.76368C26.9926 9.828 27.0857 9.9725 27.0709 10.1297C27.0703 14.0433 27.0721 17.9576 27.0697 21.8713C27.0802 22.0098 27.0086 22.144 26.8793 22.2048C23.3661 24.1462 19.8129 26.025 16.3315 28.0228C16.1796 28.1099 16.0075 28.2086 15.8373 28.1126C14.9218 27.6062 14.0174 27.0801 13.1049 26.5688C13.0057 26.5069 12.8794 26.4803 12.7759 26.5496C12.3668 26.7652 11.982 26.9398 11.5122 27.1258C10.8524 27.387 10.9578 27.4938 11.5529 27.8405C12.62 28.4444 13.6889 29.0459 14.756 29.6504C15.4585 30.0888 16.4024 30.12 17.1275 29.7149C20.6861 27.7538 24.2436 25.7904 27.8029 23.8293C28.5113 23.468 29.0049 22.7202 28.9999 21.9327V10.0688C29.0068 9.31264 28.5576 8.58227 27.886 8.21259C24.3156 6.23947 20.7435 4.27064 17.1725 2.29872Z"
                  fill="#ffffff"
                ></path>{' '}
                <path
                  d="M22.5419 11.2062C21.1452 10.459 19.4836 10.4192 17.9315 10.5169C16.8102 10.6277 15.6309 10.9371 14.814 11.7409C13.9761 12.5489 13.7937 13.8537 14.1917 14.9085C14.4769 15.6539 15.1948 16.1386 15.9372 16.395C16.8935 16.7326 17.8979 16.837 18.9026 16.9414C19.819 17.0366 20.7357 17.1319 21.6165 17.4042C21.9763 17.5234 22.3953 17.7058 22.5055 18.0973C22.6073 18.5609 22.4957 19.0998 22.1193 19.4219C20.9237 20.3682 17.5979 20.2232 16.4166 19.4784C15.939 19.1611 15.7332 18.5994 15.6495 18.0641C15.6402 17.8973 15.5059 17.7443 15.3248 17.757C14.8713 17.7516 14.4178 17.7528 13.9643 17.7564C13.8061 17.7431 13.6416 17.8557 13.6329 18.0172C13.5397 20.4689 15.7914 21.5377 17.9039 21.773C19.1108 21.888 20.3442 21.8814 21.5327 21.6224C22.4261 21.419 23.3219 21.0444 23.9369 20.3563C24.6953 19.52 24.8444 18.2749 24.5043 17.2332C24.2443 16.4559 23.5012 15.9573 22.7416 15.7008C21.7086 15.3466 20.4844 15.1562 19.5488 15.0671C18.1889 14.9376 16.5729 14.9905 16.188 14.0969C16.0345 13.629 16.1651 13.048 16.5951 12.7602C17.7328 11.9885 20.0483 12.091 21.2265 12.6675C21.7675 12.9384 22.081 13.4948 22.2104 14.0565C22.2344 14.2215 22.3454 14.3937 22.5364 14.3865C22.9868 14.3955 23.4372 14.3889 23.8875 14.3895C24.0422 14.4003 24.2116 14.313 24.2418 14.1546C24.2227 12.9806 23.6232 11.7788 22.5419 11.2062Z"
                  fill="#ffffff"
                ></path>{' '}
              </g>
            </svg>
          </TimelineIcon>
          <TimelineBody>
            <h4 className="timeline-title">
              <span className="badge">NODE JS</span>
            </h4>
            <p>
              CSS, ou Cascading Style Sheets, é uma linguagem de estilos usada
            </p>
            <p className="timeline-subtitle">1 Hours Ago</p>
          </TimelineBody>
        </TimelineContainer>
      </Timeline>
    </Container>
  )
}
