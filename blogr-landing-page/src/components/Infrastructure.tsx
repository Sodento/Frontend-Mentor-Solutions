import image from "../images/illustration-phones.svg";

export default function Infrastructure() {
  return (
    <>
      <div className="infrastructure__container">
          <div className="infrastructure__images">
            <img src={image} alt="phones"></img>
          </div>
          <div className="infrastructure__text">
            <h1 className="infrastructure__text-title">
              State of the Art Infrastructure
            </h1>
            <p className="infrastructure__text-section">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
      </div>
    </>
  );
}
