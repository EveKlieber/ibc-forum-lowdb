import { useState, createContext } from "react";
export const CommentsContext = createContext();

export const CommentsContextProvider = (props) => {
  const [commentsContext, setCommentsContext] = useState([]);

  return (
    <CommentsContext.Provider value={[commentsContext, setCommentsContext]}>
      {props.children}
    </CommentsContext.Provider>
  );
};
