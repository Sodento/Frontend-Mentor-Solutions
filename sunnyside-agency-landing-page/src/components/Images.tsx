import image1 from "../images/desktop/image-gallery-milkbottles.jpg";
import image2 from "../images/desktop/image-gallery-orange.jpg";
import image3 from "../images/desktop/image-gallery-cone.jpg";
import image4 from "../images/desktop/image-gallery-sugarcubes.jpg";

export default function Images() {
  const images = [image1, image2, image3, image4];

  return (
    <>
      <div className="images__container">
        {images.map((image) => {
          return <img src={image} alt="" className="images__container-card"></img>;
        })}
      </div>
    </>
  );
}
