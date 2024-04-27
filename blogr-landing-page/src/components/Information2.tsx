import img from "../images/illustration-laptop-desktop.svg";

export default function Information2() {
  return (
    <>
      <div className="information__container">
        <div className="information2__image">
          <img src={img} alt="" />
        </div>
        <div className="information__text">
          <div className="information__text-section">
            <h1 className="information__text-section-title">
              Free, open, simple
            </h1>
            <p className="information__text-section-content">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="information__text-section">
            <h1 className="information__text-section-title">
              Powerful tooling
            </h1>
            <p className="information__text-section-content">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
