import logo from "../images/logo.svg";

export default function Header() {
  const buttons = ["About", "Careers", "Events", "Products", "Support"];

  return (
    <header className="bg-hero-pattern bg-contain bg-no-repeat px-40 py-12 flex flex-col gap-36 h-screen">
      <div className="flex justify-between items-center">
        <img src={logo} alt="logo" />
        <div className="flex gap-8 ">
          {buttons.map((button) => {
            return <a href="#" className="text-primary-100 hover:underline hover:underline-offset-8 decoration-2">{button}</a>;
          })}
        </div>
      </div>
      <div className="border border-primary-100 max-w-xl p-8">
        <h1 className="uppercase text-7xl  font-thin text-primary-100  tracking-wider">Immersive Experiences That Deliver</h1>
      </div>
    </header>
  );
}
