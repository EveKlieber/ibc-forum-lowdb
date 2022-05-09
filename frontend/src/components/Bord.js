import { NavLink } from "react-router-dom";
import { CommentsContext } from "../context/CommentsContext";
import { useContext, useEffect, useState } from "react";

const Board = () => {
  const [comments, setComments] = useContext(CommentsContext);

  {
    const topic1Comments = JSON.parse(localStorage.getItem("topic1"));
    const topic2Comments = JSON.parse(localStorage.getItem("topic2"));
    const topic3Comments = JSON.parse(localStorage.getItem("topic3"));
    const topic4Comments = JSON.parse(localStorage.getItem("topic4"));
  }

  return (
    <>
      <main>
        <nav>
          <ul>
            <NavLink to="/t1">
              <li>1. Tech talk</li>
            </NavLink>

            <NavLink to="/t2">
              <li>2. Driving technology</li>
            </NavLink>

            <NavLink to="/t3">
              <li>3. Open Trails</li>
            </NavLink>

            <NavLink to="/t4">
              <li>4. Travel, routes, destinations</li>
            </NavLink>

            
          </ul>
        </nav>
      </main>
    </>
  );
};

export default Board;
