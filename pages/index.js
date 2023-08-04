import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Header from "../components/Header";
import NewListButton from "../components/NewListButton";

// https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/

const Index = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const handleDragEnd = (result) => {
    const { destination, source } = result;

    if (!result.destination) {
      return;
    }
    // Reorder the lists based on the source and destination indexes
    const listOrder = Array.from(Object.keys(lists));
    const [removed] = listOrder.splice(source.index, 1);
    listOrder.splice(destination.index, 0, removed);

    // Create a new object with the reordered lists
    const reorderedLists = listOrder.reduce((acc, listId) => {
      acc[listId] = lists[listId];
      return acc;
    }, {});
    // dispatch({ type: "REORDER_LISTS", payload: reorderedLists });
  };

  const DraggableList = (props) => {
    const { list, index, title } = props;
    return (
      <Draggable draggableId={list.id} index={index} key={list.id}>
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

  // Double return here seems wrong
  const Lists = ({ lists }) => {
    if (lists) {
      return (
        <div>
          {Object.keys(lists).map((listKey, index) => {
            const list = lists[listKey];
            return (
              <DraggableList
                list={list}
                index={index}
                title={listKey}
                key={list.id}
              />
            );
          })}
        </div>
      );
    }
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
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="lists">
            {(provided) => (
              <ul
                className="lists"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Lists lists={lists} />
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
// 16 25 1
export default Index;
