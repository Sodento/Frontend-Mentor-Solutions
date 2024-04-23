import heroDesktop from "../images/image-hero-desktop.png";
import clientAudiophile from "../images/client-audiophile.svg";
import clientDatabiz from "../images/client-databiz.svg";
import clientMaker from "../images/client-maker.svg";
import clientMeet from "../images/client-meet.svg";

export default function Body() {
  const companies = [
    { logo: clientDatabiz },
    { logo: clientAudiophile },
    { logo: clientMeet },
    { logo: clientMaker },
  ];

  return (
    <>
      <div className="container">
        <div className="information">
          <div className="information__text">
            <h1 className="information__text-title">Make remote work</h1>
            <p className="information__text-info">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="information__text-btn">Learn more</button>
          </div>
          <div className="information__companies">
            {companies.map((name) => {
              return <img src={name.logo}></img>;
            })}
          </div>
        </div>
        <img src={heroDesktop} className="hero-image" alt="hero desktop"></img>
      </div>
    </>
  );
}
