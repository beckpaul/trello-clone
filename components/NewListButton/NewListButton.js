import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

const NewListButton = () => {
  const dispatch = useDispatch();
  const [addListVisible, setAddListVisible] = useState(false);
  const [newListTitle, setNewListTitle] = useState("");

  const handleNewListTitle = (e) => {
    setNewListTitle(e.target.value);
  };

  const toggleNewListVisible = () => {
    setAddListVisible(!addListVisible);
    setNewListTitle("");
  };

  const createNewList = () => {
    dispatch({ type: "ADD_LIST", payload: newListTitle });
    setAddListVisible(false);
  };

  return (
    <div>
      {addListVisible ? (
        <span>
          <input
            id="input-title"
            type="text"
            className="border-b mt-2  border-gray-300 bg-gray-700 px-4 py-2 focus:outline-none"
            onChange={handleNewListTitle}
            value={newListTitle}
            placeholder="Enter new list title..."
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                createNewList();
              } else if (e.key == "Escape") {
                toggleNewListVisible();
              }
            }}
          />
          <div className="mt-2">
            <button
              className="bg-orange-400/80 px-2 py-1 rounded"
              onClick={createNewList}
            >
              Add List
            </button>
            <button onClick={toggleNewListVisible}>
              <FontAwesomeIcon icon={faTimesCircle} className="pl-2" />
            </button>
          </div>
        </span>
      ) : (
        <button
          className="bg-slate-500/20 hover:bg-slate-500/50  border-gray-300 px-3 py-2 rounded mt-2"
          onClick={toggleNewListVisible}
        >
          <FontAwesomeIcon icon={faPlusCircle} className="pr-2" />
          Add Another List
        </button>
      )}
    </div>
  );
};

export default NewListButton;
