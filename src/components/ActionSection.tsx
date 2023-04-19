const ActionSection = (props: any) => {
  return (
    <div className="call_to_action">
      <div className="call_to_action__element">{props.textSection}</div>
      <div className="call_to_action__element">{props.elementSection}</div>
    </div>
  );
};

export default ActionSection;
