import React, { useState } from "react";
import Note from "./Note";
import "./Home.css";
import { BrowserRouter as Link } from "react-router-dom";
import Addnote from "./Addnote";
import { useStateValue } from "./StateProvider";

function Home() {
  const [task, setTask] = useState("");
  const [cato, setCato] = useState("");
  const [priority, setPriority] = useState("");
  const [{ notes }, dispatch] = useStateValue();

const addToBasket = (e) => {
    // Add item to basket
    e.preventDefault();
    dispatch({
      type: "ADD_NOTE",
      item: {
        id: new Date().getTime().toString(),
        priority: priority,
        task: task,
        cato: cato,
      },
    });

    setTask('');
    setCato('');
    setPriority('');
  };

  return (
    <>
      <div className="home">
        <div className="form">
          <div className="home_form_h1">
            <h1>Add New</h1>
          </div>

          <form
            autocomplete="off"
            className="home__form"
            onSubmit={addToBasket}
          >
            <div>
              <label>priority : </label>
              <input
                type="text"
                name="priority"
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              />
            </div>
            <br></br>
            <div>
              <label> category : </label>
              <input
                type="text"
                name="cato"
                id="cato"
                value={cato}
                onChange={(e) => setCato(e.target.value)}
              />
            </div>
            <br></br>
            <div>
              <label> Add Task : </label>
              <input
                type="text"
                name="task"
                id="task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <br></br>
            <button className="home__btn" type="submit" onSubmit={addToBasket}>
              Add
            </button>
          </form>
        </div>

        <div className="home__note">
          {notes.map((note) => {
            return (
              <Note
                id={note.id}
                cato={note.cato}
                task={note.task}
                priority={note.priority}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
