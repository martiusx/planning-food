import Button from "./Button";

const CallToAction = () => {
  return (
    <div className="call_to_action">
      <div className="call_to_action__element">
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat unde
          soluta est praesentium?
        </p>
      </div>
      <div className="call_to_action__element">
        <Button buttonText="Lorem ipsum" />
      </div>
    </div>
  );
};

export default CallToAction;
