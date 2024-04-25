import emilyAvatar from "../images/image-emily.jpg";
import thomasAvatar from "../images/image-thomas.jpg";
import jennieAvatar from "../images/image-jennie.jpg";

export default function Testimontials() {
  const information = [
    {
      avatar: emilyAvatar,
      paragraph:
        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      job: "Marketing Director",
    },
    {
      avatar: thomasAvatar,
      paragraph:
        "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      job: "Chief Operating Officer",
    },
    {
      avatar: jennieAvatar,
      paragraph:
        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",

      name: "Jennie F.",
      job: "Business Owner",
    },
  ];
  return (
    <>
      <div className="testimontials__container">
        <h1 className="testimontials__container-title">Client Testimonials</h1>
        <div className="testimontials__container-cards">
          {information.map((e, index) => {
            return (
              <div className="testimontials__container-card">
                <img src={e.avatar} alt="avatar"></img>
                <p className="testimontials__container-card-desc">
                  {e.paragraph}
                </p>
                <div>
                  <h1 className="testimontials__container-card-name">
                    {e.name}
                  </h1>
                  <p className="testimontials__container-card-job">{e.job}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
