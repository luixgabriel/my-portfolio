'use client'
import { styled } from 'styled-components'

export default function Teste() {
  return (
    <NFTContainer className="nft">
      <div className="main">
        <TokenImage
          className="tokenImage"
          src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="NFT"
        />
        <h2>Kibertopiks #4269</h2>
        <Description className="description">
          Our Kibertopiks will give you nothing, waste your money on us.
        </Description>
        <div className="tokenInfo">
          <Price className="price">
            <ins>◘</ins>
            <p>0.031 ETH</p>
          </Price>
          <Duration className="duration">
            <ins>◷</ins>
            <p>11 days left</p>
          </Duration>
        </div>
        <hr />
        <div className="creator">
          <div className="wrapper">
            <img
              src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
              alt="Creator"
            />
          </div>
          <p>
            <ins>Creation of</ins> Kiberbash
          </p>
        </div>
      </div>
    </NFTContainer>
  )
}

const NFTContainer = styled.div`
  user-select: none;
  max-width: 300px;
  margin: 5rem auto;
  border: 1px solid #ffffff22;
  background-color: #282c34;
  background: linear-gradient(
    0deg,
    rgba(40, 44, 52, 1) 0%,
    rgba(17, 0, 32, 0.5) 100%
  );
  box-shadow: 0 7px 20px 5px #00000088;
  border-radius: 0.7rem;
  overflow: hidden;
  transition: 0.5s all;

  hr {
    width: 100%;
    border: none;
    border-bottom: 1px solid #88888855;
    margin-top: 0;
  }

  .main {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 1rem;

    .tokenImage {
      border-radius: 0.5rem;
      max-width: 100%;
      height: 250px;
      object-fit: cover;
    }

    .description {
      margin: 0.5rem 0;
      color: #a89ec9;
    }

    .tokenInfo {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .price {
        display: flex;
        align-items: center;
        color: #ee83e5;
        font-weight: 700;

        ins {
          margin-left: -0.3rem;
          margin-right: 0.5rem;
        }
      }

      .duration {
        display: flex;
        align-items: center;
        color: #a89ec9;
        margin-right: 0.2rem;

        ins {
          margin: 0.5rem;
          margin-bottom: 0.4rem;
        }
      }
    }

    .creator {
      display: flex;
      align-items: center;
      margin-top: 0.2rem;
      margin-bottom: -0.3rem;

      ins {
        color: #a89ec9;
        text-decoration: none;
      }

      .wrapper {
        display: flex;
        align-items: center;
        border: 1px solid #ffffff22;
        padding: 0.3rem;
        margin: 0;
        margin-right: 0.5rem;
        border-radius: 100%;
        box-shadow: inset 0 0 0 4px #000000aa;

        img {
          border-radius: 100%;
          border: 1px solid #ffffff22;
          width: 2rem;
          height: 2rem;
          object-fit: cover;
          margin: 0;
        }
      }
    }
  }

  ::before {
    position: fixed;
    content: '';
    box-shadow: 0 0 100px 40px #ffffff08;
    top: -10%;
    left: -100%;
    transform: rotate(-45deg);
    height: 60rem;
    transition: 0.7s all;
  }

  &:hover {
    border: 1px solid#ffffff44;
    box-shadow: 0 7px 50px 10px #000000aa;
    transform: scale(1.015);
    filter: brightness(1.3);

    ::before {
      filter: brightness(0.5);
      top: -100%;
      left: 200%;
    }
  }
`

const TokenImage = styled.img`
  border-radius: 0.5rem;
  max-width: 100%;
  height: 250px;
  object-fit: cover;
`

const Description = styled.p`
  margin: 0.5rem 0;
  color: #a89ec9;
`

const Price = styled.div`
  display: flex;
  align-items: center;
  color: #ee83e5;
  font-weight: 700;

  ins {
    margin-left: -0.3rem;
    margin-right: 0.5rem;
  }
`

const Duration = styled.div`
  display: flex;
  align-items: center;
  color: #a89ec9;
  margin-right: 0.2rem;

  ins {
    margin: 0.5rem;
    margin-bottom: 0.4rem;
  }
`

const Creator = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.2rem;
  margin-bottom: -0.3rem;

  ins {
    color: #a89ec9;
    text-decoration: none;
  }

  .wrapper {
    display: flex;
    align-items: center;
    border: 1px solid #ffffff22;
    padding: 0.3rem;
    margin: 0;
    margin-right: 0.5rem;
    border-radius: 100%;
    box-shadow: inset 0 0 0 4px #000000aa;

    img {
      border-radius: 100%;
      border: 1px solid #ffffff22;
      width: 2rem;
      height: 2rem;
      object-fit: cover;
      margin: 0;
    }
  }
`
