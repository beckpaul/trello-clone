import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // TODO: have it so a copy of original title is saved for escape event
  const dispatch = useDispatch();
  const [editingTitle, setEditingTitle] = useState(false);

  const [title, setTitle] = useState(
    useSelector((state) => state.title.titleBody)
  );

  const updateTitle = () => {
    dispatch({ type: "UPDATE_TITLE", payload: { titleBody: title } });
    setEditingTitle(false);
  };

  return (
    <div id="header" className="bg-zinc shadow-md py-3 px-4">
      {editingTitle ? (
        <div>
          <input
            id="input-title"
            type="text"
            class="px-4 py-2
            hover:bg-zinc-dark focus:bg-slate-200
            focus:text-black
            bg-zinc"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                updateTitle();
              } else if (e.key == "Escape") {
                setEditingTitle(false);
              }
            }}
          />
          <button
            className="topography font-bold py-2 px-4 ml-2 rounded"
            onClick={() => {
              updateTitle();
            }}
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </div>
      ) : (
        <div
          onClick={() => {
            setEditingTitle(true);
          }}
        >
          <div id="header-title" className="px-4 py-2">
            {title}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
