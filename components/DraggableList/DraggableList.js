import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { faPlusCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DraggableList = (props) => {
  const { data, index, title } = props;
  const [newCardVisible, setNewCardVisible] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState("");

  const createNewCard = () => {
    console.log("MAKE THIS A REALITY");
  };

  const handleNewCardTitleChange = (e) => {
    setNewCardTitle(e.target.value);
  };

  const toggleNewCardVisible = () => {
    setNewCardVisible(!newCardVisible);
    setNewCardTitle("");
  };

  return (
    <Draggable draggableId={data.id} index={index} key={data.id}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-zinc drop-shadow-md w-1/6 h-30 ml-3 m-3 border-gray-500 rounded"
        >
          <div className="text-xl px-2 shadow-lg">{title}</div>
          <div className="py-2 px-2 my-1 rounded bg-zinc text-m">
            Filler Card
          </div>
          <div className="py-2 px-2">
            {newCardVisible ? (
              <span className="overflow-hidden">
                <input
                  class="placeholder:italic placeholder:text-slate-400 text-gray-50
                   w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm
                   bg-zinc sm:text-sm"
                  type="text"
                  name="search"
                  value={newCardTitle}
                  onChange={handleNewCardTitleChange}
                  placeholder="Enter new card title..."
                  onKeyDown={(e) => {
                    if (e.key == "Enter") {
                      // TODO: FILL ME
                    } else if (e.key == "Escape") {
                      toggleNewCardVisible();
                    }
                  }}
                />
                <div className="mt-2">
                  <button
                    className="bg-orange-400/80 px-2 py-1 rounded"
                    onClick={createNewCard}
                  >
                    Add List
                  </button>
                  <button onClick={toggleNewCardVisible}>
                    <FontAwesomeIcon icon={faTimesCircle} className="pl-2" />
                  </button>
                </div>
              </span>
            ) : (
              <button
                className="text-slate-300"
                onClick={() => {
                  toggleNewCardVisible();
                }}
              >
                <FontAwesomeIcon icon={faPlusCircle} className="pr-2" />
                Add a card
              </button>
            )}
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default DraggableList;
