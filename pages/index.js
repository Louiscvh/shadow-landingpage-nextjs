import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import styled from "styled-components";

const MainStyle = styled.main`
  .hero {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 30px;
    margin: 0 auto;
    width: 90%;
    margin-top: 200px;

    .hero__left  {
      h1 {
        font-size: 4rem;
        line-height: 70px;
        margin-block-start: 0em;
        margin-block-end: 0em;

        span {
          color: rgb(255, 116, 38);
        }
      }

      p {
        font-size: 1.2rem;
        opacity: 0.8;
        margin: 25px 0px;
      }

      div {
        display: flex;
        gap: 20px;
        margin-bottom: 15px;

        button {
          border: none;
          background: transparent;
          color: rgb(255, 116, 38);
          font-weight: 600;
        }
      }

      small {
        opacity: 0.5;
      }
    }

    .hero__right {
      position: relative;
      width: 100%;
      aspect-ratio: 1/0.5;
    }
  }

  .tech {
    h2 {
      text-align: center;
      font-size: 2.5rem;
      margin: 150px 0px;
      span {
        color: rgb(255, 116, 38);
      }
    }

    .techMain {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 30px;

      .techMain__left {
        &::before {
        }
        position: sticky;
        top: 25vh;
        width: 100%;
        aspect-ratio: 1/0.5;
      }

      .techMain__right {
        margin-right: 10%;
        padding-top: 200px;
        .techMain__block {
          display: flex;
          gap: 50px;
          margin-bottom: 120px;
          align-items: center;

          .techMain__block__img {
            height: 64px;
            aspect-ratio: 1/1;
            position: relative;
          }

          h3 {
            margin-block-start: 0em;
            margin-block-end: 0em;
            font-size: 1.3rem;
          }

          p {
            margin-top: 5px;
            opacity: 0.8;
          }
        }

        .techMain_btn {
          display: grid;
          place-items: center;
          button {
            margin: 0 auto;
            padding: 15px 20px;
            background: linear-gradient(
                  rgb(84, 26, 15) 0%,
                  rgb(12, 13, 13) 100%
                )
                padding-box,
              linear-gradient(
                92.83deg,
                rgb(255, 116, 38) 0%,
                rgb(249, 58, 19) 100%
              );
            border-radius: 50em;
            border: 5px solid transparent;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;

            &:hover {
              background: linear-gradient(
                  92.83deg,
                  rgb(255, 116, 38) 0%,
                  rgb(249, 58, 19) 100%
                ),
                linear-gradient(
                  92.83deg,
                  rgb(255, 116, 38) 0%,
                  rgb(249, 58, 19) 100%
                );
            }
          }
        }
      }
    }
  }

  .started {
    h2 {
      text-align: center;
      font-size: 2.5rem;
      margin: 150px 0px;
      span {
        color: rgb(255, 116, 38);
      }
    }
  }
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shadow - Le PC gamer basé sur le Cloud</title>
      </Head>

      <Header />

      <MainStyle>
        <section className="hero">
          <div className="hero__left">
            <h1>
              Ton nouveau PC est dans le <span>Cloud</span>
            </h1>
            <p>
              Shadow est un PC haut de gamme accessible depuis tous tes écrans,
              te permettant de lancer tous tes logiciels Windows.
            </p>
            <div>
              <a className="mainBtn">
                <span>S&apos;abonner</span>
              </a>
              <button>Voir en vidéo</button>
            </div>
            <small>Pour 29,99 €/mois</small>
          </div>
          <div className="hero__right">
            <Image
              layout="fill"
              alt="Main photo of the hero"
              src="https://shadow.tech/static/hero-home@2x-00b64f3a7383acb81baffce00772aa8b.png"
            ></Image>
          </div>
        </section>
        <section className="tech">
          <h2>
            La puissance d'un <span>PC haut de gamme</span>, sur tous tes écrans
          </h2>
          <div className="techMain">
            <div className="techMain__left">
              <Image
                src="https://shadow.tech/static/macbook-air-desktop-0bff2b251da52381c22111bf79ae1650.png"
                layout="fill"
              ></Image>
            </div>
            <div className="techMain__right">
              <div className="techMain__block">
                <div className="techMain__block__img">
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA2NCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0Ljc1OTIgMTQuNzA1NUMyNS4yNTkxIDE0LjE5NjQgMjUuMjU5MSAxMy4zNzEgMjQuNzU5MiAxMi44NjE5QzI0LjI1OTQgMTIuMzUyNyAyMy40NDg5IDEyLjM1MjcgMjIuOTQ5IDEyLjg2MTlDMjAuNTY0OSAxNS4yOSAxOS4yIDE4LjU3NjYgMTkuMiAyMi4wOEMxOS4yIDI1LjU4MzQgMjAuNTY0OSAyOC44NyAyMi45NDkgMzEuMjk4MkMyMy40NDg5IDMxLjgwNzMgMjQuMjU5NCAzMS44MDczIDI0Ljc1OTIgMzEuMjk4MkMyNS4yNTkxIDMwLjc4OTEgMjUuMjU5MSAyOS45NjM3IDI0Ljc1OTIgMjkuNDU0NkMyMi44NTA0IDI3LjUxMDUgMjEuNzYgMjQuODg0OCAyMS43NiAyMi4wOEMyMS43NiAxOS4yNzUyIDIyLjg1MDQgMTYuNjQ5NiAyNC43NTkyIDE0LjcwNTVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDQuOCAyMi4wOEM0NC44IDE4LjU3NjYgNDMuNDM1MSAxNS4yOSA0MS4wNTEgMTIuODYxOUM0MC41NTExIDEyLjM1MjcgMzkuNzQwNiAxMi4zNTI3IDM5LjI0MDggMTIuODYxOUMzOC43NDA5IDEzLjM3MSAzOC43NDA5IDE0LjE5NjQgMzkuMjQwOCAxNC43MDU1QzQxLjE0OTYgMTYuNjQ5NiA0Mi4yNCAxOS4yNzUyIDQyLjI0IDIyLjA4QzQyLjI0IDI0Ljg4NDUgNDEuMTQ5OCAyNy41MSAzOS4yNDEzIDI5LjQ1NEMzOC43NDE1IDI5Ljk2MzEgMzguNzQxNiAzMC43ODg2IDM5LjI0MTUgMzEuMjk3NkMzOS43NDE0IDMxLjgwNjcgNDAuNTUxOCAzMS44MDY2IDQxLjA1MTcgMzEuMjk3NUM0My40MzU0IDI4Ljg2OTMgNDQuOCAyNS41ODMxIDQ0LjggMjIuMDhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjguMzc5NiAxOC4zOTI4QzI4Ljg3OTUgMTcuODgzNiAyOC44Nzk1IDE3LjA1ODIgMjguMzc5NiAxNi41NDkxQzI3Ljg3OTcgMTYuMDQgMjcuMDY5MyAxNi4wNCAyNi41Njk0IDE2LjU0OTFDMjUuMTM5MyAxOC4wMDU3IDI0LjMyIDE5Ljk3ODQgMjQuMzIgMjIuMDhDMjQuMzIgMjQuMTgxNiAyNS4xMzkzIDI2LjE1NDQgMjYuNTY5NCAyNy42MTA5QzI3LjA2OTMgMjguMTIgMjcuODc5NyAyOC4xMiAyOC4zNzk2IDI3LjYxMDlDMjguODc5NSAyNy4xMDE4IDI4Ljg3OTUgMjYuMjc2NCAyOC4zNzk2IDI1Ljc2NzNDMjcuNDI0OCAyNC43OTQ4IDI2Ljg4IDIzLjQ4MyAyNi44OCAyMi4wOEMyNi44OCAyMC42NzcgMjcuNDI0OCAxOS4zNjUyIDI4LjM3OTYgMTguMzkyOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zOS42OCAyMi4wOEMzOS42OCAxOS45Nzg0IDM4Ljg2MDcgMTguMDA1NyAzNy40MzA2IDE2LjU0OTFDMzYuOTMwNyAxNi4wNCAzNi4xMjAzIDE2LjA0IDM1LjYyMDQgMTYuNTQ5MUMzNS4xMjA1IDE3LjA1ODIgMzUuMTIwNSAxNy44ODM2IDM1LjYyMDQgMTguMzkyOEMzNi41NzUyIDE5LjM2NTIgMzcuMTIgMjAuNjc3IDM3LjEyIDIyLjA4QzM3LjEyIDIzLjQ4MyAzNi41NzUyIDI0Ljc5NDggMzUuNjIwNCAyNS43NjczQzM1LjEyMDUgMjYuMjc2NCAzNS4xMjA1IDI3LjEwMTggMzUuNjIwNCAyNy42MTA5QzM2LjEyMDMgMjguMTIgMzYuOTMwNyAyOC4xMiAzNy40MzA2IDI3LjYxMDlDMzguODYwNyAyNi4xNTQ0IDM5LjY4IDI0LjE4MTYgMzkuNjggMjIuMDhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzQuNTYgMjIuMDhDMzQuNTYgMjAuNjQwMSAzMy40MTM4IDE5LjQ3MjcgMzIgMTkuNDcyN0MzMC41ODYxIDE5LjQ3MjcgMjkuNDQgMjAuNjQwMSAyOS40NCAyMi4wOEMyOS40NCAyMy41MiAzMC41ODYxIDI0LjY4NzMgMzIgMjQuNjg3M0MzMy40MTM4IDI0LjY4NzMgMzQuNTYgMjMuNTIgMzQuNTYgMjIuMDhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNDEuOTJWMC45NjAwMjJINjRWNDEuOTJIMFpNNjEuNDQgMy41MjAwMkgyLjU2VjM5LjM2SDYxLjQ0VjMuNTIwMDJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTIuNjggNDUuODhDMTIuNjE1IDQ1LjE3NSAxMy4xMzUgNDQuNTQ1IDEzLjg0IDQ0LjQ4SDQ5LjkyQzUwLjM4IDQ0LjQ3NSA1MC44MSA0NC43MTUgNTEuMDQ1IDQ1LjExNUM1MS4yNzUgNDUuNTE1IDUxLjI3NSA0Ni4wMDUgNTEuMDQ1IDQ2LjQwNUM1MC44MSA0Ni44MDUgNTAuMzggNDcuMDQ1IDQ5LjkyIDQ3LjA0SDE0LjA4QzEzLjM3NSA0Ny4xMDUgMTIuNzQ1IDQ2LjU4NSAxMi42OCA0NS44OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
                    layout="fill"
                  ></Image>
                </div>
                <div>
                  <h3>La meilleure qualité de streaming</h3>
                  <p>
                    Profite de hautes résolutions et de hauts taux de
                    rafraichissement : jusqu'en 4K 60 FPS ou 144 FPS en Full HD.
                  </p>
                </div>
              </div>
              <div className="techMain__block">
                <div className="techMain__block__img">
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zOC42NjAxIDEzLjQzNzlDMzguMTg1NiAxMi45NTg0IDM3LjUxOTcgMTIuNzQyMSAzNi44NzMxIDEyLjgxMzJDMzYuODY2NSAxMi44MTQgMzYuODU5OSAxMi44MTQ3IDM2Ljg1MzMgMTIuODE1NkMzNi44NDc2IDEyLjgxNjMgMzYuODQxOSAxMi44MTcgMzYuODM2MyAxMi44MTc4QzM2LjI4OTMgMTIuODk0MSAzNS43NTIzIDEzLjE3NzQgMzUuMzk0NCAxMy42Njg2TDIwLjg4MTEgMzMuMTQ4QzIwLjQwODIgMzMuNzgzMiAyMC4zNDA5IDM0LjYzOTIgMjAuNzQ2IDM1LjM0NDVDMjEuMTM0OSAzNi4wMzA0IDIxLjg2MjMgMzYuNDAzMiAyMi41ODkyIDM2LjQxMDJIMjguNDkxNEwyNS42NTEyIDQ4LjcwMTNMMjUuNjQ4MSA0OC43MTU1QzI1LjQxNzUgNDkuNzY3NyAyNi4wNTEgNTAuNzE5MSAyNi45NTg4IDUxLjA1ODZDMjcuODM5OSA1MS4zOTA5IDI4Ljg4OTkgNTEuMTI5IDI5LjQ3NjMgNTAuMzM0TDI5LjQ5NDMgNTAuMzA5TDQzLjE1ODQgMzAuODIzMkw0My4xNjkxIDMwLjgwNzhDNDMuNjEgMzAuMTU4OSA0My42NDEgMjkuMzE5MyA0My4yMzA3IDI4LjYzNzFMNDMuMjI3MSAyOC42MzExQzQyLjgyOTYgMjcuOTc4IDQyLjExNjggMjcuNjE0OCA0MS4zODk4IDI3LjYxNDhIMzYuMzU0MUwzOS4xOTE2IDE1LjMzNTFDMzkuMzYzMyAxNC42MzkxIDM5LjE0NDggMTMuOTI3NyAzOC42NjAxIDEzLjQzNzlaTTMzLjQ5NzQgMjguNjA2NkwzNi4yMTMgMTYuODU0N0wyMy41NTAzIDMzLjg1MDJIMzAuMTAwOUMzMC40OTExIDMzLjg1MDIgMzAuODU5OSAzNC4wMjgyIDMxLjEwMjcgMzQuMzMzNUMzMS4zNDU2IDM0LjYzODkgMzEuNDM1OSAzNS4wMzgzIDMxLjM0ODEgMzUuNDE4NEwyOC42NjM5IDQ3LjAzNDNMNDAuNDg2NCAzMC4xNzQ4SDM0Ljc0NDZDMzQuMzU0NCAzMC4xNzQ4IDMzLjk4NTYgMjkuOTk2OSAzMy43NDI4IDI5LjY5MTVDMzMuNDk5OSAyOS4zODYyIDMzLjQwOTYgMjguOTg2NyAzMy40OTc0IDI4LjYwNjZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTY0IDMyQzY0IDQ5LjY3MzEgNDkuNjczMSA2NCAzMiA2NEMxNC4zMjY5IDY0IDAgNDkuNjczMSAwIDMyQzAgMTQuMzI2OSAxNC4zMjY5IDAgMzIgMEM0OS42NzMxIDAgNjQgMTQuMzI2OSA2NCAzMlpNNjEuNDQgMzJDNjEuNDQgNDguMjU5MyA0OC4yNTkzIDYxLjQ0IDMyIDYxLjQ0QzE1Ljc0MDcgNjEuNDQgMi41NiA0OC4yNTkzIDIuNTYgMzJDMi41NiAxNS43NDA3IDE1Ljc0MDcgMi41NiAzMiAyLjU2QzQ4LjI1OTMgMi41NiA2MS40NCAxNS43NDA3IDYxLjQ0IDMyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                    layout="fill"
                  ></Image>
                </div>
                <div>
                  <h3>Latence imperceptible</h3>
                  <p>
                    Lance tous tes logiciels Windows à distance depuis ton
                    Shadow, sans latence perceptible.
                  </p>
                </div>
              </div>
              <div className="techMain__block">
                <div className="techMain__block__img">
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjMiIHZpZXdCb3g9IjAgMCA2NCA2MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTU2LjIgMC4yNDAwMzVDNTYuMTQ1IDAuMjUwMDM2IDU2LjA5IDAuMjY1MDM1IDU2LjA0IDAuMjgwMDM1QzU1LjQ0NSAwLjQxNTAzNSA1NS4wMjUgMC45NTAwMzYgNTUuMDQgMS41NjAwNEM1NS4wNCAzLjk5MDA0IDUzLjkxNSA1LjMyNTAzIDUxLjg0IDYuNjQwMDNDNDkuNzY1IDcuOTU1MDMgNDYuNzY1IDkuMDIwMDMgNDMuNjggMTAuMzJDNDAuNTk1IDExLjYyIDM3LjQgMTMuMTg1IDM0LjkyIDE1LjhDMzIuNjY1IDE4LjE4IDMxLjEgMjEuNDUgMzAuODQgMjUuODRDMjguNTMgMjUuNjY1IDI3LjE3NSAyNC45NSAyNS41NiAyNC4xMkMyMy42OSAyMy4xNiAyMS40NyAyMi4wNCAxNy45MiAyMi4wNEMxNS43MyAyMi4wNCAxMy42MzUgMjMuMzIgMTEuNjQgMjUuMkM5LjY0NSAyNy4wOCA3LjcxNSAyOS42MzUgNiAzMi42QzIuNTcgMzguNTMgMCA0Ni4wMjUgMCA1Mi43NkMwIDU1LjUzNSAwLjY5MDAwMSA1OC4wMSAyIDU5Ljg4QzMuMzEgNjEuNzUgNS4zMzUgNjMgNy42OCA2M0MxMy44NjUgNjMgMTguMzU1IDU5Ljg3NSAyMi4wOCA1Ni45NkMyNS44MDUgNTQuMDQ1IDI4LjggNTEuNDggMzIgNTEuNDhDMzUuMiA1MS40OCAzOC4xOTUgNTQuMDQ1IDQxLjkyIDU2Ljk2QzQ1LjY0NSA1OS44NzUgNTAuMTM1IDYzIDU2LjMyIDYzQzU4LjY2NSA2MyA2MC42OSA2MS43NSA2MiA1OS44OEM2My4zMSA1OC4wMSA2NCA1NS41MzUgNjQgNTIuNzZDNjQgNDYuMDI1IDYxLjQzIDM4LjUzIDU4IDMyLjZDNTYuMjg1IDI5LjYzNSA1NC4zNTUgMjcuMDggNTIuMzYgMjUuMkM1MC4zNjUgMjMuMzIgNDguMjcgMjIuMDQgNDYuMDggMjIuMDRDNDIuNTMgMjIuMDQgNDAuMzEgMjMuMTYgMzguNDQgMjQuMTJDMzYuODkgMjQuOTE1IDM1LjU4IDI1LjU5IDMzLjQ0IDI1LjhDMzMuNjkgMjIuMDM1IDM0Ljk0NSAxOS41MTUgMzYuOCAxNy41NkMzOC44NyAxNS4zNzUgNDEuNyAxMy45IDQ0LjY4IDEyLjY0QzQ3LjY2IDExLjM4IDUwLjcyNSAxMC4zNjUgNTMuMiA4LjgwMDAzQzU1LjY3NSA3LjIzNTAzIDU3LjYgNC44OTAwNCA1Ny42IDEuNTYwMDRDNTcuNjE1IDEuMTkwMDQgNTcuNDY1IDAuODM1MDM1IDU3LjIgMC41ODUwMzVDNTYuOTMgMC4zMzAwMzYgNTYuNTY1IDAuMjA1MDM1IDU2LjIgMC4yNDAwMzVaTTE3LjkyIDI0LjZDMjAuOTc1IDI0LjYgMjIuNDkgMjUuNCAyNC4zNiAyNi4zNkMyNi4yMyAyNy4zMiAyOC40NSAyOC40NCAzMiAyOC40NEMzMi4xMjUgMjguNDQgMzIuMjQgMjguNDQ1IDMyLjM2IDI4LjQ0QzMyLjM3NSAyOC40NCAzMi4zODUgMjguNDQgMzIuNCAyOC40NEMzNS43MTUgMjguMzYgMzcuODQ1IDI3LjI4NSAzOS42NCAyNi4zNkM0MS41MSAyNS40IDQzLjAyNSAyNC42IDQ2LjA4IDI0LjZDNDcuMTkgMjQuNiA0OC44NTUgMjUuNCA1MC42IDI3LjA0QzUyLjM0NSAyOC42OCA1NC4xNCAzMS4wODUgNTUuNzYgMzMuODhDNTkgMzkuNDcgNjEuNDQgNDYuNjk1IDYxLjQ0IDUyLjc2QzYxLjQ0IDU1LjEwNSA2MC44NSA1Ny4xMSA1OS45MiA1OC40NEM1OC45OSA1OS43NyA1Ny44MTUgNjAuNDQgNTYuMzIgNjAuNDRDNTAuOTg1IDYwLjQ0IDQ3LjE1NSA1Ny44MDUgNDMuNTIgNTQuOTZDMzkuODg1IDUyLjExNSAzNi40OCA0OC45MiAzMiA0OC45MkMyNy41MiA0OC45MiAyNC4xMTUgNTIuMTE1IDIwLjQ4IDU0Ljk2QzE2Ljg0NSA1Ny44MDUgMTMuMDE1IDYwLjQ0IDcuNjggNjAuNDRDNi4xODUgNjAuNDQgNS4wMSA1OS43NyA0LjA4IDU4LjQ0QzMuMTUgNTcuMTEgMi41NiA1NS4xMDUgMi41NiA1Mi43NkMyLjU2IDQ2LjY5NSA1IDM5LjQ3IDguMjQgMzMuODhDOS44NiAzMS4wODUgMTEuNjU1IDI4LjY4IDEzLjQgMjcuMDRDMTUuMTQ1IDI1LjQgMTYuODEgMjQuNiAxNy45MiAyNC42Wk00Ny4zNiAzMy41NkM0NS45NDUgMzMuNTYgNDQuOCAzNC43MDUgNDQuOCAzNi4xMkM0NC44IDM3LjUzNSA0NS45NDUgMzguNjggNDcuMzYgMzguNjhDNDguNzc1IDM4LjY4IDQ5LjkyIDM3LjUzNSA0OS45MiAzNi4xMkM0OS45MiAzNC43MDUgNDguNzc1IDMzLjU2IDQ3LjM2IDMzLjU2Wk0xNS4zNiAzNC44NFYzOC42OEgxMS41MlY0Mi41MkgxNS4zNlY0Ni4zNkgxOS4yVjQyLjUySDIzLjA0VjM4LjY4SDE5LjJWMzQuODRIMTUuMzZaTTQyLjI0IDM4LjY4QzQwLjgyNSAzOC42OCAzOS42OCAzOS44MjUgMzkuNjggNDEuMjRDMzkuNjggNDIuNjU1IDQwLjgyNSA0My44IDQyLjI0IDQzLjhDNDMuNjU1IDQzLjggNDQuOCA0Mi42NTUgNDQuOCA0MS4yNEM0NC44IDM5LjgyNSA0My42NTUgMzguNjggNDIuMjQgMzguNjhaTTUyLjQ4IDM4LjY4QzUxLjA2NSAzOC42OCA0OS45MiAzOS44MjUgNDkuOTIgNDEuMjRDNDkuOTIgNDIuNjU1IDUxLjA2NSA0My44IDUyLjQ4IDQzLjhDNTMuODk1IDQzLjggNTUuMDQgNDIuNjU1IDU1LjA0IDQxLjI0QzU1LjA0IDM5LjgyNSA1My44OTUgMzguNjggNTIuNDggMzguNjhaTTQ3LjM2IDQzLjhDNDUuOTQ1IDQzLjggNDQuOCA0NC45NDUgNDQuOCA0Ni4zNkM0NC44IDQ3Ljc3NSA0NS45NDUgNDguOTIgNDcuMzYgNDguOTJDNDguNzc1IDQ4LjkyIDQ5LjkyIDQ3Ljc3NSA0OS45MiA0Ni4zNkM0OS45MiA0NC45NDUgNDguNzc1IDQzLjggNDcuMzYgNDMuOFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
                    layout="fill"
                  ></Image>
                </div>
                <div>
                  <h3>Garde tes périphériques</h3>
                  <p>
                    Connecte ton clavier, ta souris, ton casque et la manette
                    que tu possèdes déjà à ton Shadow.
                  </p>
                </div>
              </div>
              <div className="techMain__block">
                <div className="techMain__block__img">
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA2MCA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY0IDAuNDAwMDNDMTQuNDcwNCAwLjM5NzYzMiAxNC4zMDIgMC40Mjg5NjggMTQuMTQ0NiAwLjQ5MjIxN0MxMy45ODcyIDAuNTU1NDY3IDEzLjg0MzkgMC42NDkzNjkgMTMuNzIzMSAwLjc2ODQ2NUMxMy42MDIzIDAuODg3NTYyIDEzLjUwNjQgMS4wMjk0OCAxMy40NDEgMS4xODU5N0MxMy4zNzU1IDEuMzQyNDYgMTMuMzQxOCAxLjUxMDQgMTMuMzQxOCAxLjY4MDAzQzEzLjM0MTggMS44NDk2NiAxMy4zNzU1IDIuMDE3NiAxMy40NDEgMi4xNzQwOUMxMy41MDY0IDIuMzMwNTggMTMuNjAyMyAyLjQ3MjUgMTMuNzIzMSAyLjU5MTZDMTMuODQzOSAyLjcxMDY5IDEzLjk4NzIgMi44MDQ1OSAxNC4xNDQ2IDIuODY3ODRDMTQuMzAyIDIuOTMxMDkgMTQuNDcwNCAyLjk2MjQzIDE0LjY0IDIuOTYwMDNINDUuMzZDNDUuNTI5NiAyLjk2MjQzIDQ1LjY5OCAyLjkzMTA5IDQ1Ljg1NTQgMi44Njc4NEM0Ni4wMTI4IDIuODA0NTkgNDYuMTU2MSAyLjcxMDY5IDQ2LjI3NjkgMi41OTE2QzQ2LjM5NzcgMi40NzI1IDQ2LjQ5MzYgMi4zMzA1OCA0Ni41NTkgMi4xNzQwOUM0Ni42MjQ1IDIuMDE3NiA0Ni42NTgyIDEuODQ5NjYgNDYuNjU4MiAxLjY4MDAzQzQ2LjY1ODIgMS41MTA0IDQ2LjYyNDUgMS4zNDI0NiA0Ni41NTkgMS4xODU5N0M0Ni40OTM2IDEuMDI5NDggNDYuMzk3NyAwLjg4NzU2MiA0Ni4yNzY5IDAuNzY4NDY1QzQ2LjE1NjEgMC42NDkzNjkgNDYuMDEyOCAwLjU1NTQ2NyA0NS44NTU0IDAuNDkyMjE3QzQ1LjY5OCAwLjQyODk2OCA0NS41Mjk2IDAuMzk3NjMyIDQ1LjM2IDAuNDAwMDNIMTQuNjRaTTguMjQgNS41MjAwM0M4LjA3MDM4IDUuNTE3NjMgNy45MDE5OCA1LjU0ODk3IDcuNzQ0NTggNS42MTIyMkM3LjU4NzE4IDUuNjc1NDcgNy40NDM5MiA1Ljc2OTM3IDcuMzIzMTMgNS44ODg0N0M3LjIwMjM0IDYuMDA3NTYgNy4xMDY0MiA2LjE0OTQ4IDcuMDQwOTUgNi4zMDU5N0M2Ljk3NTQ4IDYuNDYyNDYgNi45NDE3NyA2LjYzMDQgNi45NDE3NyA2LjgwMDAzQzYuOTQxNzcgNi45Njk2NiA2Ljk3NTQ4IDcuMTM3NiA3LjA0MDk1IDcuMjk0MDlDNy4xMDY0MiA3LjQ1MDU4IDcuMjAyMzQgNy41OTI1IDcuMzIzMTMgNy43MTE2QzcuNDQzOTIgNy44MzA2OSA3LjU4NzE4IDcuOTI0NiA3Ljc0NDU4IDcuOTg3ODRDNy45MDE5OCA4LjA1MTA5IDguMDcwMzggOC4wODI0MyA4LjI0IDguMDgwMDNINTEuNzZDNTEuOTI5NiA4LjA4MjQzIDUyLjA5OCA4LjA1MTA5IDUyLjI1NTQgNy45ODc4NEM1Mi40MTI4IDcuOTI0NiA1Mi41NTYxIDcuODMwNjkgNTIuNjc2OSA3LjcxMTZDNTIuNzk3NyA3LjU5MjUgNTIuODkzNiA3LjQ1MDU4IDUyLjk1OSA3LjI5NDA5QzUzLjAyNDUgNy4xMzc2IDUzLjA1ODIgNi45Njk2NiA1My4wNTgyIDYuODAwMDNDNTMuMDU4MiA2LjYzMDQgNTMuMDI0NSA2LjQ2MjQ2IDUyLjk1OSA2LjMwNTk3QzUyLjg5MzYgNi4xNDk0OCA1Mi43OTc3IDYuMDA3NTYgNTIuNjc2OSA1Ljg4ODQ3QzUyLjU1NjEgNS43NjkzNyA1Mi40MTI4IDUuNjc1NDcgNTIuMjU1NCA1LjYxMjIyQzUyLjA5OCA1LjU0ODk3IDUxLjkyOTYgNS41MTc2MyA1MS43NiA1LjUyMDAzSDguMjRaTTEuODQgMTAuNjRDMS41MDA1MyAxMC42NDAxIDEuMTc0OTggMTAuNzc0OSAwLjkzNDkzOCAxMS4wMTVDMC42OTQ4OTkgMTEuMjU1IDAuNTYwMDMyIDExLjU4MDYgMC41NTk5OTggMTEuOTJWNTAuMzJDMC41NjAwMzIgNTAuNjU5NSAwLjY5NDg5OSA1MC45ODUxIDAuOTM0OTM4IDUxLjIyNTFDMS4xNzQ5OCA1MS40NjUxIDEuNTAwNTMgNTEuNiAxLjg0IDUxLjZINTguMTZDNTguNDk5NSA1MS42IDU4LjgyNSA1MS40NjUxIDU5LjA2NTEgNTEuMjI1MUM1OS4zMDUxIDUwLjk4NTEgNTkuNDQgNTAuNjU5NSA1OS40NCA1MC4zMlYxMS45MkM1OS40NCAxMS41ODA2IDU5LjMwNTEgMTEuMjU1IDU5LjA2NTEgMTEuMDE1QzU4LjgyNSAxMC43NzQ5IDU4LjQ5OTUgMTAuNjQwMSA1OC4xNiAxMC42NEgxLjg0Wk0zLjEyIDEzLjJINTYuODhWNDkuMDRIMy4xMlYxMy4yWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTM3LjQ5OTMgNDAuNTkyMVYzOC40MjM2SDIyLjMyVjQwLjU5MjFIMzcuNDk5M1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMy4xNjIzIDI4LjY2NTVWMjIuMTYwMUgyNi42NTY5VjI4LjY2NTVIMjIuMzJMMjkuOTA5NiAzNi4yNTUxTDM3LjQ5OTMgMjguNjY1NUgzMy4xNjIzWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                    layout="fill"
                  ></Image>
                </div>
                <div>
                  <h3>Installe tous les jeux et logiciels que tu possèdes</h3>
                  <p>
                    Profite d'une expérience Windows 10 sans concession. Accède
                    à toutes tes applications PC avec la meilleure qualité de
                    streaming.
                  </p>
                </div>
              </div>
              <div className="techMain_btn">
                <button>Découvrir les caractéristiques techniques</button>
              </div>
            </div>
          </div>
        </section>
        <section className="started">
          <h2>
            Prise en main facile. <span>Annule à tout moment</span>
          </h2>
        </section>
      </MainStyle>

      <footer></footer>
    </div>
  );
}
