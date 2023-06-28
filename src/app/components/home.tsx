'use client'
import { styled } from "styled-components"

export function HomePage(props: any){

const ContainerHome = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: blue;
`

return (
    <ContainerHome>
        <h1>Hello world</h1>
    </ContainerHome>
)
}