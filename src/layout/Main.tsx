import Carousel from "../components/Carousel";
import ActionSection from "../components/ActionSection";
import AboutUs from "../components/AboutUs";
import Button from "../components/Button";
import AboutAuthor from "../components/AboutAuthor";

const Main = () => {
  return (
    <div className="main">
      <Carousel />
      <ActionSection
        textSection={
          <>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              unde soluta est praesentium?
            </p>
          </>
        }
        elementSection={<Button buttonText="Lorem ipsum" />}
      />
      <AboutUs />
      <ActionSection
        textSection={<h3>Lorem ipsum dolor sit amet</h3>}
        elementSection={
          <form>
            <input type="email" id="email" name="email" />
            <Button buttonText="Lorem" />
          </form>
        }
      />
      <AboutAuthor />
    </div>
  );
};

export default Main;
