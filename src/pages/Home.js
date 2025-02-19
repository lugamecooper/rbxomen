import Developpers from "../elements/Developpers";
import config from "../contactConfig.json";
import Title from "../elements/Title";

const Home = () => {
  const imageGenerator = (imageConstructor) => {
    return imageConstructor.map(([link, image, name], index) => (
      <Developpers key={index} link={link} image={image} name={name}/>
    ));
  };

  return (
    <>
      <div className="Home">
        <div className="alternate">
          <div className="a2">
            <img alt="who are we" src="src/"></img>
            <br/><br/><br/><br/>
            <Title text={"WHO ARE WE"}/>
            <br/><br/>
            <p>Omen dev is an independent roblox development studio founded on June 2023.</p>
            <br/><br/><br/>
          </div>
        </div>
        <div className="DevelopersContainer">
          {imageGenerator(config["imageData"])}
        </div>
      </div>
    </>
  );
};

export default Home;
