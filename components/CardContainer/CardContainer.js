import { Droppable } from "react-beautiful-dnd";

const CardContainer = () => {
  return (
    <div>
      <Droppable>
        <div className="m-2">hello</div>
        <div className="m-2">hello</div>
        <div className="m-2">hello</div>
        <div className="m-2">hello</div>
        <div className="m-2">hello</div>
        <div className="m-2">hello</div>
      </Droppable>
    </div>
  );
};

export default CardContainer;
