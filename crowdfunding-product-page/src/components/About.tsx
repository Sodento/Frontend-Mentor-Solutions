import Card from "./Card";

export default function About() {
  return (
    <>
      <div className="about__container">
        <div className="about__card">
          <h1 className="about__card-title">About this project</h1>
          <p className="about__card-text">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="about__card-text">
            Featuring artisan craftsmanship, the spimlicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be sorted under the stand.
          </p>
        </div>
        <Card
          title="Bamboo Stand"
          price="25"
          description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to ad a special Backer member list."
          amount="101"
        />
        <Card
          title="Black Edition Stand"
          price="75"
          description="You get a Black Special Edition computer stand and a persona thank you. You'll be added to our Backer member list. Shipping is included."
          amount="64"
        />
        <Card
          title="Mahogany Special Edition"
          price="200"
          description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
          amount="0"
        />
      </div>
    </>
  );
}
