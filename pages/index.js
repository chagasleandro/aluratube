import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
const estilosDaHomePage = {
    //backgroundColor: "red"
  };

  //console.log(config.playlist); 

  return (
    <>
      <CSSReset />
      <div estilosDaHomePage={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}>
        <Menu />
        <Header />
        <Timeline playlist={config.playlist} >
          Conteúdo
        </Timeline>
      </div>
    </>
  );
}

export default HomePage

//function Menu() {
//  return (
//    <div>
//      Menu
//    </div>
//  )
//}

const StyledHeader = styled.div`
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    .use-info {
      margin-top: 50px;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 12px 32px;
      gap: 16px;
    }
  `;

function Header() {
  return (
    <StyledHeader>
      {/*<img src="banner" />*/}

      <section className="use-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  )
}

function Timeline(props) {
  //console.log("dentro do componentes", props.playlist);
  const playlistNames = Object.keys(props.playlist);

  return (

    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlist[playlistName];
        console.log(playlistName);
        console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}