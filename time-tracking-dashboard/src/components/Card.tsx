import ellipsis from "../images/icon-ellipsis.svg";

export default function Card({
  type,
  current,
  frame,
  previous,
  backgroundColor,
  backgroundImage,
}: any) {
  return (
    <>
      <div
        className="card"
        style={{
          backgroundColor: backgroundColor,
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <div className="card__details">
          <div className="card__details-section">
            <div className="card__details-section-information">
              <h3 className="card__details-section-information-title">
                {type}
              </h3>
              <img
                className="card__details-section-information-ellipsis"
                src={ellipsis}
                alt="ellipsis"
              ></img>
            </div>
          </div>
          <h1 className="card__details-section-information-time">
            {current}hrs
          </h1>
          <p className="card__details-section-information-info">
            Last {frame} - {previous}hrs
          </p>
        </div>
      </div>
    </>
  );
}
