import img from "../images/illustration-editor-desktop.svg";

export default function Information() {
  return (
    <>
    
      <div className="information__container">
      <h1 className="information__title">Designed for the future</h1>
        <div className="information__text">
          <div className="information__text-section">
            <h1 className="information__text-section-title">
              Introducing an extensible editor
            </h1>
            <p className="information__text-section-content">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="information__text-section">
            <h1 className="information__text-section-title">
              Robust content management
            </h1>
            <p className="information__text-section-content">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
        <div className="information__image">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
}
