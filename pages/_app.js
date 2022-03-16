import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: rgb(10, 12, 13);
    color: white;
  }

  li {
    list-style: none;
  } 

  body, input, button {
    font-family: 'Poppins', sans-serif;
  }

  p {
    margin-block-start: 0em;
    margin-block-end: 0em;
  }

  .mainBtn {
    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0px;
      top: 0px;
      z-index: -1;
      background: rgba(249, 58, 19, 0.32);
      border-radius: 3rem;
      transform: scale(1.08) scaleY(1.08);
    }
    color: white;
    position: relative;
    padding: 12px 20px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;

    &:hover {
      &::after {
        transform: scale(1.08) scaleY(1.08);
      }
    }

    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0px;
      top: 0px;
      z-index: -1;
      background: linear-gradient(92.83deg, rgb(255, 116, 38) 0%, rgb(249, 58, 19) 100%);
      border-radius: 3rem;
      transition: transform .15s ease;
    }

  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
