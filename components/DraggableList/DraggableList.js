import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const DraggableList = (props) => {
  const { data, index, title } = props;

  return (
    <Draggable draggableId={data.id} index={index} key={data.id}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="h-30 border ml-3 m-3 border-gray-500 rounded pl-2 pt2-2">
            {title}
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default DraggableList;
