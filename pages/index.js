import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Header from "../components/Header";
import NewListButton from "../components/NewListButton";

// https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/

const Index = () => {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const reorder = (list, startIndex, endIndex) => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    };

    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const reordered_lists = reorder(
      lists,
      result.source.index,
      result.destination.index
    );

    dispatch({ type: "REORDER_LISTS", payload: reordered_lists });
  };

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

  return (
    <div
      className="
      bg-gradient-to-br from-slate-900 to-indigo-800
      flex min-h-screen flex-col items-left
      text-slate-50"
    >
      <Header />
      <div className="h-screen border ml-3 m-3 border-gray-500 rounded pl-2 pt2-2">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="lists">
            {(provided) => (
              <ul
                className="lists"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {lists.map((element, index) => {
                  console.log(element)
                  const title = Object.keys(element)[0];
                  const data = element[title]
                  return (
                    <DraggableList
                      data={data}
                      index={index}
                      title={title}
                      key={data.id}
                    />
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        <NewListButton />
      </div>
    </div>
  );
};

export default Index;
