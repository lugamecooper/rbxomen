import Developpers from "../elements/Developpers";
import config from "../config.json";

const Home = () => {
  const imageGenerator = (imageConstructor) => {
    return imageConstructor.map(([link, image, name], index) => (
      <Developpers key={index} link={link} image={image} name={name}/>
    ));
  };

  return (
    <>
      <div className="DevelopersContainer">
        {imageGenerator(config["imageData"])}
      </div>
    </>
  );
};

export default Home;
