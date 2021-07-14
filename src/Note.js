import React from "react";
import "./Note.css";
import DeleteIcon from "@material-ui/icons/Delete";
import {useStateValue} from "./StateProvider";

function Note({ id, task, cato, priority }) {
  const [{notes}, dispatch] = useStateValue();
  const handleDeleteIcon = () => {
      dispatch(
        {
          type: "REMOVE_NOTE",
          id: id,
        }
      )
  }
  return (
    <div className="note">
      <div className="note__info">
        <h2>Priority: {priority}</h2>
      <h3>Category:  {cato}</h3>
      <p>Task:  {task}</p>
      </div>
      <div onClick={handleDeleteIcon} className="note__delete">
        <DeleteIcon  fontSize="large"/>
      </div>
    </div>
  );
}

export default Note;
