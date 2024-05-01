import interactive from "../images/desktop/image-interactive.jpg";
import deepEarth from '../images/desktop/image-deep-earth.jpg';
import nightArcade from '../images/desktop/image-night-arcade.jpg';
import soccerTeam from '../images/desktop/image-soccer-team.jpg';
import theGrid from '../images/desktop/image-grid.jpg';
import fromAbove from '../images/desktop/image-from-above.jpg';
import pocketBorealis from '../images/desktop/image-pocket-borealis.jpg';
import theCuriosity from '../images/desktop/image-curiosity.jpg';
import makeItFisheye from '../images/desktop/image-fisheye.jpg';

export default function Body() {
  const imageTexts = [
    {
      first: "Deep",
      second: "Earth",
      image: deepEarth,
    },
    {
      first: "Night",
      second: "Arcade",
      image: nightArcade,
    },
    {
      first: "Soccer",
      second: "team VR",
      image: soccerTeam,
    },
    {
      first: "The",
      second: "Grid",
      image: theGrid,
    },
    {
      first: "From up",
      second: "above VR",
      image: fromAbove,
    },
    {
      first: "Pocket",
      second: "borealis",
      image: pocketBorealis,
    },
    {
      first: "The",
      second: "curiosity",
      image: theCuriosity,
    },
    {
      first: "Make it",
      second: "fisheye",
      image: makeItFisheye,
    },
  ];

  return (
    <div className="flex flex-col p-32 gap-32 ">
      <div className="flex justify-end">
        <img
          className="absolute -z-10 left-32"
          src={interactive}
          alt="interactive"
        />
        <div className="flex flex-col gap-8 bg-primary-100 max-w-2xl  pt-24 pl-24 mt-48">
          <h1 className="text-5xl  font-extralight uppercase tracking-wider">
            The leader in inter tracking-active VR
          </h1>
          <p className="text-primary-400 font-josefin pr-32">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex justify-between items-center">
          <h1 className="uppercase text-5xl font-light">Our Creations</h1>
          <button className="uppercase border-2 w-40 h-10 font-josefin tracking-widest hover:bg-primary-200 hover:text-primary-100 rounded">
            See All
          </button>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          {imageTexts.map((text) => {
            return (
              <div className="h-96 flex flex-col justify-end text-primary-100 w-80 hover:text-primary-200 hover:opacity-40  hover:cursor-pointer">
                <img src={text.image} alt="" className="h-96 absolute -z-10 w-72 " />
                <p className="uppercase text-4xl mx-8 font-thin tracking-wider">{text.first}</p>
                <p className="uppercase text-4xl  mx-8 mb-8 font-thin tracking-wider">{text.second}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
